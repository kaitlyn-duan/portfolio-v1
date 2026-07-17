// GitHub Pages serves this repo at https://kaitlyn-duan.github.io/portfolio-v1/,
// so static assets/links need that base path — but only for the Pages build,
// not local dev or a future custom-domain deploy. Must be NEXT_PUBLIC_-prefixed
// so the value is inlined consistently in both server and client bundles.
export const repoName = "portfolio-v1";
export const basePath = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? `/${repoName}` : "";
