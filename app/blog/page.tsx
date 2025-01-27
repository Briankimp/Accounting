"use client";
import { SiteHeader } from "@/components/site-header";
import { BlogGrid } from "@/components/blog-grid";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <div className="container py-16">
          <h1 className="mb-12 text-4xl font-bold">Latest News</h1>
          <BlogGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
