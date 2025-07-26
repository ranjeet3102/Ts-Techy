import React from 'react';
import GlareHover from '../../../design/glarehover.jsx';
import TextType from '../../../design/texttype.jsx';
const services = [
    {
        title: 'Keyword Research',
        description: 'Unlock the potential of your website with strategic keyword analysis. We identify high-impact, low-competition keywords tailored to your niche using the latest tools and trends. Our research ensures your content aligns with user intent and search engine algorithms, boosting visibility and driving qualified traffic',
    },
    {
        title: 'On-Page Optimization',
        description: 'Fine-tune your website to maximize performance. From improving title tags, headers, and internal linking structures to optimizing images and enhancing page speed, we ensure your site meets SEO best practices. We also conduct content audits to make your pages more relevant and engaging for users and search engines alike.',
    },
    {
        title: 'Monthly SEO Reports',
        description: ' Stay ahead with clear, data-driven insights. Our monthly reports track keyword rankings, traffic sources, backlink profiles, and site performance. We provide actionable recommendations and keep you informed about algorithm changes so you can adapt your strategy proactively.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                 <TextType 
          text={["Our SEO Services"]}
          typingSpeed={100}
          pauseDuration={5000}
          showCursor={true}
          cursorCharacter="|"
        />

               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 mt-10">
                {services.map((service, index) => (
                    <GlareHover
                      key={index}
                      className="shadow-md"
                      borderRadius="16px" 
                      glareColor="#000000" 
                      glareOpacity={0.20}
                      transitionDuration={800}
                    >
                        {/* Card content */}
                        <div className="p-6 h-full flex flex-col justify-start text-left">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-base">{service.description}</p>
                        </div>
                    </GlareHover>
                ))}
            </div>  
            </div>
        </section>
    );
};

export default Services;