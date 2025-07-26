import React from 'react';
import './Services.css'; 
import { Search, FileCog, BarChart3 } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Core SEO Services</h1>
        <p className="services-intro">
          We provide a comprehensive suite of SEO services designed to boost your online presence and drive measurable results.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon-wrapper">
            <Search className="service-icon" size={36} />
          </div>
          <h2>Keyword Research</h2>
          <p>
            Unlock the potential of your website with strategic keyword analysis. We identify high-impact, low-competition keywords tailored to your niche using the latest tools and trends. Our research ensures your content aligns with user intent and search engine algorithms, boosting visibility and driving qualified traffic.
          </p>
        </div>

     
        <div className="service-card">
          <div className="service-icon-wrapper">
            <FileCog className="service-icon" size={36} />
          </div>
          <h2>On-Page Optimization</h2>
          <p>
            Fine-tune your website to maximize performance. From improving title tags, headers, and internal linking structures to optimizing images and enhancing page speed, we ensure your site meets SEO best practices. We also conduct content audits to make your pages more relevant and engaging for users and search engines alike.
          </p>
        </div>

   
        <div className="service-card">
          <div className="service-icon-wrapper">
            <BarChart3 className="service-icon" size={36} />
          </div>
          <h2>Monthly SEO Reports</h2>
          <p>
            Stay ahead with clear, data-driven insights. Our monthly reports track keyword rankings, traffic sources, backlink profiles, and site performance. We provide actionable recommendations and keep you informed about algorithm changes so you can adapt your strategy proactively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;