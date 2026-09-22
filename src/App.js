import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Images from "./components/Images/Images";
import imagesData from "./assets/ImagesData";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Images images={imagesData} />
    </div>
  );
}

export default App;
