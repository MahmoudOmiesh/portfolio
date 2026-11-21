export type Article = typeof import("./work/firstimpact.mdx");

export const articles = import.meta.glob<Article>("./*/*.mdx", { eager: true });
