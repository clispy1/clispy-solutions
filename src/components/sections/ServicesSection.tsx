"use client";

import dynamic from "next/dynamic";
import { services } from "@/data/services";

// Dynamically import the client component with no SSR
const ServicesClient = dynamic(() => import("./ServicesClient"), {
    ssr: false,
});

export default function ServicesSection() {
    return <ServicesClient services={services} />;
}
