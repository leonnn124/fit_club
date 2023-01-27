import "./style/main.sass";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Reason from "./components/Reason";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Join from "./components/Join";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />

      <Programs />

      <Reason />

      <Plans />

      <Testimonials />

      <Join />

      <Footer />
    </div>
  );
}

export default App;
