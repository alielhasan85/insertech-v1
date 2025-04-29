import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react"

// This would typically come from a database or CMS
const blogPosts = {
  "future-web-development-trends-2025": {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging technologies and methodologies that will shape the future of web development in the coming years.",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we look ahead to 2025, several key trends are poised to reshape how we build and interact with web applications.</p>
      
      <h2>1. WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) has been gaining traction for years, but by 2025, it's expected to become a standard part of web development. This binary instruction format allows code written in languages like C, C++, and Rust to run in the browser at near-native speed, opening up new possibilities for web applications that require high performance.</p>
      
      <h2>2. AI-Driven Development</h2>
      <p>Artificial intelligence is increasingly being integrated into development workflows. By 2025, we expect to see AI assistants that can generate code, optimize performance, and even design user interfaces based on simple prompts. This will significantly accelerate development cycles and allow developers to focus on higher-level problems.</p>
      
      <h2>3. Edge Computing Becomes Standard</h2>
      <p>As applications become more distributed, edge computing will play a crucial role in delivering fast, reliable experiences. By processing data closer to where it's needed, edge computing reduces latency and bandwidth usage, making it ideal for applications that require real-time processing.</p>
    `,
    category: "Web Development",
    author: {
      name: "Alex Johnson",
      avatar: "/blog/authors/alex.png",
    },
    date: "April 15, 2025",
    readTime: "6 min read",
    imageSrc: "/blog/web-dev-trends.png",
    slug: "future-web-development-trends-2025",
    keywords: ["web development", "WebAssembly", "AI development", "edge computing", "future trends"],
    datePublished: "2025-04-15T10:00:00Z",
    dateModified: "2025-04-15T10:00:00Z",
  },
  "odoo-erp-transform-business-operations": {
    title: "How Odoo ERP Can Transform Your Business Operations",
    excerpt:
      "Discover how implementing Odoo ERP can streamline your business processes, increase efficiency, and drive growth.",
    content: `
      <p>In today's competitive business landscape, operational efficiency is more important than ever. Odoo ERP offers a comprehensive solution that can transform how your business operates, from sales and inventory management to accounting and human resources.</p>
      
      <h2>1. Integrated Business Processes</h2>
      <p>One of the most significant advantages of Odoo ERP is its integrated approach to business management. Instead of using separate systems for different departments, Odoo brings everything together in a single platform. This integration eliminates data silos, reduces duplicate entries, and provides a unified view of your business operations.</p>
      
      <h2>2. Customization and Flexibility</h2>
      <p>Every business has unique requirements, and Odoo's modular architecture allows for extensive customization. You can start with the core modules you need and add more as your business grows. The open-source nature of Odoo also means that you can modify the system to match your specific workflows and processes.</p>
      
      <h2>3. Real-time Insights and Reporting</h2>
      <p>With Odoo ERP, you gain access to real-time data and analytics across all aspects of your business. Customizable dashboards and reports provide valuable insights that help you make informed decisions quickly. From inventory levels and sales performance to financial metrics and employee productivity, Odoo gives you a complete picture of your business health.</p>
      
      <h2>4. Automation of Routine Tasks</h2>
      <p>Odoo's automation capabilities can significantly reduce manual work and human error. From generating invoices and purchase orders to sending email notifications and updating inventory levels, Odoo can automate countless routine tasks, freeing up your team to focus on more strategic activities.</p>
      
      <h2>5. Improved Customer Experience</h2>
      <p>By streamlining your operations and providing better visibility into customer interactions, Odoo helps you deliver an enhanced customer experience. The CRM module tracks all customer communications, sales opportunities, and service issues, ensuring that nothing falls through the cracks.</p>
      
      <h2>Implementation Considerations</h2>
      <p>While the benefits of Odoo ERP are clear, successful implementation requires careful planning and execution. Working with experienced Odoo partners like Insertech ensures a smooth transition and maximizes the return on your investment. Our team of Odoo specialists can guide you through the entire process, from initial assessment and configuration to training and ongoing support.</p>
    `,
    category: "ERP Solutions",
    author: {
      name: "Sarah Miller",
    },
    date: "April 8, 2025",
    readTime: "5 min read",
    imageSrc: "/blog/odoo-erp.png",
    slug: "odoo-erp-transform-business-operations",
    keywords: ["Odoo ERP", "business operations", "process automation", "business efficiency", "ERP implementation"],
    datePublished: "2025-04-08T10:00:00Z",
    dateModified: "2025-04-08T10:00:00Z",
  },
  "native-vs-cross-platform-mobile-development": {
    title: "Mobile App Development: Native vs. Cross-Platform in 2025",
    excerpt:
      "A comprehensive comparison of native and cross-platform mobile app development approaches for modern businesses.",
    content: `
      <p>When embarking on a mobile app development project, one of the first and most crucial decisions is choosing between native and cross-platform development approaches. In 2025, this choice has become even more nuanced with advancements in both methodologies.</p>
      
      <h2>Native Mobile Development</h2>
      <p>Native development involves building apps specifically for each platform using the platform's preferred programming language and tools: Swift or Objective-C for iOS, and Kotlin or Java for Android.</p>
      
      <h3>Advantages of Native Development:</h3>
      <ul>
        <li><strong>Superior Performance:</strong> Native apps can fully leverage the device's hardware and features, resulting in faster and more responsive applications.</li>
        <li><strong>Platform-Specific Design:</strong> Native apps follow platform-specific design guidelines (Material Design for Android, Human Interface Guidelines for iOS), providing users with a familiar experience.</li>
        <li><strong>Early Access to New Features:</strong> When new OS features are released, native developers can implement them immediately without waiting for cross-platform frameworks to catch up.</li>
        <li><strong>Fewer Limitations:</strong> Native development rarely faces restrictions when accessing device hardware or implementing complex features.</li>
      </ul>
      
      <h2>Cross-Platform Development</h2>
      <p>Cross-platform approaches like React Native, Flutter, and Xamarin allow developers to write code once and deploy it across multiple platforms.</p>
      
      <h3>Advantages of Cross-Platform Development:</h3>
      <ul>
        <li><strong>Cost Efficiency:</strong> Maintaining a single codebase for multiple platforms can significantly reduce development and maintenance costs.</li>
        <li><strong>Faster Time-to-Market:</strong> With one team working on a single codebase, apps can be launched on multiple platforms simultaneously.</li>
        <li><strong>Consistent User Experience:</strong> Cross-platform frameworks make it easier to maintain a consistent look and feel across different devices.</li>
        <li><strong>Broader Developer Pool:</strong> Finding developers skilled in JavaScript (React Native) or Dart (Flutter) is often easier than finding specialized iOS and Android developers.</li>
      </ul>
      
      <h2>The 2025 Landscape</h2>
      <p>In 2025, the gap between native and cross-platform performance has narrowed significantly. Frameworks like Flutter and React Native have matured, offering near-native performance for most applications. However, for apps with intensive graphics, complex animations, or specialized hardware requirements, native development still holds an edge.</p>
      
      <h2>Making the Right Choice</h2>
      <p>The decision between native and cross-platform development should be based on several factors:</p>
      <ul>
        <li><strong>Project Requirements:</strong> Consider the complexity of your app, required features, and performance needs.</li>
        <li><strong>Budget and Timeline:</strong> Evaluate your financial resources and time constraints.</li>
        <li><strong>Target Audience:</strong> Understand which platforms your users prefer and their expectations.</li>
        <li><strong>Long-term Maintenance:</strong> Consider the ongoing maintenance requirements and how they align with your team's capabilities.</li>
      </ul>
      
      <p>At Insertech, we specialize in both native and cross-platform mobile development. Our experts can help you evaluate your specific needs and recommend the approach that will best serve your business goals and user expectations.</p>
    `,
    category: "Mobile Development",
    author: {
      name: "Michael Chen",
      avatar: "/blog/authors/michael.png",
    },
    date: "March 28, 2025",
    readTime: "8 min read",
    imageSrc: "/blog/mobile-app-dev.png",
    slug: "native-vs-cross-platform-mobile-development",
    keywords: ["mobile app development", "native apps", "cross-platform development", "React Native", "Flutter"],
    datePublished: "2025-03-28T10:00:00Z",
    dateModified: "2025-03-28T10:00:00Z",
  },
  "seo-importance-digital-marketing": {
    title: "The Importance of SEO in Digital Marketing Strategy",
    excerpt:
      "Learn why SEO is crucial for your business success and how to implement effective SEO strategies to improve your online visibility and drive organic traffic.",
    content: `
      <p>In today's digital landscape, having a strong online presence is no longer optional for businesses—it's essential. Search Engine Optimization (SEO) stands as one of the most powerful tools in your digital marketing arsenal, yet it remains misunderstood or underutilized by many organizations. This comprehensive guide explores why SEO matters and how you can leverage it to drive sustainable growth for your business.</p>
      
      <h2>What is SEO and Why Does It Matter?</h2>
      <p>Search Engine Optimization is the practice of optimizing your website and online content to increase visibility in organic (non-paid) search engine results. When implemented effectively, SEO helps your business:</p>
      
      <ul>
        <li><strong>Increase Visibility:</strong> Appear higher in search results when potential customers look for products or services you offer</li>
        <li><strong>Build Credibility:</strong> Establish trust with users who tend to trust search engines</li>
        <li><strong>Drive Targeted Traffic:</strong> Attract visitors who are actively searching for what you provide</li>
        <li><strong>Achieve Long-term Results:</strong> Create sustainable traffic sources that don't disappear when ad spending stops</li>
        <li><strong>Improve User Experience:</strong> Create better websites that are faster, easier to use, and mobile-friendly</li>
      </ul>
      
      <p>Unlike paid advertising, which stops generating traffic the moment you stop paying, SEO creates a foundation for long-term success. While it requires patience and consistent effort, the compounding returns make it one of the most cost-effective marketing strategies available.</p>
    `,
    category: "Digital Marketing",
    author: {
      name: "Sarah Miller",
      avatar: "/blog/authors/sarah.png",
    },
    date: "April 25, 2025",
    readTime: "10 min read",
    imageSrc: "/blog/seo-importance.png",
    slug: "seo-importance-digital-marketing",
    keywords: ["SEO", "digital marketing", "search engine optimization", "online visibility", "organic traffic"],
    datePublished: "2025-04-25T10:00:00Z",
    dateModified: "2025-04-25T10:00:00Z",
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://insertech.io/blog/${params.slug}`,
    },
    openGraph: {
      title: `${post.title} | Insertech Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author.name],
      url: `https://insertech.io/blog/${params.slug}`,
      images: [
        {
          url: `https://insertech.io${post.imageSrc}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Insertech Blog`,
      description: post.excerpt,
      images: [`https://insertech.io${post.imageSrc}`],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/blog" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                Blog
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-sm font-medium text-blue-600 md:ml-2">{post.title}</span>
            </div>
          </li>
        </ol>
      </nav>

      <Link href="/blog" className="flex items-center gap-2 text-blue-500 mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to all posts
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{post.category}</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

        <div className="flex items-center gap-3 mb-8">
          {post.author.avatar ? (
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={`${post.author.name} - Insertech blog author`}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
              <User className="h-5 w-5" />
            </div>
          )}
          <span className="font-medium">{post.author.name}</span>
        </div>
      </div>

      <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
        <Image
          src={post.imageSrc || "/placeholder.svg"}
          alt={`${post.title} - Insertech blog post featured image`}
          fill
          className="object-cover"
          priority={true} // Add priority for above-the-fold image
        />
      </div>

      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: `https://insertech.io${post.imageSrc}`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            author: {
              "@type": "Person",
              name: post.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Insertech",
              logo: {
                "@type": "ImageObject",
                url: "https://insertech.io/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://insertech.io/blog/${slug}`,
            },
            keywords: post.keywords.join(", "),
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://insertech.io",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://insertech.io/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://insertech.io/blog/${slug}`,
              },
            ],
          }),
        }}
      />
    </div>
  )
}
