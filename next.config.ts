import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false
const repoName = process.env.GITHUB_REPOSITORY || ""

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = repoName.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig: NextConfig = {
  output: 'export',

  assetPrefix: assetPrefix,
  basePath: basePath,

  images: { unoptimized: true },
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

export default nextConfig;
