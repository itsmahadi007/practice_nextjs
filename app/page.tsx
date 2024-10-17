import Link from "next/link";
import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";

export default function Home() {
    return (
        <main>
            <div className="text-3xl text-sky-800">Hello World!</div>
            <Link href="/users"> Users</Link>
            <ProductCard/>
        </main>

    );
}
