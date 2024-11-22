import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ListGroupWithState from "./components/ListGroupWithState";
import Message from "./Message";
import { FcDownload } from "react-icons/fc";
import { BsAirplaneEngines } from "react-icons/bs";
import Header from "./components/Header/Header";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Sidebar from "./components/SideBar";
import LikeButton from "./components/LikeButton";

function App() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  const handleSelectdItem = (item: string) => console.log(item);
  const [alertVisable, setVisability] = useState(false);
  return (
    <div>
      <LikeButton />
      <FcDownload size="60" color="red" />
      <BsAirplaneEngines size="70" color="red" />
      {/* <ListGroupWithState
         items={items}
         heading="Cities"
         OnSelectedItem={handleSelectdItem}
       /> */}
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {/* <Button color="primary" onClick={() => console.log("Clicked")}>
        Click Here
      </Button> */}
      {/* {alertVisable && (
        <Alert onClose={() => setVisability(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
        </Alert>
      )}
      <Button color="primary" onClick={() => setVisability(true)}>
        Show Alert
      </Button> */}
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
