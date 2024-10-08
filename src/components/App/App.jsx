import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
// on load get gallery
let [gallery, setGallery] = useState([]);

 useEffect(() => {
fetchGallery()
 }, [])


  const fetchGallery = () => {

    axios.get('/api/gallery')
    .then(response => {
      setGallery(response.data)
    })
    .catch(err => {
      alert('error getting gallery');
      console.log(err);
        })
      }

    
 


  
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
        <img src="images/lanternfest.jpeg/"/> 
         <img src="images/lil.jpeg"/> 
          <img src="images/lilchey.jpeg"/>
          <img src="images/mag.jpeg"/>
          <img src="images/sam.jpeg"/>
          <img src="images/flowers.jpeg"/>  
          <img src="images/mags.jpeg"/>
          <img src="images/magdoor.jpeg"/>

      </div>
    
  )};


export default App;
