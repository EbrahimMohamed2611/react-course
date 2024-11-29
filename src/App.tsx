import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import StrictModeTest from "./components/StrictModeTest";
import Drink from "./components/Drink";
import Bugs from "./components/Bugs";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "First Item",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg",
      description: "description For First Item",
    },
    {
      id: 2,
      title: "Second Item",
      imgUrl:
        "https://wellingtonnz.bynder.com/transform/39cd535b-094b-4064-9cbb-e1e6ae1d1cc2/Customs-06?io=transform:fit,width:576",
      description: "description For Second Item",
    },
    {
      id: 3,
      title: "Third Item",
      imgUrl:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?cs=srgb&dl=pexels-chevanon-302899.jpg&fm=jpg",
      description: "description For Third Item",
    },
    {
      id: 4,
      title: "Fourth Item",
      imgUrl:
        "https://media.istockphoto.com/id/1368207254/photo/woman-holding-a-cup-of-cafe-latte-in-cafe.jpg?s=612x612&w=0&k=20&c=qOYbpuMTo4HFog53B6nWslNs588K4725g1aZHNS03XQ=",
      description: "description For Fourth Item",
    },
    {
      id: 5,
      title: "Fifth Item",
      imgUrl: "https://www.upmenu.com/wp-content/uploads/2023/11/coffee.jpeg",
      description: "description For Fifth Item",
    },
  ]);

  return (
    <div>
      <Navbar itemCount={items.length} />
      <div className="container">
        <div className="row">
          <Cart
            items={items}
            remove={(id: number) => {
              setItems(items.filter((item) => item.id !== id));
            }}
          />
        </div>
      </div>
      {/* <Counter /> */}
      {/* <React.StrictMode>
        <StrictModeTest />
      </React.StrictMode> */}
      {/* <Bugs />
      <Drink />
      <div className="container">
        <div className="row">
          <div className="col">
            <StrictModeTest />
          </div>
          <div className="col">
            <StrictModeTest />
          </div>
          <div className="col">
            <StrictModeTest />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
