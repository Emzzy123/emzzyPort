const defaultSiteUrl = "https://chidokaemeka.com";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (configuredSiteUrl || defaultSiteUrl).replace(/\/+$/, "");

export const siteMetadata = {
  name: "Emeka Chidoka",
  title: "Emeka Chidoka | Data Engineer",
  description:
    "Portfolio website for Emeka Chidoka, a data engineer building reliable pipelines, analytics systems, and data products.",
  logo: "/logo.jpeg",
};
