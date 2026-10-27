import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Images from "./components/Images/Images";
import imagesData from "./assets/ImagesData";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="beach-background">
      <Nav />
      <Header />
      <Images images={imagesData} />
      <Footer />
    </div>
  );
}

export default App;
