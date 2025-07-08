"use client";

import dynamic from "next/dynamic";

// Dynamically import the client component with no SSR
const CTAClient = dynamic(() => import("./CTAClient"), { ssr: false });

const CTA = () => {
    return <CTAClient />;
};

export default CTA;
