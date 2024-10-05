import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export interface Root {
  menu: Menu
}

export interface Menu {
  title: string
  main: Main[]
}

export interface Main {
  title: string
  link?: string
  subMenu?: SubMenu[]
}

export interface SubMenu {
  category: string
  inRange?: boolean
  rangeStart?: number
  rangeEnd?: number
  link: string
  items?: string[]
}


export function loadConfig(): Root {
  const filePath = path.resolve("./config.yml");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return yaml.load(fileContents) as Root;
}
