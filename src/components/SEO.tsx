import { useEffect } from "react";

const SEO = () => {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://muscletreegym.com/#localbusiness",
      "name": "Muscle Tree Gym",
      "alternateName": "Muscle Tree Gym Kolhapur",
      "description": "Best gym in Kolhapur offering personal training, weight loss, muscle gain, and functional fitness programs. Professional certified trainers with 9+ years experience.",
      "url": "https://muscletreegym.com",
      "telephone": "+919922721114",
      "priceRange": "₹₹",
      "image": "https://muscletreegym.com/og-image.jpg",
      "logo": "https://muscletreegym.com/logo.png",
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
        "latitude": "16.704963",
        "longitude": "74.240514"
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "200",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Aditya Shinde"
          },
          "reviewBody": "Best gym in Kolhapur! The trainers are incredibly knowledgeable and supportive. Lost 15kg in 4 months with their personalized plan."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Pooja Kamble"
          },
          "reviewBody": "Amazing atmosphere and friendly staff. The trainers genuinely care about your progress. I've gained so much confidence and strength here."
        }
      ],
      "areaServed": {
        "@type": "City",
        "name": "Kolhapur"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Gym Membership Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Silver Membership",
              "description": "Access to gym equipment, cardio zone, locker facility, and basic workout guidance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gold Membership",
              "description": "All Silver benefits plus personal trainer sessions, diet consultation, and group fitness classes"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Premium Membership",
              "description": "Unlimited personal training, advanced diet plans, exclusive workshops, and priority booking"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.instagram.com/muscletreegym",
        "https://www.facebook.com/muscletreegym"
      ]
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://muscletreegym.com/#organization",
      "name": "Muscle Tree Gym",
      "alternateName": "Muscle Tree Gym Kolhapur",
      "url": "https://muscletreegym.com",
      "logo": "https://muscletreegym.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919922721114",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
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
        "https://www.instagram.com/muscletreegym",
        "https://www.facebook.com/muscletreegym"
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://muscletreegym.com/#website",
      "url": "https://muscletreegym.com",
      "name": "Muscle Tree Gym",
      "description": "Best gym in Kolhapur - Muscle Tree Gym offers personal training, weight loss, muscle gain programs",
      "publisher": {
        "@id": "https://muscletreegym.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://muscletreegym.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
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

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Fitness Center",
      "provider": {
        "@id": "https://muscletreegym.com/#organization"
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
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal Training",
              "description": "One-on-one fitness training with certified personal trainers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Weight Loss Programs",
              "description": "Personalized weight loss and fat loss programs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Muscle Gain Programs",
              "description": "Scientifically-designed workout and nutrition protocols for muscle building"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Functional Training",
              "description": "Functional and CrossFit training programs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diet Consultation",
              "description": "Customized meal plans and nutrition guidance"
            }
          }
        ]
      }
    };

    // Inject all schemas
    const schemas = [
      localBusinessSchema,
      organizationSchema,
      websiteSchema,
      breadcrumbSchema,
      serviceSchema
    ];

    schemas.forEach((schema, index) => {
      const existingScript = document.getElementById(`schema-${index}`);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.id = `schema-${index}`;
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup on unmount
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
};

export default SEO;

