import React,{useState} from "react";
import 'semantic-ui-css/semantic.min.css'
function PigList({ name, img,specialty,greased,medal,weight }) {
    const [visibility, setVisibility] = useState(false)
    const [cardVisivbility,setCardVisibility] = useState(false)


    function toggleVisibility(){
        setVisibility((prev)=>!prev)
    }

    function hidebutton(){
        setCardVisibility((prev)=>!prev)
    }
  return (
    <div className={"ui eight wide column" }onClick={toggleVisibility} style={cardVisivbility  ? {visibility:"hidden"}:{visibility:"visible"}}>
      <h2>{name}</h2>
      <img src={img} style={{ width: "150px" }} alt={name} />
      <div style={!visibility ? {visibility:"hidden"}:{visibility:"visible"}}>
      <p><b>Speciality:{specialty}</b></p>
      <p><b>Weight:{weight}Kg</b></p>
      <p><b>{greased  ? "Greased":"Not Greased"}</b></p>
      <p><b>Highest medal achieved:{medal}</b></p>
      <button onClick={hidebutton}>Hide</button>
      </div>
    </div>
  );
}

export default PigList;