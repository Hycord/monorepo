import { url } from "inspector";
import { ProjectSchema } from "..";

export const ProjectKCFDWebsite: ProjectSchema = {
  title: "KCFD Website",
  slug: "kcfd_website",
  clientSlug: "kcfd",

  public: true,
  date: new Date("2023-05-20"),

  images: ["0.jpeg", "1.jpeg", "2.jpeg"],

  tags: ["Local"],

  description: "Custom website for my local fire department.",
  endURL: "https://kirklandfire.com",

  content: [
    { type: "url", content: "Live Site", href: "https://kirklandfire.com" },
    { type: "title", content: "Project Overview" },
    {
      content:
        "I developed a custom website for my local fire department, Kirkland Community Fire District (KCFD), using Google Sites to honor the firefighters/EMTs' service and foster community engagement. Google Sites was the platform of choice for its promised robustness and easy maintenance, ensuring the website's sustainability.",
    },
    { type: "subtitle", content: "Website Features" },
    {
      content:
        "Key to the website is a tribute to local fallen firefighters/EMTs, differentiated by a unique background color. Together with active duty members, we honor their service by showcasing their profiles and years of service.",
    },
    {
      content:
        "The website offers a dynamic image gallery, documenting the fire department in action. It captures moments and sparks local pride, serving as a visual link between the department and the community.",
    },
    {
      content:
        "The addition of an external Google Form for job applications simplifies recruitment. The process is streamlined, accessible, and encourages more people to consider roles within the department.",
    },
    {
      content:
        "One of the standout features of the website is the integration of a live Google Calendar. It allows for real-time updates and displays the department's schedule, fostering transparency and keeping the community informed about upcoming events and activities.",
    },
    { type: "subtitle", content: "Ensuring Robustness" },
    {
      content:
        "Relying on Google Sites for development ensures the website's robustness. The platform is user-friendly, uncomplicated, and adaptable even for non-technical personnel. The choice of this platform guarantees the website's sustainability and future maintainability.",
    },
    { type: "subtitle", content: "Challenges and Learning" },
    {
      content:
        "Balancing respect for fallen firefighters/EMTs while maintaining the website's engaging outlook was a challenge. The solution involved using a distinct background color for their profiles to provide special recognition.",
    },
    {
      content:
        "Integrating the external Google Form for job applications was a technical aspect that required seamless incorporation. Leveraging Google Form's capabilities, we designed a simple, streamlined job application process.",
    },
    { type: "subtitle", content: "Future Endeavors" },
    {
      content:
        "Although an image gallery is already in place, there are plans to expand it once more photographs become available. A more diverse collection of images will help to better relay the fire department's community involvement and spirit.",
    },
    {
      content:
        "Further improvements will include the addition of a news update section. The department can share timely news and events directly through the website, boosting two-way communication with the community.",
    },
    {
      content:
        "Overall, the KCFD website project was a fulfilling opportunity to contribute to my community digitally and an enriching experience in terms of developing user-engaging, service-oriented websites.",
    },
  ],
};
