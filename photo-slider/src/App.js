import './App.css';
import PhotoSlider from './photo-slider';

function App() {
  return (
    <div className="App">
      
      <PhotoSlider 
      url={"https://picsum.photos/v2/list"}
      page={"1"} 
      limit={"10"}
      />

    </div>
  );
}

export default App;
