// The site is served from the root of kaitlynduan.com, so no base path is
// needed. Setting NEXT_PUBLIC_GITHUB_PAGES=true restores the /portfolio-v1
// prefix for a fallback deploy to kaitlyn-duan.github.io/portfolio-v1/.
export const repoName = "portfolio-v1";
export const basePath = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? `/${repoName}` : "";
