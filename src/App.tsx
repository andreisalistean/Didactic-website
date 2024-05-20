import { useState } from "react";
import FragmentViewer from "./FragmentViewer";
import hello from "assets/images/hello.png";
import efficiency from "assets/images/efficiency.png";
import security from "assets/images/securit.png";
import maniera from "assets/images/maniera.png";
import book from "assets/images/stack-of-books.png";
import "./App.css";

function App() {
  const [view, setView] = useState(0);

  return (
    <>
      <div className="NavBar">
        <img
          className="imgHello"
          src={hello}
          onClick={() => {
            setView(0);
          }}
        />
        <div
          className="butt"
          onClick={() => {
            setView(1);
          }}
        >
          <h1 className="txtNav">Eficienta</h1>
          <img className="imgNav" src={efficiency} />
        </div>
        <div
          className="butt"
          onClick={() => {
            setView(2);
          }}
        >
          <h1 className="txtNav">Securitate</h1>
          <img className="imgNav" src={security} />
        </div>
        <div
          className="butt"
          onClick={() => {
            setView(3);
          }}
        >
          <h1 className="txtNav">Conduita</h1>
          <img className="imgNav" src={maniera} />
        </div>
        <div className="contact">
          <img
            className="book"
            src={book}
            onClick={() => {
              setView(4);
            }}
          />
          <h1 className="cont">CONTACT</h1>
        </div>
      </div>
      <FragmentViewer nr={view} />
    </>
  );
}

export default App;
