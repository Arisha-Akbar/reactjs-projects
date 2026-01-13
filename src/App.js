import { useState } from "react";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import "./App.css";

function App() {
  const [active, setActive] = useState(null);

  const renderComponent = () => {
    switch (active) {
      case "accordion":
        return <Accordian />;
      case "random":
        return <RandomColor />;
      case "rating":
        return <StarRating noOfStars={10} />;
      case "slider":
        return (
          <ImageSlider
            url="https://picsum.photos/v2/list"
            page="1"
            limit="10"
          />
        );
      case "tree":
        return <TreeView menus={menus} />;
      default:
        return <p style={{ color: "black", textAlign: "center", fontSize: '35px', fontWeight: 'bold'}}>Select a component</p>;
    }
  };

  return (
    <div className="App">
      <h1>React Mini Components</h1>

      <div className="menu">
        <button onClick={() => setActive("accordion")}>Accordion</button>
        <button onClick={() => setActive("random")}>Random Color</button>
        <button onClick={() => setActive("rating")}>Star Rating</button>
        <button onClick={() => setActive("slider")}>Image Slider</button>
        <button onClick={() => setActive("tree")}>Tree View</button>
      </div>

      <div className="content">{renderComponent()}</div>
    </div>
  );
}

export default App;
