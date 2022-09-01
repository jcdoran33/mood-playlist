//import React
import React from 'react';

// const dropdownTextReplace = function () {
//     console.log("dropdownTextReplace function launched ");
//     //define DOM elements
//     const dropdown = document.querySelector(".form-select");
//     const dropdownSelection = document.querySelector("#mood-form");
//     //actions
//     dropdown.innerHTML = dropdownSelection.value;
//     //when clicked, replace innerHTML or text of drop down with the dropdownSelection.value
// };

const generatePlaylist = () => {
    //API call goes in here
};

function MoodSelector(dropdownTextReplace) {

    return (
        <div className="mood-selector">
            <div className="mood-header">
                <h3>Select your mood...</h3>
            </div>
            {/* <label for="pet-select">Choose a pet:</label> <br/> */}
            <form id="mood-form">
            
            <select className="form-select" aria-label="Default select example" form="mood-form">
                <option defaultValue>Choose a mood...</option>
                <option value="Euphoric">Euphoric</option>
                <option value="Somber">Somber</option>
                <option value="Jazzy">Jazzy</option>
            </select>
                {/* <input type="submit"/> */}
            </form>
            <button onClick={(e) => this.generatePlaylist}>Generate Playlist</button>

        </div>
    )
}

//export component 'MoodSelector'
export default MoodSelector;