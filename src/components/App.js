import React,{useState} from "react";
import Nav from "./Nav";
import Pigs from "./Pigs"
import PigForm from "./PigForm"

import hogs from "../porkers_data";

function App() {
	
	const [hogsData,setHogsData] = useState(hogs)

	function addForm(formData){
		//console.log(formData)
		const newHogsData = [...hogsData,formData]
		setHogsData(newHogsData)
		

	}
	
	return (
		<div className="App">
			
			<Nav />
			<PigForm addForm={addForm} /><br></br>
			<Pigs data={hogsData} />
		</div>
	);
}

export default App;