"use client";

import dynamic from "next/dynamic";

// Dynamically import the client component with no SSR
const SolutionClient = dynamic(() => import("./SolutionClient"), {
    ssr: false,
});

export default function SolutionSection() {
    return <SolutionClient />;
}
