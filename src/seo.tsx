import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image = "/default-image.png", url = "/" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="keywords" content="Manish Kumal, Web Developer, Portfolio, Future Nurse, MERN Stack, Healthcare IT, Personal Website, Protfolio example" />
      
      <meta name="author" content="Manish Kumal" />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/png" href="/manish.png" />
    </Helmet>
  );
};

export default SEO;
