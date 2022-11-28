import './scss/main.scss';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Decription from "./components/Description";

export default function App() {
  return (
      <>
          <Header/>
          <Decription/>
          <Gallery/>
          <Contact/>
      </>
  );
}


