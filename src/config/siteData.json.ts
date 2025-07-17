export interface SiteDataProps {
  name: string;
  title: string;
  description: string;
  useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Dhamma Suttama",
  // Your website's title and description (meta fields)
  title: "Vipassana Meditation: Dhamma Suttama",
  description:
    "Dhamma Suttama is a Vipassana meditation centre in Quebec, Canada, dedicated to the practice of Vipassana Meditation as taught by S. N. Goenka in the tradition of Sayagyi U Ba Khin. Learn the ancient meditation technique of seeing things as they really are.",
  useViewTransitions: true,
  // Your information!
  author: {
    name: "Vipassana Foundation",
    email: "info@suttama.dhamma.org",
    twitter: "DhammaSuttama",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/dhamma-suttama-logo.jpg",
    alt: "Dhamma Suttama logo",
  },
};

export default siteData;
