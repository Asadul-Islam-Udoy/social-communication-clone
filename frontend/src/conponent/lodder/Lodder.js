import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
const override={
  position: "absolute",
  marginTop:"600px", 
};

function Lodder() {
  return (
    <div className="sweet-loading" style={{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",marginLeft:"25%"}}>
       <FadeLoader
         color="black"
         style={override}
        size={800}
       />
    </div>
  )
}

export default Lodder
