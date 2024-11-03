
import React,{useState} from "react";
import PigList from "./PigList";
import 'semantic-ui-css/semantic.min.css'
function Pigs({ data }) {

    const [checkBox,setCheckbox] = useState(false)
    const [sortByName, setSortByName] = useState(false);
  const [sortByWeight, setSortByWeight] = useState(false);
  const [sortedData, setSortedData] = useState(data);

const greasedpigs = sortedData.filter(data=>{
    if(checkBox){
        return data.greased == true
    }
    return true
}
)

function sortPigs(){
    let sortedArray = [...data];
    if (sortByWeight) {
        // Sort by weight if the weight checkbox is checked
        sortedArray.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
      }
      if (sortByName) {
        // Sort by name if the name checkbox is checked
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
      }

    setSortedData(sortedArray)

}

React.useEffect(() => {
    sortPigs();
  }, [sortByName, sortByWeight]);




  return (
    <>
    <label htmlFor="sortByName"><b>Sort By Name</b></label>
    <input type="checkbox" id="sortByName" checked={sortByName} onChange={()=>setSortByName(!sortByName)}></input><br></br>
    <label htmlFor="sortByWeight"><b>Sort By Weight(Ascending)</b></label>
    <input type="checkbox" id="sortByWeight" checked={sortByWeight} onChange={()=>setSortByWeight(!sortByWeight)}></input><br></br>
     <label htmlFor="greased"><b>Display only greased pigs:</b> </label> 
    <input type="checkbox" id="greased" value={checkBox} onChange={()=>setCheckbox(!checkBox)}></input> 
    <br></br><br></br><br></br><br></br>
    <div className={"ui grid container"}>
      {greasedpigs.map((data, index) => (
        <PigList key={index} name={data.name} img={data.image} specialty={data.specialty} greased={data.greased} medal={data["highest medal achieved"]} weight={data.weight}/>
      ))}
    </div>
    </>
  );
}

export default Pigs;
