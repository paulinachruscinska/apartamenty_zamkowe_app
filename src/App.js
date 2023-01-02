import './scss/main.scss';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Decription from "./components/Description";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
      <>
          <Header/>
          <AboutUs/>
          <Decription/>
          <Gallery/>
          <Contact/>
      </>
  );
}


