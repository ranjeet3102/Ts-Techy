import Herosection from "../Components/about/herosection/herosection.jsx";
import Footer from "../Components/home/footer/footer.jsx";
import Founder from "../Components/about/founder/founder.jsx";
import Story from '../Components/about/story/story.jsx';
const about = () => {
  return (
    <div>

      <Herosection/>
      <Founder/>
      <Story/>
      <Footer/>
    </div>
  );
}
export default about;