import { useEffect } from "react";

/**
 * SEO Component - Adds structured data (JSON-LD) for LocalBusiness, Organization, and other schemas
 * This component injects schema markup for better search engine understanding and rich results
 */
const SEO = () => {
  useEffect(() => {
    // LocalBusiness Schema for Google My Business integration
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Gym",
      "name": "Muscle Tree Gym",
      "image": "https://muscletreegym.com/og-image.jpg",
      "@id": "https://muscletreegym.com",
      "url": "https://muscletreegym.com",
      "telephone": "+919922721114",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nagalapark / Tarabai Park",
        "addressLocality": "Kolhapur",
        "addressRegion": "Maharashtra",
        "postalCode": "416003",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.7050,
        "longitude": 74.2433
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "06:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "07:00",
          "closes": "12:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/mavenSujay"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "100"
      }
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Muscle Tree Gym",
      "url": "https://muscletreegym.com",
      "logo": "https://muscletreegym.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919922721114",
        "contactType": "Customer Service",
        "email": "info@muscletreegym.com",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "mr"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nagalapark / Tarabai Park",
        "addressLocality": "Kolhapur",
        "addressRegion": "Maharashtra",
        "postalCode": "416003",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/mavenSujay"
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://muscletreegym.com/"
        }
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Muscle Tree Gym",
      "url": "https://muscletreegym.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://muscletreegym.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };

    // Service Schema for Fitness Services
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Fitness Training",
      "provider": {
        "@type": "Gym",
        "name": "Muscle Tree Gym"
      },
      "areaServed": {
        "@type": "City",
        "name": "Kolhapur"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fitness Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Strength Training",
            "itemListElement": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Strength Training Program"
              }
            }
          },
          {
            "@type": "OfferCatalog",
            "name": "Cardio Training",
            "itemListElement": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cardio Training Program"
              }
            }
          },
          {
            "@type": "OfferCatalog",
            "name": "Personal Training",
            "itemListElement": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Personal Fitness Training"
              }
            }
          },
          {
            "@type": "OfferCatalog",
            "name": "Weight Loss",
            "itemListElement": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Weight Loss Program"
              }
            }
          },
          {
            "@type": "OfferCatalog",
            "name": "Muscle Gain",
            "itemListElement": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Muscle Gain Program"
              }
            }
          },
          {
            "@type": "OfferCatalog",
            "name": "Diet Consultation",
            "itemListElement": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Nutrition & Diet Consultation"
              }
            }
          }
        ]
      }
    };

    // Create script tags and append to head
    const schemas = [
      { id: "localBusiness", data: localBusinessSchema },
      { id: "organization", data: organizationSchema },
      { id: "breadcrumb", data: breadcrumbSchema },
      { id: "website", data: websiteSchema },
      { id: "service", data: serviceSchema }
    ];

    schemas.forEach(({ id, data }) => {
      // Remove existing script if present
      const existingScript = document.getElementById(`schema-${id}`);
      if (existingScript) {
        existingScript.remove();
      }

      // Create new script tag
      const script = document.createElement("script");
      script.id = `schema-${id}`;
      script.type = "application/ld+json";
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      schemas.forEach(({ id }) => {
        const script = document.getElementById(`schema-${id}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SEO;


