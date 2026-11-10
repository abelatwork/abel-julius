// @copyright 2026 Abel-Julius
// @license Apache-2.0

// Every project screenshot is a 560 x 560 export; declaring the ratio keeps the
// grid from shifting while the images load.
export const projectImageSize = { width: 560, height: 560 };

export const projects = [
  {
    id: "musify",
    image: "/images/project-1.jpg",
    title: "Musify",
    description: "Music streaming app with albums, playlists and playback.",
    tags: ["API", "MVC", "Development"],
    href: "https://musify-5al0.onrender.com/",
  },
  {
    id: "pixstock",
    image: "/images/project-2.jpg",
    title: "Pixstock",
    description: "Stock photo search with curated collections and free downloads.",
    tags: ["API", "SPA"],
    href: "https://pixstock-official.vercel.app/",
  },
  {
    id: "recipe",
    image: "/images/project-3.jpg",
    title: "Recipe app",
    description: "Recipe search with category browsing and dish detail pages.",
    tags: ["Development", "API"],
    href: "",
  },
  {
    id: "real-estate",
    image: "/images/project-4.jpg",
    title: "Real estate website",
    description: "Property listings with saved searches and agent contact.",
    tags: ["Web-design", "Development"],
    href: "",
  },
  {
    id: "ecommerce",
    image: "/images/project-5.jpg",
    title: "eCommerce website",
    description: "Storefront with product filters, cart and checkout flow.",
    tags: ["eCommerce", "Development"],
    href: "",
  },
  {
    id: "vcard",
    image: "/images/project-6.jpg",
    title: "vCard portfolio",
    description: "Single-page portfolio with projects, skills and contact details.",
    tags: ["Web-design", "Development"],
    href: "",
  },
];
