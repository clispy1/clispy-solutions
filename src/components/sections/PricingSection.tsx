"use client";

import dynamic from "next/dynamic";
import { agencyInfo } from "@/data/agency";
import { Zap, Palette, ShoppingCart } from "lucide-react";

// Dynamically import the client component with no SSR
const PricingClient = dynamic(() => import("./PricingClient"), { ssr: false });

export default function PricingSection() {
    const pricingPlans = [
        {
            icon: Zap,
            title: agencyInfo.offers[0].name,
            subtitle: agencyInfo.offers[0].description,
            price: agencyInfo.offers[0].price,
            delivery: agencyInfo.offers[0].delivery,
            payment: "70% upfront",
            color: "from-blue-500 to-cyan-500",
            features: agencyInfo.offers[0].features,
            bonus: "Launch Checklist",
            popular: true,
            badgeTitle: "Business",
        },
        {
            icon: Palette,
            title: agencyInfo.offers[1].name,
            subtitle: agencyInfo.offers[1].description,
            price: agencyInfo.offers[1].price,
            delivery: agencyInfo.offers[1].delivery,
            payment: "50% upfront",
            color: "from-purple-500 to-pink-500",
            features: agencyInfo.offers[1].features,
            bonus: "Flyer Templates",
            popular: true,
            badgeTitle: "Branding",
        },
        {
            icon: ShoppingCart,
            title: agencyInfo.offers[2].name,
            subtitle: agencyInfo.offers[2].description,
            price: agencyInfo.offers[2].price,
            delivery: agencyInfo.offers[2].delivery,
            payment: "70% upfront or hybrid (ask for details)",
            color: "from-green-500 to-emerald-500",
            features: agencyInfo.offers[2].features,
            bonus: "Soft Marketing & Promotion",
            popular: true,
            badgeTitle: "Ecommerce",
        },
    ];

    return <PricingClient pricingPlans={pricingPlans} />;
}
