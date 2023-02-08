// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const arr=[1, 2, 3, 4, 5]
//   return (
//     <div>
//       <center>
//         <h1>USING ARRAY ITEMS ARE : {arr}</h1>
//       </center>
// {arr.map((value)=>{
//   return <h1>The array items are : {value}</h1>
// }
// )
// }
//     </div>
//   );
// }

// export default App;





// import React from "react";

// function demo() {
//   const arr = [1, 2, 3, 4, 5];
//   const newarr= arr.filter((num) => {
//     if (num === 3){
//       return false;
//     }else return true;
//   });

//   return (
//     <div>
//       <center>
//         <h1>USING ARRAY.FILTER FUNCTION</h1>
//       </center>
//       <h1>Old array items are : {arr}</h1>
//       {<h1>aFTER APPLYING FILTER METHOD, THE ARRAY ELEMENTS ARE: {newarr} </h1>}
//     </div>
//   );
// }

// export default demo;



// import React from'react';
//  import img1 from "./img/img1.jpg";
// import img2 from "./img/img2.jpg";

// function SimpleImageGallery() {
//   const images=[
//     {
//       id: 1,
//       pic: img1,
//     },
//     {
//       id: 2,
//       pic: img2,
//     },
//   ];
//   return (
//   <div>
//     {images.map((val) => (
//     <img src={val.pic} height="200px" width="200px" alt ="logo" />
//     ))}
//   </div>
//   );
// }

// export default SimpleImageGallery;





// import React ,{useState} from 'react';
// import AllData from "https://images.unsplash.com/photo-1675208985060-78a2d4a28dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
// import './App.css'
// function App() {
// const[images,setImage]= useState(AllData);
// const allItem = () =>{
// const finalData= AllData.filter((value)=>{
// return value;
// })
// setImage(finalData);
// }
// const onlyReact = (categoryItem) =>{
// const finalData= AllData.filter((value)=>{
// return value.category==categoryItem;
// })
// setImage(finalData);
// }
// const onlyPython = (categoryItem) =>{
// const finalData= AllData.filter((value)=>{
// return value.category==categoryItem;
// })
// setImage(finalData);
// }
// const onlyOffice = (categoryItem) =>{
// const finalData= AllData.filter((value)=>{
// return value.category==categoryItem;
// })
// setImage(finalData);
// }
// return(
// <>
// <div clasName="xy">
// < button onClick={allItem}> ALL</button>
// < button onClick= {()=>onlyPython('Python')}> Python</button>
// < button onClick= {()=>onlyReact('React')}> React</button>
// < button onClick= {()=>onlyOffice('Office')}> Office</button>
// </div>
// <div class="xyz">
// {images.map((value)=> {
// return (<div> <img src={value.image} className="abc" /></div>)
// })}
// </div>
// </>
// )}
// export default App;






//task perform +5-
import './App.css';
import React, {useState} from "react"

function App() {
  const [a, setA]=useState(5);
  function inc()
  {
    setA(a+1);
  }
  function dec()
  {
    if(a===0)
    return false
    else 
    setA(a-1);
  }
  return(
    <div className="App">
      <button onClick={inc}>+</button>
      <div>{a}</div>
      <button onClick={dec}>-</button>
    </div>
  );
}
export default App;