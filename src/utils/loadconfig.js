import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function loadConfig() {
  const filePath = path.resolve('./config.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents);
}
