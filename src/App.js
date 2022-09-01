//import React
import React from 'react';
//import components
import Header from './components/Header';
import Footer from './components/Footer';
import MoodSelector from './components/MoodSelector';
import PlaylistDisplay from './components/PlaylistDisplay';
//import custom CSS
import './App.css';


//test - define generatePlaylist function
const generatePlaylist = () => {
  console.log("TEST: generatePlaylist function has been called");
  //define DOM elements
  const generateBtn = document.querySelector("#generate-btn");
  const moodForm = document.querySelector("#mood-select");
  const moodFormValue = moodForm.value;
    // console.log("TEST: value of moodForm: ", moodFormValue);
  //API call starts here
  //define URL string
  const apiBaseURL = "https://api.spotify.com/v1";
  //make fetch API call
  fetch(apiBaseURL, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '
    }
  })
};


function App() {
  // console.log("test for gen playlist: ", generatePlaylist);
  return (
    <div className="App">
      <Header />

      <MoodSelector generatePlaylist={generatePlaylist}/>

      <Footer />
    </div>
  );
}

export default App;
