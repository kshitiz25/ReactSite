import './App.css';
import ContactUs from './components/ContactUs';
import ImageCarousel from './components/ImageCarousel';
import NavigationBar from './components/Navbar';
import ProductsSection from "./components/ProductsSection";
import TestimonialSection from './components/TestimonialSection';

function App() {
  return (
    <div>
    <NavigationBar />
    <ImageCarousel />
    <ProductsSection />
    <TestimonialSection />
    <ContactUs />
  </div>
  );
}

export default App;
