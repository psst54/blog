import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

import { createClient } from "@supabase/supabase-js";

const FILE_PATH = "public/sitemap/sitemap.xml";
const BASE_URL = "https://blog.psst54.me/";

async function main() {
  const urls = [BASE_URL];

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  const { data: supabaseData, error: supabaseError } = await supabase
    .from("posts")
    .select("id, title, parent_id, type, sub_blog")
    .order("created_at");

  if (supabaseError) throw Error();

  supabaseData.forEach((datum) =>
    urls.push({ id: datum.id, sub_blog: datum.sub_blog })
  );

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  let xmlSitemap =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  for (const url of urls) {
    xmlSitemap += `
    <url>
      <loc>${BASE_URL}/${url.sub_blog}/${url.id}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `;
  }

  xmlSitemap += "</urlset>";

  const content = xmlHeader + xmlSitemap;

  fs.writeFile(FILE_PATH, content, (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    } else {
      console.log(`Content has been written to ${FILE_PATH}`);
    }
  });
}

main();
