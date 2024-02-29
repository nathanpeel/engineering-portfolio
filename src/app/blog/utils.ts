import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { DateTimeFormatOptions } from 'intl';

export function getMarkdownFileNames() {
  const absoluteFolderPath = path.join(process.cwd(), "./content");
  return fs.readdirSync(absoluteFolderPath);
}

function extractText(fileName: string) {
  const absoluteFilePath = path.join(process.cwd(), "./content/" + fileName);
  return fs.readFileSync(absoluteFilePath, 'utf-8');
}

function getMarkdownData(markdown: string) {
  return matter(markdown);
}

export function getBlogPost(fileName: string) {
  return getMarkdownData(extractText(fileName));
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}