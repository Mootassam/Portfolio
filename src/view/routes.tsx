const publicRoutes = [
  {
    path: "/",
    loader: () => import("src/view/home/HomePage"),
  },
  {
    path: "/about",
    loader: () => import("src/view/about/aboutPage"),
  },
  {
    path: "/resume",
    loader: () => import("src/view/resume/resumePage"),
  },
  {
    path: "/services",
    loader: () => import("src/view/services/servicesPage"),
  },
  {
    path: "/portfolio",
    loader: () => import("src/view/portfolio/portfolioPage"),
  },
  {
    path: "/contact",
    loader: () => import("src/view/contact/ContactFormPage"),
  },
].filter(Boolean);

const simpleRoutes = [
  { path: "/403", loader: () => import("src/view/shared/errors/Error404") },
  { path: "/500", loader: () => import("src/view/shared/errors/Error404") },
  { path: "**", loader: () => import("src/view/shared/errors/Error404") },
];
export default { publicRoutes, simpleRoutes };
