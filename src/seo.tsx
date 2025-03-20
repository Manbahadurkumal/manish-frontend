import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image = "/manish.png", url = "/" }) => {
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
      <meta name="robots" content="index, follow"/>
      <meta name="google-site-verification" content="PfGwE5ibySezT2WGVJ92rOZTMLiyCsAjjWa7NKgH5Cw" />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/png" href="/manish.png" />
      <script type="application/ld+json">
          {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Man Bahadur Kumal",
  "url": "https://manbahadurkumal.com.np",
  "author": {
    "@type": "Person",
    "name": "Man Bahadur Kumal",
    "url": "https://manbahadurkumal.com.np",
    "sameAs": [
      "https://www.linkedin.com/in/manbahadurkumal",
      "https://github.com/manbahadurkumal",
      "https://twitter.com/manbahadurkumal"
    ]
  },
  "description": {description},
  "publisher": {
    "@type": "Person",
    "name": "Man Bahadur Kumal"
  }
})}
        </script>
    </Helmet>
  );
};

export default SEO;
