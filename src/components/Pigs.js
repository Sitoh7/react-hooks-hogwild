import React, { useState, useEffect } from "react";
import PigList from "./PigList";
import 'semantic-ui-css/semantic.min.css'

function Pigs({ data }) {
    const    [showGreased, setShowGreased] = useState(false);
    const   [sortByName, setSortByName] = useState(false);
    const [sortByWeight, setSortByWeight] = useState(false);
    const    [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        
        let processedData = [...data];

        
        if (sortByWeight) {
            processedData.sort((a, b) => a.weight - b.weight);
        }
        if (sortByName) {
            processedData.sort((a, b) => a.name.localeCompare(b.name));
        }

        
        if (showGreased) {
            processedData = processedData.filter(pig => pig.greased);
        }

        setDisplayData(processedData);
    }, [data, sortByName, sortByWeight, showGreased]);

    return (
        <>
            <label htmlFor="sortByName"><b>Sort By Name</b></label>
            <input 
                type="checkbox" 
                id="sortByName" 
                checked={sortByName} 
                onChange={() => setSortByName(!sortByName)}
            />
            <br />

            <label htmlFor="sortByWeight"><b>Sort By Weight(Ascending)</b></label>
            <input 
                type="checkbox" 
                id="sortByWeight" 
                checked={sortByWeight} 
                onChange={() => setSortByWeight(!sortByWeight)}
            />
            <br />

            <label htmlFor="greased"><b>Display only greased pigs:</b></label>
            <input 
                type="checkbox" 
                id="greased" 
                checked={showGreased} 
                onChange={() => setShowGreased(!showGreased)}
            />
            <br /><br /><br /><br />

            <div className="ui grid container">
                {displayData.map((pig,index) => (
                    <PigList 
                        key={index} 
                        name={pig.name}
                        img={pig.image}
                        specialty={pig.specialty}
                        greased={pig.greased}
                        medal={pig["highest medal achieved"]}
                        weight={pig.weight}
                    />
                ))}
            </div>
        </>
    );
}

export default Pigs;