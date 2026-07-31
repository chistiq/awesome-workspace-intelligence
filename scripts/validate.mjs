import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const requiredFiles = [
  'README.md',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  'GOVERNANCE.md',
  'SECURITY.md',
  'LICENSE',
];
const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(resolve(root, file))) {
    errors.push(`${file}: required file is missing.`);
  }
}

const readmePath = resolve(root, 'README.md');
if (existsSync(readmePath)) {
  const readme = readFileSync(readmePath, 'utf8');
  const lines = readme.split('\n');

  const requiredText = [
    ['[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)', 'Awesome badge'],
    ['## Contents', 'Contents section'],
    ['## Contributing', 'Contributing section'],
    ['## License', 'License section'],
  ];
  for (const [needle, label] of requiredText) {
    if (!readme.includes(needle)) errors.push(`README.md: missing ${label}.`);
  }

  const seenNames = new Map();
  const seenUrls = new Map();
  const entriesByHeading = new Map();
  let heading = 'Top level';

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const headingMatch = line.match(/^#{2,3} (.+)$/);
    if (headingMatch) heading = headingMatch[1];

    const entry = line.match(/^- \[([^\]]+)\]\((https?:\/\/[^)\s]+)\) - (.+)$/);
    if (!entry) return;

    const [, name, url, description] = entry;
    const normalizedName = name.trim().toLowerCase();
    const normalizedUrl = url
      .replace(/#.*$/, '')
      .replace(/\/$/, '')
      .toLowerCase();

    if (seenNames.has(normalizedName)) {
      errors.push(
        `README.md:${lineNumber}: duplicate name "${name}" (first used on line ${seenNames.get(normalizedName)}).`,
      );
    } else {
      seenNames.set(normalizedName, lineNumber);
    }

    if (seenUrls.has(normalizedUrl)) {
      errors.push(
        `README.md:${lineNumber}: duplicate URL "${url}" (first used on line ${seenUrls.get(normalizedUrl)}).`,
      );
    } else {
      seenUrls.set(normalizedUrl, lineNumber);
    }

    if (description.length < 20 || description.length > 240) {
      errors.push(`README.md:${lineNumber}: description must be 20–240 characters.`);
    }
    if (!description.endsWith('.')) {
      errors.push(`README.md:${lineNumber}: description must end with a period.`);
    }

    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch {
      errors.push(`README.md:${lineNumber}: invalid URL "${url}".`);
      return;
    }
    const trackingKeys = [...parsedUrl.searchParams.keys()].filter(
      (key) =>
        key.toLowerCase().startsWith('utm_') ||
        ['ref', 'referral', 'affiliate', 'aff'].includes(key.toLowerCase()),
    );
    if (trackingKeys.length > 0) {
      errors.push(`README.md:${lineNumber}: remove tracking parameters from "${url}".`);
    }
    if (['bit.ly', 'tinyurl.com', 't.co'].includes(parsedUrl.hostname.toLowerCase())) {
      errors.push(`README.md:${lineNumber}: use the primary URL instead of a short link.`);
    }

    const items = entriesByHeading.get(heading) ?? [];
    items.push({ name, lineNumber });
    entriesByHeading.set(heading, items);
  });

  for (const [section, items] of entriesByHeading) {
    const actual = items.map(({ name }) => name);
    const sorted = [...actual].sort((a, b) =>
      a.localeCompare(b, 'en', { sensitivity: 'base', numeric: true }),
    );
    actual.forEach((name, index) => {
      if (name !== sorted[index]) {
        errors.push(
          `README.md:${items[index].lineNumber}: entries in "${section}" must be alphabetical; expected "${sorted[index]}" here.`,
        );
      }
    });
  }

  const localLinkPattern = /\[[^\]]+\]\((?!https?:|mailto:|#)([^)]+)\)/g;
  for (const match of readme.matchAll(localLinkPattern)) {
    const target = decodeURIComponent(match[1].split('#')[0]);
    if (target && !existsSync(resolve(root, target))) {
      errors.push(`README.md: local link target does not exist: ${target}`);
    }
  }
}

for (const file of requiredFiles.filter((name) => existsSync(resolve(root, name)))) {
  const content = readFileSync(resolve(root, file), 'utf8');
  if (!content.endsWith('\n')) errors.push(`${file}: file must end with a newline.`);
  content.split('\n').forEach((line, index) => {
    if (/[ \t]+$/.test(line)) errors.push(`${file}:${index + 1}: trailing whitespace.`);
  });
}

if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} issue${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Awesome list validation passed.');
