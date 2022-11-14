import './App.css';
import image from'./assets/image.png';

function App() {
  return (
    <div className="App">
      <br></br>
      <p>The Evolution of Airbnb's Frontend</p>
      <br></br>
      <div className='para'>
      <p>@spikebrehm</p>
      <img className='image' src={image}></img>
      </div>
    </div>
  );
}

export default App;
