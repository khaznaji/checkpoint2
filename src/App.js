import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import image2 from "./image2.jpg"
import "../src/style.css";

function App() {
  return (
    <div className="App">
      <div style = {{border : 'solid 1px black' , maxWidth: 10000}}>
      <h1 className = "title "> Votre nom ici </h1>
      <img src ={image2} alt="image2" height="500" width="500"/>
      <img src = "/image1.png" alt="image1" height="500" width="500"/> 
        
<iframe width="500" height="200" src="https://www.youtube.com/embed/JXVnFQVAAk4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> Video</iframe> 


     
      </div>
    </div>
  );
}

export default App;
