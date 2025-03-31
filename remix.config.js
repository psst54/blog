/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  serverBuildTarget: "cloudflare-pages",
  serverBuildPath: "functions/[[path]].js",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_dev: true,
    v2_routeConvention: true,
    v2_meta: true,
    v2_headers: true,
  },
};
