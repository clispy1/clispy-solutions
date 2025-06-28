import {
    Code,
    Palette,
    Globe,
    Smartphone,
    Zap,
    ShoppingCart,
    LucideProps,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type ServiceCategory = {
    icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    color?: string;
    title: string;
    features: string[];
    description: string;
};

export const services: ServiceCategory[] = [
    {
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        title: "Website Design & Development",
        description:
            "Professional websites for your business, brand, or idea — built to look good, work fast, and earn trust online.",
        features: [
            "Business Websites",
            "Portfolio & Booking Pages",
            "Fast Loading & Mobile-Friendly",
            "Custom Design",
            "Hosting & Setup Included",
        ],
    },
    {
        icon: ShoppingCart,
        color: "from-green-500 to-emerald-500",
        title: "Online Store Setup",
        description:
            "We create fully working online shops so customers can browse, buy, and pay you directly — even while you're asleep.",
        features: [
            "Online Product Store",
            "Mobile Shop Interface",
            "Payments (Momo, Card, Bank)",
            "Order Management",
            "Product Uploads & Setup",
        ],
    },
    {
        icon: Palette,
        color: "from-orange-500 to-red-500",
        title: "Branding & Logo Design",
        description:
            "Let your business actually look like a business — not just a WhatsApp number and a flyer.",
        features: [
            "Custom Logo",
            "Brand Colors & Fonts",
            "Social Media Identity",
            "Digital Branding Kit",
            "Style Consistency",
        ],
    },
    {
        icon: Globe,
        color: "from-yellow-500 to-orange-500",
        title: "UI/UX & Landing Pages",
        description:
            "We design clean, modern pages that guide people to click, book, or buy — no confusion, no extra talking.",
        features: [
            "Page Layouts & Flow",
            "Booking or Signup Pages",
            "Figma Prototypes",
            "Mobile-First Design",
            "High Conversion Focus",
        ],
    },
    {
        icon: Smartphone,
        color: "from-indigo-500 to-purple-500",
        title: "Mobile App UI Design",
        description:
            "App screens designed for real users — clear navigation, stylish look, and ready for developers to build.",
        features: [
            "App Screen Design",
            "Navigation Flow",
            "Icon & Visuals",
            "Developer-Ready Files",
            "App Store Visuals",
        ],
    },
    {
        icon: Zap,
        color: "from-purple-500 to-pink-500",
        title: "Website Maintenance & Support",
        description:
            "After the launch, we don’t disappear. We stay on to make sure everything runs smooth.",
        features: [
            "Monthly Updates",
            "Fixes & Changes",
            "Speed Boosting",
            "Hosting & Security",
            "Priority Support",
        ],
    },
];
