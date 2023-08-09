import React, { useState } from "react";


const Home = () => {

const [verde,setVerde] = useState("secondary")
const [rojo,setRojo] = useState("secondary")
const [amarillo,setAmarillo] = useState("secondary")



function handleTrafficLightVerde(){
 setRojo("secondary")
 setAmarillo("secondary")
 setVerde("success")
}
function handleTrafficLightRed(){
  setRojo("danger")
  setAmarillo("secondary")
  setVerde("secondary")
 }
 function handleTrafficLightAmarillo(){
  setRojo("secondary")
  setAmarillo("warning")
  setVerde("secondary")
 }
 function handleNewColor() {
  if (rojo === "danger") {
    handleTrafficLightAmarillo();
  } else if (amarillo === "warning") {
    handleTrafficLightVerde();
  } else {
    handleTrafficLightRed();
  }
}


  return (
    <> 
  
    <div className="container-fluid">
      <div className="semaforo justify-content-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "150px", border: "1px solid gray", background: "gray"}} >
   
  <button className= {"btn btn-" + rojo + " p-5" + " rounded-circle" } onClick={handleTrafficLightRed}>
  
    </button>
  <button className= {"btn btn-" + amarillo + " p-5" + " rounded-circle"} onClick={handleTrafficLightAmarillo} >
  
    </button>
    <button className= {"btn btn-" + verde + " p-5" + " rounded-circle"} onClick={handleTrafficLightVerde}>
		
    </button>

      </div>
    </div> 
    <div className="alternar ">
    <button
  className={"btn btn-primary m-5"}
  onClick={handleNewColor}>Alternar
</button>
      </div> 
   </> 
  );
};

export default Home;

 