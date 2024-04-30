


// export const TestProject=[
//     {
//     _id:1,
//     image:'soerjosdfksjfo',
//     name:'pan',
//     likes:[
//         {uers:'12fd345'},
//         {uers:'1234534'},
//         {uers:'124353456'},
//         {uers:'123533456'}

//     ]
//    },
//    {
//     _id:2,
//     image:'soerjosdfksjfo',
//     name:'pan',
//     likes:[
//     {uers:'12345'},
//     {uers:'1234'},
//     {uers:'123456'}
//     ]
//    },
//    {
//     _id:3,
//     image:'soerjosdfksjfo',
//     name:'pan',
//     likes:[
//         {uers:'125345'},
//         {uers:'1234'},
//         {uers:'12353456'},
//         {uers:'123533456'}

//     ]
//    }
// ]



import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import FadeLoader from "react-spinners/FadeLoader";
const override={
  position: "absolute",
  marginTop:"400px",
  
  
};
const TestA=()=>{

  return (
    <div className="sweet-loading" style={{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",marginLeft:"50%"}}>
         <FadeLoader
          color="#d94fb2"
          style={override}
          size={800}
          />
    </div>

  );
  }

export default TestA
