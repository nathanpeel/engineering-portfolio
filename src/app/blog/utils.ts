import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { DateTimeFormatOptions } from 'intl';

//gets a list of the file names in the content directory
export function getMarkdownFileNames():string[] {
  const absoluteFolderPath = path.join(process.cwd(), "./content");
  return fs.readdirSync(absoluteFolderPath);
}

//returns the text from a specific file within the content directory
function extractText(fileName: string):string | false {
  const absoluteFilePath = path.join(process.cwd(), "./content/" + fileName);
  try {
    return fs.readFileSync(absoluteFilePath, 'utf-8');
  } catch (error) {
    return false;
  }
}

//turns the markdown strings into a readable object including metadata.
export type blogPostType = {
  content: string,
  data: {
    title: string,
    route: string, //filename without extension (.svg)
    date: string, //YYYY-MM-DD format
    author: string,
    summary: string,
    tags: string[],
  }
}


function getMarkdownData(markdown: string): blogPostType {
  //deconstruct to escape library types
  const { content, data } = matter(markdown)
  const { title, route, date, author, summary, tags } = data;

  return {
    content, data: {
      title,
      route,
      date,
      author,
      summary,
      tags,
  } };
}

/** function that combines the extractText and getMarkdownData functions into one for use in components **/
export function getBlogPost(fileName: string): blogPostType {
  const text = extractText(fileName);
  if (typeof text === 'string') {
    
    return getMarkdownData(text);
  } else {
    throw new Error(`Could not find blog post with fileName: ${fileName}`);
  }
}

//Formats a data string in teh format of YYYY-MM-DD to Month DD, YYYY format.
export function formatDate(dateString: string):string {
  const date = new Date(dateString);
  const options: DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

//return an array of all the blog posts in object format sorted from newest to oldest
export function getSortedBlogPosts(): blogPostType[] {
  const blogPostArray: blogPostType[] = []
  getMarkdownFileNames().forEach((filename) => {
    blogPostArray.push(getBlogPost(filename));
  });
  
  blogPostArray.sort((a, b) => {
    const dateA: Date = new Date(a.data.date);
    const dateB: Date = new Date(b.data.date);

    return dateB.getTime() - dateA.getTime();
  });
  return blogPostArray;
}