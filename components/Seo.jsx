import Head from "next/head";
import { useRouter } from "next/router";

// Per-page title, description, canonical URL and share-preview tags.
// Every tag has a `key`, so a page's <Seo> replaces the defaults in _app.

export const SITE_URL = "https://www.shahpriyank.com";
export const SITE_NAME = "Priyank Shah";

export const DEFAULT_TITLE = "Priyank Shah | Product Designer & Design Engineer";
export const DEFAULT_DESCRIPTION =
  "Priyank Shah is a Toronto-based product designer and design engineer who designs and ships: commerce at Walmart, healthcare at AlayaCare, and case studies with real usability results.";
export const DEFAULT_IMAGE = "/og/home.jpg";

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  imageAlt,
  type = "website",
  noindex = false,
  children,
}) {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const url = `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
      <link key="canonical" rel="canonical" href={url} />
      {noindex && <meta key="robots" name="robots" content="noindex" />}

      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />
      <meta key="og:image:alt" property="og:image:alt" content={imageAlt || title} />

      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
      {children}
    </Head>
  );
}
