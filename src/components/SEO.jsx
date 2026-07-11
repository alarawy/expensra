import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Expensra",
  description = "Smart expense tracking and financial management platform.",
  noIndex = false,
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      {noIndex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Helmet>
  );
};

export default SEO;