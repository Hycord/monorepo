import { ProjectSchema } from "$/schemas/ProjectSchema";

export const ProjectFrontendApplication: ProjectSchema = {
    title: "Premier Studios: Frontend Freelancer Application",
    slug: "premier-studios-frontend",
    clientSlug: "hycord",
    description: "Frontend shop application for Premier Studios",
    endURL: "https://premierstudios-application-frontend.vercel.app/",
    images: ["cart.png", "modal.png"],
    date: new Date("2024-07-08"),
  public: true,

    content: [
      {
        type: "subtitle",
        content: "a single-page e-commerce product page that displays a list of products, allows users to view details of each product, and add products to a shopping cart."
      },
      {
        type: "title",
        content: "Tech Stack"
      },
      {
        type: "list",
        content: [
          "Language - Typescript",
          "Version Control - Git via https://github.com/hycord/premierstudios-application-frontend",
        ]
      },
      {
        type: "title",
        content: "Core Functionality"
      },
      {
        type: "list",
        content: [
          "Product Listing:",
          "Display a list of all products with their image, name, price, and a brief description.",
          "Each product should have a 'View Details' button.",
          "Product Details Modal:",
          "Clicking 'View Details' should open a modal with detailed information about the product (image, full description, price).",
          "The modal should have an 'Add to Cart' button.",
          "Shopping Cart:",
          "Display a simple shopping cart on the right side of the page.",
          "The cart should show a list of added products with their name, price, and quantity.",
          "Display the total price of the items in the cart.",
          "Allow users to modify quantity and remove items from the cart."
        ]
      },
      {
        type: "title",
        content: "Setup Instructions"
      },
      {
        type: "subtitle",
        content: "Local Development"
      },
      {
        type: "list",
        content: [
          "Have the latest LTS Node.js version available",
          "run `npm install`",
          "run `npm run dev`"
        ]
      }
    ],
    publicGithub: true,
    github: "https://github.com/hycord/premierstudios-application-frontend",
    tags: ["Web", "React", "Next.js", "Local"],
    languages: ["Typescript"]
  };