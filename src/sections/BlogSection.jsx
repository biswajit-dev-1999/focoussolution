import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "Empowering Communities Through Education",
    excerpt: "Discover how Focus International Foundation is transforming lives through our comprehensive education programs, providing access to quality learning for underprivileged children across Odisha and West Bengal.",
    content: `
      <p>Education is the cornerstone of social transformation. At Focus International Foundation, we believe that every child deserves access to quality education, regardless of their socio-economic background. Our comprehensive education programs have been making a significant impact in marginalized communities across Odisha and West Bengal.</p>
      
      <h2>Our Educational Initiatives</h2>
      <p>We have established multiple learning centers in rural and urban areas, providing free education to children who would otherwise be unable to attend school. Our programs include:</p>
      <ul>
        <li>Primary and secondary education support (VidyaVhan special Tuition classes)</li>
        <li>Sponsorship for dropout students</li>
        <li>Adult literacy programs</li>
        <li>Vocational skill development to eradicate employment crises</li>
      </ul>
      
      <h2>Impact Stories</h2>
      <p>Over the past year, we have successfully enrolled hundreds of children in our education programs. Many of our students have gone on to pursue higher education and secure meaningful employment, breaking the cycle of poverty in their families.</p>
      
      <h2>Looking Forward</h2>
      <p>We are committed to expanding our reach and ensuring that no child is left behind. With your support, we can continue to build a brighter future for the next generation.</p>
    `,
    author: "Focus Foundation Team",
    date: "2024-02-15",
    image: "/education.jpg",
    category: "Education",
    images: ["/education.jpg", "/1.png"],
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "Healthcare for All: Our Medical Mission",
    excerpt: "Learn about our medical health camps and special care programs that bring essential healthcare services to remote villages, ensuring that distance and poverty don't prevent anyone from receiving care.",
    content: `
      <p>Healthcare is a fundamental right, yet millions lack access to basic medical facilities. Focus International Foundation revolves around bridging this gap through our innovative and on-the-ground healthcare initiatives.</p>
      
      <h2>Our Health Interventions</h2>
      <p>Our organization travels to remote villages, bringing doctors, medicines, and diagnostic equipment directly to communities that need them most. These initiatives provide:</p>
      <ul>
        <li>Medical health camps and de-worming</li>
        <li>Immunization and maternal care</li>
        <li>Special care and hospitalization for critical cases</li>
        <li>Yoga classes and Leprosy care</li>
      </ul>
      
      <h2>Focus on Nutrition</h2>
      <p>Beyond treatment, we focus on preventive care through awareness programs about hygiene and nutrition. Our daycare centers and home sponsorships provide special food and nutritional support for mothers and children.</p>
      
      <p>The impact has been remarkable. Many who had never seen a doctor are now receiving regular medical care, leading to a significant reduction in preventable diseases in our target areas.</p>
    `,
    author: "Mr. Pradeep Kumar Mukherjee",
    date: "2024-01-28",
    image: "/9.png",
    category: "Healthcare",
    images: ["/9.png", "/8.png"],
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Rescue & Rehabilitation: Building Stronger Communities",
    excerpt: "Explore our rescue and rehabilitation programs that provide shelter settlement, sponsorships for orphans, and critical support for vulnerable populations.",
    content: `
      <p>When vulnerable individuals are empowered, entire communities thrive. Focus International Foundation's rescue and rehabilitation programs are designed to create safe havens and opportunities for the most marginalized.</p>
      
      <h2>Shelter and Support</h2>
      <p>We offer comprehensive support to those facing crises, including:</p>
      <ul>
        <li>Sponsorships for poor, needy, and orphaned children</li>
        <li>Restoration and shelter settlement for victim families</li>
        <li>Protection of civil, economic, and political rights</li>
      </ul>
      
      <h2>Awareness and Prevention</h2>
      <p>Through our awareness campaigns, we coordinate with government and public authorities on critical issues related to women trafficking, child abuse, domestic violence, and child labor.</p>
      
      <h2>Success Stories</h2>
      <p>We believe that empowering individuals through proper rehabilitation is the key to building stronger, more resilient communities. Every person we support creates a ripple effect that benefits their family and the larger society.</p>
    `,
    author: "Focus Foundation Team",
    date: "2024-01-10",
    image: "/10.png",
    category: "Rehabilitation",
    images: ["/10.png", "/2.png"],
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Community Development: Our Green Initiative",
    excerpt: "Read about our plantation drives, community mobilization, and awareness campaigns that are helping create a sustainable and empowered future.",
    content: `
      <p>Environmental conservation and community development are deeply intertwined. Focus International Foundation has launched several initiatives to promote both social empowerment and environmental sustainability.</p>
      
      <h2>Plantation and Cleanliness Drives</h2>
      <p>We organize regular tree plantation and road cleaning drives across various locations, involving local communities and volunteers to improve air quality and local hygiene.</p>
      
      <h2>Economic Empowerment</h2>
      <p>Our community development isn't just about the environment. We facilitate:</p>
      <ul>
        <li>Revolving loans for income generation and small businesses</li>
        <li>Water facility development</li>
        <li>Government liaising for various community needs</li>
      </ul>
      
      <h2>Cultural Preservation</h2>
      <p>We also promote and protect Indian traditional music, dance, handicrafts, and modern art to ensure holistic community growth and preservation of our rich heritage.</p>
      
      <p>Together, we can create a sustainable, empowered community for future generations. Every small action counts.</p>
    `,
    author: "Mr. Pradeep Kumar Mukherjee",
    date: "2023-12-18",
    image: "/101.jpg",
    category: "Environment",
    images: ["/101.jpg", "/3.png"],
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Relief Operations: Standing Together in Crises",
    excerpt: "Discover how we mobilize natural relief measures during calamities to assist affected families with food, clothing, and essential educational supplements.",
    content: `
      <p>Natural calamities can deeply shatter lives. Focus International Foundation stands ready to assist those most affected by ensuring they receive timely help.</p>
      
      <h2>Disaster Relief</h2>
      <p>Our teams spring into action during times of famine, fire, flood, and earthquakes. We organize comprehensive relief measures that include:</p>
      <ul>
        <li>Immediate food and blanket distribution</li>
        <li>Clothing and educational supplement distribution</li>
        <li>Flood relief and rescued assistance</li>
      </ul>
      
      <h2>Building Resilience</h2>
      <p>Beyond immediate relief, we work with communities to help them rebuild their lives and homes. Your support makes it possible for us to stand as a pillar of hope during their darkest times.</p>
    `,
    author: "Focus Foundation Team",
    date: "2023-11-05",
    image: "/2.png",
    category: "Relief Work",
    images: ["/2.png", "/1.png"],
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Cultural Events: Celebrating Our Heritage",
    excerpt: "See how we bring joy and unity to communities through cultural events, sports competitions, and national day observations.",
    content: `
      <p>While education and healthcare rebuild lives, cultural unity and joy provide the emotional foundation that every human needs. Focus International Foundation actively organizes events that foster community spirit and uncover hidden talents.</p>
      
      <h2>Our Events</h2>
      <p>Throughout the year, we host numerous events to cultivate universal brotherhood and communal harmony. These include:</p>
      <ul>
        <li>Games and sports competitions</li>
        <li>Hidden talent and quiz competitions</li>
        <li>Festival and national day observations</li>
      </ul>
      
      <h2>Celebrating Milestones</h2>
      <p>We ensure that those in orphanages and daycare centers never feel left out by hosting special birthday celebrations and organizing events to keep the spirit of togetherness alive.</p>
    `,
    author: "Focus Foundation Team",
    date: "2023-10-15",
    image: "/3.png",
    category: "Culture",
    images: ["/3.png", "/10.png"],
    readTime: "3 min read"
  }
];

const BlogSection = () => {
  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8)" }}>
      {/* Decorative assets */}
      <img
        src="/hirondelle-4.png"
        className="absolute top-10 right-10 w-40 opacity-20"
        alt=""
        style={{ filter: "hue-rotate(120deg)" }} 
      />
      <img
        src="/brush-patch.webp"
        className="absolute bottom-0 left-0 w-60 opacity-30"
        alt=""
        style={{ filter: "hue-rotate(60deg)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Gloria Hallelujah', cursive", color: "#2D5A3D" }}
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "#4B5E53" }}
          >
            Stories of impact, inspiration, and transformation from Focus International Foundation
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              style={{ borderColor: "#EDE4CE" }}
              onClick={() => handleBlogClick(blog.id)}
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md"
                        style={{ background: "#C9A84C" }}>
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 transition-colors group-hover:text-[#C9A84C]"
                    style={{ color: "#2D5A3D" }}>
                  {blog.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-3" style={{ color: "#4B5E53" }}>
                  {blog.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs mb-4" style={{ color: "#7A8F81" }}>
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span className="font-medium">{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center font-semibold text-sm group-hover:gap-2 transition-all"
                     style={{ color: "#C9A84C" }}>
                  <span className="hover:text-[#2D5A3D] transition-colors">Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
