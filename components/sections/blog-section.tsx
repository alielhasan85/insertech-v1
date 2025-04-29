import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  author: {
    name: string
    avatar?: string
  }
  date: string
  readTime: string
  imageSrc: string
  slug: string
}

interface BlogSectionProps {
  title?: string
  description?: string
  posts: BlogPost[]
  viewAllLink?: string | boolean
}

export default function BlogSection({
  title = "Latest Insights",
  description = "Stay updated with our latest articles, news, and industry insights",
  posts,
  viewAllLink = "/blog",
}: BlogSectionProps) {
  // Featured post is the first post
  const featuredPost = posts[0]
  // Other posts are the rest
  const otherPosts = posts.slice(1)

  return (
    <section className="w-full py-20 bg-white" id="blog">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 max-w-2xl">{description}</p>
          </div>
          {viewAllLink && typeof viewAllLink === "string" && (
            <Link
              href={viewAllLink}
              className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1 group"
            >
              View all articles
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Post - Takes up more space */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden shadow-lg group mb-6 lg:mb-0">
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <div className="relative h-52 sm:h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src={featuredPost.imageSrc || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-3">
                  {featuredPost.author.avatar ? (
                    <Image
                      src={featuredPost.author.avatar || "/placeholder.svg"}
                      alt={featuredPost.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                  <span className="text-sm font-medium">{featuredPost.author.name}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Other Posts - Smaller cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-8">
            {otherPosts.map((post) => (
              <div key={post.id} className="rounded-xl overflow-hidden shadow-lg group">
                <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
                  <div className="relative h-40 sm:h-48 md:h-auto md:w-1/3 overflow-hidden">
                    <Image
                      src={post.imageSrc || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 md:top-2 md:left-2">
                      <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:w-2/3">
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
                    <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2">
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
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          {viewAllLink && typeof viewAllLink === "string" && (
            <Button asChild className="bg-blue-500 hover:bg-blue-600">
              <Link href={viewAllLink}>
                View all articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
