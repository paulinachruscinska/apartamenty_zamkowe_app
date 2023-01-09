import './scss/main.scss';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Description from "./components/Description";
import AboutUs from "./components/AboutUs";
import Book from "./components/Book";

export default function App() {
  return (
      <>
          <Header/>
          <AboutUs/>
          <Description/>
          <Gallery/>
          <Book/>
          <Contact/>
      </>
  );
}


