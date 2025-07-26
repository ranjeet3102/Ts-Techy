
import './herosection.css';
import ShinyText from '../../../design/shinytext.jsx';
const HeroSection = () => {
 return (
 <div className="about-hero-container">
 <div className="about-hero-content">
<h1>
<ShinyText
text="About Us"
 speed={3}
/>
 </h1>
 <p className="about-hero-description">
 At TS Techy, we help businesses fix problems and improve their products. 
 Our team works hard to make websites look better and show up higher in search results, 
 so more people find and trust your brand.
 </p>
</div>
 </div>
 );
};

export default HeroSection;

