import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for the feed
const MOCK_POSTS = [
  {
    id: 1,
    username: "hk_explorer",
    imageUrl: "https://images.unsplash.com/photo-1513622470522-26c308a208be?q=80&w=1000&auto=format&fit=crop",
    caption: "Victoria Peak looking stunning tonight! 🌃 #HK",
    likes: 124,
    isLiked: false,
  },
  {
    id: 2,
    username: "foodie_dimsum",
    imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1000&auto=format&fit=crop",
    caption: "Best dumplings in Mong Kok. Period. 🥟🤤",
    likes: 89,
    isLiked: true,
  },
  {
    id: 3,
    username: "coder_denny",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    caption: "Finally got the new HKGram feed working! 🚀💻",
    likes: 42,
    isLiked: false,
  },
  {
    id: 4,
    username: "nature_hikes",
    imageUrl: "https://images.unsplash.com/photo-1551041777-ed277b8dd348?q=80&w=1000&auto=format&fit=crop",
    caption: "Dragon's Back trail was exhausting but worth it.",
    likes: 256,
    isLiked: false,
  },
  {
    id: 5,
    username: "street_snaps",
    imageUrl: "https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?q=80&w=1000&auto=format&fit=crop",
    caption: "Neon lights and busy nights. 🚦",
    likes: 112,
    isLiked: true,
  }
];

const Feed: React.FC = () => {
  const [posts, setPosts] = useState(MOCK_POSTS);
  
  // Hardcoded for now, you will replace this with real auth state later
  const currentUser = "Denny_HKU"; 

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen w-full bg-dark-900 text-white font-sans overflow-y-auto">
      
      {/* Header Bar */}
      <header className="sticky top-0 z-50 w-full bg-dark-900/80 backdrop-blur-lg border-b border-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left Side: Logo & Name */}
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src="/hkgram_favicon_single.png"
              alt="HKGram Logo"
              className="w-8 h-8"
              draggable={false}
            />
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
              HKGram
            </span>
          </Link>

          {/* Right Side Actions (Optional placeholders) */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <button className="bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-xl transition-colors shadow-[0_0_15px_rgba(217,70,239,0.2)]">
              New Post
            </button>
          </div>
        </div>
      </header>

      {/* Main Feed Wall (Imgur Style Masonry) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="break-inside-avoid bg-dark-800 rounded-2xl overflow-hidden border border-dark-600 shadow-lg hover:border-dark-500 transition-colors"
            >
              {/* Post Header: Username */}
              <div className="p-3 px-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-linear-to-tr from-brand-500 to-accent-blue flex items-center justify-center text-sm font-bold text-white">
                  {post.username.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold text-sm text-gray-200">
                  {post.username}
                </span>
              </div>

              {/* Post Image */}
              <div className="w-full bg-dark-900">
                <img
                  src={post.imageUrl}
                  alt={`Post by ${post.username}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Post Footer: Actions & Caption */}
              <div className="p-4">
                {/* Like Button */}
                <div className="flex items-center gap-4 mb-3">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className="group flex items-center gap-2 transition-colors"
                  >
                    <Heart 
                      className={`w-6 h-6 transition-transform group-hover:scale-110 ${
                        post.isLiked 
                          ? "fill-red-500 text-red-500" 
                          : "text-gray-400 group-hover:text-gray-300"
                      }`} 
                    />
                    <span className={`text-sm font-medium ${post.isLiked ? "text-red-500" : "text-gray-400"}`}>
                      {post.likes}
                    </span>
                  </button>
                </div>

                {/* Caption */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-gray-200 mr-2">
                    {post.username}
                  </span>
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
          
        </div>
      </main>
    </div>
  );
};

export default Feed;