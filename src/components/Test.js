import React from "react";
import Nav from "./Nav";
import Pigs from "./Pigs"
import PigForm from "./PigForm"

import hogs from "../porkers_data";

function App() {
	
	function addForm(a){
		console.log(a)
	}

	return (
		<div className="App">
			
			<Nav />
			<PigForm addForm={addForm} />
			<Pigs data={hogs} />
		</div>
	);
}

export default App;
