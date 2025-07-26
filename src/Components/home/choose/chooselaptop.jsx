import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, TrendingUp, Shield, Tag } from 'lucide-react';
import TextType from '../../../design/texttype';
const reasons = [
    {
        icon: CheckCircle,
        title: 'Real Measurable Results',
        slug: 'real-measurable-results',
        description: 'We go beyond vanity metrics. Our focus is on delivering measurable results that matter to your bottom line: increased organic traffic, qualified leads, and higher conversions.',
        color: 'from-green-400 to-emerald-600',
        bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
        delay: 10
    },
    {
        icon: Award,
        title: 'Expert SEO Team',
        slug: 'expert-seo-team',
        description: 'Our team is our greatest asset. It comprises certified SEO specialists with years of industry experience who stay ahead of algorithm changes to keep you on top.',
        color: 'from-yellow-400 to-orange-600',
        bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
        delay: 250
    },
    {
        icon: Tag,
        title: 'Affordable Plans',
        slug: 'affordable-plans',
        description: 'Powerful SEO shouldn\'t break the bank. We offer transparent, flexible pricing and custom packages designed to provide maximum ROI for businesses of all sizes.',
        color: 'from-sky-400 to-blue-600',
        bgColor: 'bg-gradient-to-br from-sky-50 to-blue-50',
        delay: 350
    },
    {
        icon: Users,
        title: 'Client-Centric Approach',
        slug: 'client-centric-approach',
        description: 'Your goals are our goals. We build partnerships based on transparent communication and personalized strategies, ensuring our SEO efforts are perfectly aligned with your business.',
        color: 'from-blue-400 to-indigo-600',
        bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
        delay: 750
    },
    {
        icon: TrendingUp,
        title: 'Sustainable Growth',
        slug: 'sustainable-growth',
        description: 'We don\'t believe in short-term tricks. Our strategies are built for long-term success, ensuring your online presence grows steadily and withstands future algorithm updates.',
        color: 'from-purple-400 to-pink-600',
        bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
        delay: 850
    },
    {
        icon: Shield,
        title: 'Ethical & Transparent Practices',
        slug: 'ethical-transparent-practices',
        description: 'Your brand\'s reputation is paramount. We adhere strictly to white-hat SEO techniques, ensuring your website\'s safety, credibility, and long-term standing with search engines.',
        color: 'from-red-400 to-rose-600',
        bgColor: 'bg-gradient-to-br from-red-50 to-rose-50',
        delay: 900
    },
];

const App = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const lastScrollY = useRef(0);

    
    useEffect(() => {
        const currentSectionRef = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isScrollingDown = window.scrollY > lastScrollY.current;
                lastScrollY.current = window.scrollY;

                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    if (!isScrollingDown) {
                        setIsInView(false);
                        setVisibleCards([]);
                    }
                }
            },
            {
                threshold: 0.1, 
            }
        );

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);
   
    useEffect(() => {
        if (isInView) {
            const timers = reasons.map((reason, index) => {
                return setTimeout(() => {
                    setVisibleCards(prev => {
                        if (!prev.includes(index)) {
                           return [...prev, index];
                        }
                        return prev;
                    });
                }, 100 + reason.delay);
            });
            return () => timers.forEach(timer => clearTimeout(timer));
        }
    }, [isInView]);

    return (
        <section
            ref={sectionRef}
            id="why-choose-us"
            className="py-20 bg-gray-50 relative overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="mb-16">
                     <TextType 
          text={["Why Choose Us"]}
          typingSpeed={100}
          pauseDuration={5000}
          showCursor={true}
          cursorCharacter="|"
        />
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the key advantages of partnering with us for your SEO needs.
                    </p>
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`group relative transform transition-all duration-700 ${
                                visibleCards.includes(index)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                            }`}
                            style={{ transitionDelay: `${reason.delay}ms` }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`
                                relative p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200/50
                                ${reason.bgColor}
                                group-hover:shadow-2xl transition-all duration-500 ease-out
                                transform group-hover:-translate-y-2 group-hover:scale-105
                                overflow-hidden h-full flex flex-col
                            `}>
                                <div className={`
                                    absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
                                    bg-gradient-to-r ${reason.color} blur-2xl
                                `}></div>

                                <div className="relative mb-6">
                                    <div className={`
                                        w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${reason.color}
                                        flex items-center justify-center shadow-lg
                                        transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110
                                    `}>
                                        <reason.icon className="w-10 h-10 text-white" />
                                    </div>
                                    {hoveredCard === index && (
                                        <>
                                            <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                                            <div className="absolute top-2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                                            <div className="absolute bottom-2 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                                        </>
                                    )}
                                </div>

                                <div className="relative z-10 flex-grow flex flex-col">
                                    <div className="flex-grow">
                                        <h3 className={`
                                            text-xl font-bold mb-3 bg-gradient-to-r ${reason.color} bg-clip-text text-transparent
                                        `}>
                                            {reason.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-4">
                                        <a
                                            href={`/services#${reason.slug}`}
                                            className={`inline-flex items-center font-semibold text-sm bg-gradient-to-r ${reason.color} bg-clip-text text-transparent transition-all duration-300 transform group-hover:tracking-wider`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            More Details
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform duration-300 transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default App;
