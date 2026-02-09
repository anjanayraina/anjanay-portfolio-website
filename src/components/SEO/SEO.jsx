import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = 'Anjanay Raina | Backend Architect & Full Stack Developer';
    const defaultDescription = 'Anjanay Raina is a Backend Architect and Full Stack Developer specializing in high-performance backends, scalable distributed systems, and security engineering.';
    const defaultKeywords = 'Anjanay Raina, Backend Architect, Full Stack Developer, System Design, Security Engineer, Python, Go, FastAPI, Distributed Systems, NatWest Group';
    const defaultImage = '/client_avatar_male_new_1767877648113.png';
    const siteUrl = 'https://anjanay.in';

    const metaTitle = title ? `${title} | Anjanay Raina` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}${defaultImage}`;
    const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content="Anjanay Raina" />
            <link rel="canonical" href={metaUrl} />
            <link rel="icon" type="image/png" href="/logo.png" />
            <link rel="apple-touch-icon" href="/logo.png" />
            <link rel="shortcut icon" href="/logo.png" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={metaTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Anjanay Raina",
                    "url": siteUrl,
                    "image": metaImage,
                    "sameAs": [
                        "https://linkedin.com/in/anjanay-raina-289716192/",
                        "https://github.com/anjanayraina",
                        "https://x.com/Anjanay_Raina"
                    ],
                    "jobTitle": "Full Stack Developer",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "NatWest Group"
                    },
                    "description": defaultDescription
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
