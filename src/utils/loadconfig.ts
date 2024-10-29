import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { getCollection } from "astro:content";

export interface Root {
  menu: Menu;
  featured: FeaturedDetails;
  footer: Footer;
  events: Event;
}

export interface Event {
  upcoming: Upcoming;
}

export interface Upcoming {
  title: string;
  link: string;
}

export interface Menu {
  title: string;
  main: Main[];
}

interface Footer {
  tagline: string;
  items: Main[];
}

export interface Main {
  title: string;
  link?: string;
  subMenu?: SubMenu[];
}

export interface SubMenu {
  category: string;
  inRange?: boolean;
  rangeStart?: number;
  rangeEnd?: number;
  link: string;
  items?: string[];
}

interface FeaturedDetails {
  profiles: string[];
  blogs: string[];
}

export function loadConfig(): Root {
  const filePath = path.resolve("./config.yml");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return yaml.load(fileContents) as Root;
}

export const getFeaturedProfiles = async (paths: string[]) => {
  const allProfiles = await getCollection("profiles");

  // Filter profiles based on featured.profiles in the config.yml file
  return allProfiles.filter((profile) => paths.includes(profile.slug));
};
