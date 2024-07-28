'use server';

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

// increments the view count of the specified blog post when invoked
export async function increment(route: string) {
  noStore();

  try {
    await sql`UPDATE blog_data
    SET view_count = view_count + 1
    WHERE
      route = ${route}
      `;
  } catch (error) {
    throw new Error(`Failed to update blog views for blog with the route: ${route}. Error: ${error}`);
  }
}