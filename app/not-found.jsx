"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PackageSearch } from "lucide-react";

export default function NotFound() {
  return (
    <div className="m-4 sm:p-8 bg-background text-foreground my-40">
      <div className="container mx-auto max-w-4xl text-center p-6 rounded-lg shadow-md bg-primary-foreground">
        <h1 className="text-3xl font-sans sm:text-4xl font-bold mb-2">
          404
          <br />
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-6">
          Sorry, the page you’re looking for doesn’t exist. Try going home,
          browsing products, or searching below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <Link href="/" className="inline-block">
            <Button variant="default" className="gap-2">
              <Home size={18} />
              Go Home
            </Button>
          </Link>
          <Link href="/products" className="inline-block">
            <Button variant="secondary" className="gap-2">
              <PackageSearch size={18} />
              View Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
