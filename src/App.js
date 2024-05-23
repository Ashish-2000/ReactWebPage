import "./styles.css";
import CORE_CONCEPTS from "./data";
import { useState } from "react";

function App() {
 const [text, setText] = useState({
  description: "",
  title: "Please Click Button",
  image: "https://clipart-library.com/image_gallery2/Wink-Emoji-PNG.png",
 });

 function handleClick(value) {
  setText(CORE_CONCEPTS[value]);
 }

 return (
  <div>
   <header>
    <h1>React Essentials</h1>
    <p>
     Fundamental React concepts you will need for almost any app you are going
     to build!
    </p>
   </header>

   <div className="gridisp">
    {CORE_CONCEPTS.map((item, index) => (
     <div className="imagesize " key={index}>
      <img src={item.image} className="img" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
     </div>
    ))}
   </div>
   <main>
    <h2>Time to get started!</h2>
   </main>
   <div className="divdisp">
    <menu>
     <button onClick={() => handleClick(0)}> Components</button>
     <button onClick={() => handleClick(1)}> JSX</button>
     <button onClick={() => handleClick(2)}>Props</button>
     <button onClick={() => handleClick(3)}> State</button>
    </menu>
    <div className="card ">
     <img src={text.image} alt="image" className="img" />
     <h2>{text.title}</h2>
     <p>{text.description}</p>
    </div>
   </div>
  </div>
 );
}

export default App;
