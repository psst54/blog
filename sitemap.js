function main() {
  const urls = ["https://blog.psst54.me/"];

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  let xmlSitemap =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  for (const url of urls) {
    xmlSitemap += `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `;
  }

  xmlSitemap += "</urlset>";

  console.log(xmlHeader + xmlSitemap);
}

main();
