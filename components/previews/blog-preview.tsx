import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPreview() {
  // This would typically come from a database or CMS
  const blogPosts = [
    {
      id: "1",
      title: "The Importance of SEO in Digital Marketing Strategy",
      excerpt:
        "Learn why SEO is crucial for your business success and how to implement effective SEO strategies to improve your online visibility.",
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
      id: "2",
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
      id: "3",
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
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-gray-600 max-w-2xl">
              Stay updated with our latest articles, news, and industry insights
            </p>
          </div>
          <Link href="/blog" className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1 group">
            View all articles
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <div className="rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={
                      post.imageSrc || `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(post.title)}`
                    }
                    alt={post.title || "Blog post"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-auto">
                    {post.author.avatar ? (
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                        <User className="h-3 w-3" />
                      </div>
                    )}
                    <span className="text-xs font-medium">{post.author.name}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href="/blog" className="flex items-center gap-2">
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
