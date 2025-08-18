export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    category: string;
    technologies: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    year: string;
    featured: boolean;
    results?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "CLISPY.STORE",
        description: "Preorder-based online tech store",
        longDescription:
            "An online preorder store for trending tech, gaming, and home products in Ghana. Built with WooCommerce, featuring a preorder system and conversion‑focused design.",
        category: "ecommerce",
        technologies: ["WordPress", "WooCommerce", "CSS"],
        image: "/clispy-store.png",
        liveUrl: "https://clispy.store",
        githubUrl: "",
        year: "2024",
        featured: true,
        results: "Launched a zero‑inventory model with preorder success.",
    },
    {
        id: 2,
        title: "Denayo Properties & Investments",
        description: "Property development & glazing services",
        longDescription:
            "Denayo Properties & Investments showcases premium construction, glazing, alucobond cladding, woodwork, interior decor, and property brokerage services in Ghana.",
        category: "web",
        technologies: ["WordPress"],
        image: "/denayoproperties.png",
        liveUrl: "https://denayopropertiesgh.com",
        githubUrl: "",
        year: "2024",
        featured: true,
        results: "Showcased full service portfolio, boosting trust and leads.",
    },
    {
        id: 3,
        title: "Zeni Skincare",
        description: "Natural & vegan skincare shop",
        longDescription:
            "Zeni Skincare is a Ghanaian vegan beauty brand. The site features a clean shop, product benefits, and wellness-focused storytelling.",
        category: "ecommerce",
        technologies: ["WordPress", "WooCommerce"],
        image: "/zeniskincare.png",
        liveUrl: "https://zeniskincare.com",
        githubUrl: "",
        year: "2024",
        featured: true,
        results: "Enabled customers to browse and buy online effortlessly.",
    },
    {
        id: 4,
        title: "CoCAHM Culinary College",
        description: "Culinary & hospitality training",
        longDescription:
            "CoCAHM is Ghana’s premier culinary arts and hospitality management college. The site includes course info, enrollment details, and legacy storytelling.",
        category: "web",
        technologies: ["Custom Code", "React", "TailwindCSS"],
        image: "/cocahm.png",
        liveUrl: "https://cocahm.com",
        githubUrl: "",
        year: "2023",
        featured: true,
        results: "Modernized website to drive admissions and community trust.",
    },
    {
        id: 5,
        title: "Afdhal Jouda Technical Service",
        description: "AC, plumbing & handyman services",
        longDescription:
            "Afdhal Jouda Technical Service offers AC maintenance, plumbing, electrical, painting, and handyman services in Dubai, with service listings and contact forms.",
        category: "web",
        technologies: ["WordPress"],
        image: "/afdhaljouda.png",
        liveUrl: "https://afdhaljouda.com",
        githubUrl: "",
        year: "2024",
        featured: true,
        results: "Simplified service navigation and boosted quote inquiries.",
    },
    {
        id: 6,
        title: "Primis Sports Training",
        description: "Kids sports training in UAE",
        longDescription:
            "Primis Sports Training in UAE offers structured basketball, football, swimming and roller‑skating lessons for kids. The site highlights programs and registration steps.",
        category: "web",
        technologies: ["WordPress"],
        image: "/primissportsuae.png",
        liveUrl: "https://primissportsuae.com",
        githubUrl: "",
        year: "2024",
        featured: true,
        results: "Attracted new registrations with clear program listings.",
    },
    {
        id: 7,
        title: "Amonu Chocolates",
        description: "Artisan Ghanaian chocolate brand",
        longDescription:
            "Amonu Chocolates produces premium handcrafted Ghanaian chocolate bars with local ingredients and cultural packaging. The site includes product pages and online ordering.",
        category: "ecommerce",
        technologies: ["WordPress", "WooCommerce"],
        image: "/amonuchocolate.png",
        liveUrl: "https://amonuchocolate.com",
        githubUrl: "",
        year: "2024",
        featured: true,
        results: "Moved sales from DMs to online checkout.",
    },
    {
        id: 8,
        title: "Prime JB Movers",
        description: "Professional moving & logistics",
        longDescription:
            "Prime JB Movers provides house and office moving services. The site features service descriptions, quote request forms, and contact options.",
        category: "web",
        technologies: ["WordPress"],
        image: "/primejbmovers.png",
        liveUrl: "https://primejbmovers.com",
        githubUrl: "",
        year: "2024",
        featured: true,
        results: "Streamlined booking flows and quote requests.",
    },
    {
        id: 9,
        title: "NAD Security Ltd",
        description: "Security services company",
        longDescription:
            "NAD Security Ltd provides professional security services in Ghana. The site outlines service packages, company info, and enquiry forms.",
        category: "web",
        technologies: ["WordPress"],
        image: "/nadsecurityltd.png",
        liveUrl: "https://nadsecurityltd.com",
        githubUrl: "",
        year: "2024",
        featured: true,
        results: "Improved online presence and lead generation.",
    },
    {
        id: 10,
        title: "Pros Technologies",
        description: "IT & network service provider",
        longDescription:
            "Pros Technologies offers IT support, software solutions, and network services in Ghana, featuring service pages, contact forms, and client showcase.",
        category: "web",
        technologies: ["WordPress", "PHP", "SCSS"],
        image: "/prostechnologies.png",
        liveUrl: "https://prostechnologies.com",
        githubUrl: "",
        year: "2023",
        featured: true,
        results: "Enhanced digital presence and inquiry flow.",
    },
    {
        id: 11,
        title: "Mama Jane International School",
        description: "Basic school in Kasoa, Ghana",
        longDescription:
            "Mama Jane International School is a basic education institution in Kasoa offering early childhood and primary education. The site highlights academic programs, enrolment, and school philosophy.",
        category: "web",
        technologies: ["WordPress"],
        image: "/mamajaneint.png",
        liveUrl: "https://mamajaneint.com",
        githubUrl: "",
        year: "2024",
        featured: true,
        results: "Showcased school ethos and simplified admission enquiries.",
    },
    {
        id: 12,
        title: "TrainLive GH",
        description: "A guided workout trainging with expert trainers",
        longDescription:
            "Mama Jane International School is a basic education institution in Kasoa offering early childhood and primary education. The site highlights academic programs, enrolment, and school philosophy.",
        category: "web",
        technologies: ["Custom Code", "React", "TailwindCSS"],
        image: "/mamajaneint.png",
        liveUrl: "https://trainlivegh.com",
        githubUrl: "",
        year: "2025",
        featured: true,
        results: "Coming Soon",
    },
];
