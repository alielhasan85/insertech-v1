import type { Metadata } from "next"
import BlogSection from "@/components/sections/blog-section"

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with our latest articles, news, and industry insights",
  openGraph: {
    title: "Blog | Insertech - Software Engineering & Digital Media Agency",
    description: "Read our latest articles on web development, mobile apps, digital trends, and more",
  },
}

export default function BlogPage() {
  // Update the blogPosts array to include our new SEO post at the beginning
  const blogPosts = [
    {
      id: "4",
      title: "The Importance of SEO in Digital Marketing Strategy",
      excerpt:
        "Learn why SEO is crucial for your business success and how to implement effective SEO strategies to improve your online visibility and drive organic traffic.",
      category: "Digital Marketing",
      author: {
        name: "Sarah Miller",
        avatar: "/blog/authors/sarah.png",
      },
      date: "April 25, 2025",
      readTime: "10 min read",
      imageSrc: "/blog/seo-importance.png",
      slug: "seo-importance-digital-marketing",
    },
    {
      id: "1",
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the emerging technologies and methodologies that will shape the future of web development in the coming years.",
      category: "Web Development",
      author: {
        name: "Alex Johnson",
        avatar: "/blog/authors/alex.png",
      },
      date: "April 15, 2025",
      readTime: "6 min read",
      imageSrc: "/blog/web-dev-trends.png",
      slug: "future-web-development-trends-2025",
    },
    {
      id: "2",
      title: "How Odoo ERP Can Transform Your Business Operations",
      excerpt:
        "Discover how implementing Odoo ERP can streamline your business processes, increase efficiency, and drive growth.",
      category: "ERP Solutions",
      author: {
        name: "Sarah Miller",
      },
      date: "April 8, 2025",
      readTime: "5 min read",
      imageSrc: "/blog/odoo-erp.png",
      slug: "odoo-erp-transform-business-operations",
    },
    {
      id: "3",
      title: "Mobile App Development: Native vs. Cross-Platform in 2025",
      excerpt:
        "A comprehensive comparison of native and cross-platform mobile app development approaches for modern businesses.",
      category: "Mobile Development",
      author: {
        name: "Michael Chen",
        avatar: "/blog/authors/michael.png",
      },
      date: "March 28, 2025",
      readTime: "8 min read",
      imageSrc: "/blog/mobile-app-dev.png",
      slug: "native-vs-cross-platform-mobile-development",
    },
    // Add more blog posts for the full blog page
  ]

  return (
    <div className="py-12">
      <BlogSection
        title="Our Blog"
        description="Insights, tutorials, and updates from our team of experts"
        posts={blogPosts}
        viewAllLink={false}
      />
    </div>
  )
}
