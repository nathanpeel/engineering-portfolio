import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

// retrieved the views from the postgres db
export async function getViews(route: string): Promise<number> {
  noStore();

  try {
    // this section ensures the blog post is entered as a row in the db
    const result = await sql`SELECT EXISTS 
    (SELECT 1 FROM blog_data
    WHERE
      route = ${route})
    `;
    if (!result.rows[0].exists) {
      await sql`INSERT INTO blog_data (route, view_count)
      VALUES (${route}, 1)
      `;
    }

    const view_count = await sql`SELECT view_count
      FROM blog_data 
      WHERE
        route = ${route}
      `;
    return view_count.rows[0].view_count;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

type props = {
  route: string;
  className?: string;
};

// displays the view count
export default async function ViewCounter({ route, className }: props) {
  const views = await getViews(route);

  return <p className={className}>{views} views</p>;
}
