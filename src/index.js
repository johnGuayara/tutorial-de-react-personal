import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // myElement
);

//======================================================================================================

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <th>John</th>
//     </tr>
//     <tr>
//       <th>Elsa</th>
//     </tr>
//   </table>
// );
// ReactDOM.render(myelement,document.getElementById("root"));

//======================================================================================================


  // const myElement = (
  //   <ul>
  //     <li>Apples</li>
  //     <li>Bananas</li>
  //     <li>Cheries</li>
  //   </ul>
  // );

//======================================================================================================


  // const myElement = (
//   <div>
//     <p>I am a paragraph</p>
//     <p>I am a paragraph too.</p>
//   </div>
// );

//======================================================================================================


// const myElement = <input type="text" />

//======================================================================================================

// const myElement = <h1 className="myclass">hello world</h1>;

//======================================================================================================

// const x = 5;
// let text = "Goodbye";

// if(x < 10){
//   text = "Hello";
// }
// const myElement = <h1>{text}</h1>

//======================================================================================================

// const x = 5;

// const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;