import { useState } from 'react';
import './Blog.css';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'tutorials', 'tech-insights', 'project-updates'];

  const blogPosts = [
    {
      id: 1,
      title: 'Building a Full-Stack App with React and FastAPI',
      excerpt: 'Learn how to create a production-ready application using modern technologies like React, Tanstack Query, FastAPI, and PostgreSQL.',
      author: 'Nickolai Brennan',
      date: '2024-01-22',
      readTime: '8 min read',
      category: 'tutorials',
      image: '📱',
      tags: ['React', 'FastAPI', 'PostgreSQL']
    },
    {
      id: 2,
      title: 'Mastering Tanstack Query for Efficient Data Fetching',
      excerpt: 'Dive deep into Tanstack Query (React Query) to understand caching, automatic refetching, and optimistic updates.',
      author: 'Nickolai Brennan',
      date: '2024-01-20',
      readTime: '12 min read',
      category: 'tutorials',
      image: '⚡',
      tags: ['Tanstack Query', 'React', 'Performance']
    },
    {
      id: 3,
      title: 'Why PostgreSQL is Perfect for Modern Applications',
      excerpt: 'Explore the features that make PostgreSQL a robust choice for scalable applications, from ACID compliance to JSON support.',
      author: 'Nickolai Brennan',
      date: '2024-01-18',
      readTime: '6 min read',
      category: 'tech-insights',
      image: '🐘',
      tags: ['PostgreSQL', 'Database', 'Architecture']
    },
    {
      id: 4,
      title: 'Project Update: TechStack JSPP v1.0 Released',
      excerpt: 'We\'re excited to announce the first stable release of TechStack JSPP with comprehensive documentation and security updates.',
      author: 'Nickolai Brennan',
      date: '2024-01-22',
      readTime: '3 min read',
      category: 'project-updates',
      image: '🎉',
      tags: ['Release', 'Announcement']
    },
    {
      id: 5,
      title: 'FastAPI Best Practices for Production',
      excerpt: 'Essential tips and patterns for deploying FastAPI applications in production environments with proper error handling and logging.',
      author: 'Nickolai Brennan',
      date: '2024-01-15',
      readTime: '10 min read',
      category: 'tutorials',
      image: '🚀',
      tags: ['FastAPI', 'Python', 'DevOps']
    },
    {
      id: 6,
      title: 'The Evolution of Modern Web Development',
      excerpt: 'From jQuery to React, from REST to GraphQL - how web development has transformed over the past decade.',
      author: 'Nickolai Brennan',
      date: '2024-01-12',
      readTime: '15 min read',
      category: 'tech-insights',
      image: '🌐',
      tags: ['Web Development', 'History', 'Trends']
    }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Blog</h1>
        <p className="blog-subtitle">
          Insights, tutorials, and updates from the TechStack JSPP team
        </p>
      </div>

      {/* Featured Post */}
      <div className="featured-post">
        <div className="featured-badge">Featured</div>
        <div className="featured-content">
          <div className="featured-icon">{featuredPost.image}</div>
          <div className="featured-text">
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div className="post-meta">
              <span className="author">{featuredPost.author}</span>
              <span className="separator">•</span>
              <span className="date">{featuredPost.date}</span>
              <span className="separator">•</span>
              <span className="read-time">{featuredPost.readTime}</span>
            </div>
            <div className="post-tags">
              {featuredPost.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <button className="read-more-btn">Read Article →</button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <div className="filter-label">Filter by:</div>
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="blog-grid">
        {filteredPosts.slice(1).map((post) => (
          <article key={post.id} className="blog-card">
            <div className="card-icon">{post.image}</div>
            <div className="card-content">
              <span className="category-label">
                {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
              <h3>{post.title}</h3>
              <p className="card-excerpt">{post.excerpt}</p>
              <div className="card-meta">
                <span className="meta-item">{post.author}</span>
                <span className="separator">•</span>
                <span className="meta-item">{post.date}</span>
                <span className="separator">•</span>
                <span className="meta-item">{post.readTime}</span>
              </div>
              <div className="card-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag-small">{tag}</span>
                ))}
              </div>
              <button className="card-read-btn">Read More</button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>📬 Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest tutorials, insights, and project updates.</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
          <p className="newsletter-disclaimer">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
