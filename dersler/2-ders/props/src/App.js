
import './App.css';
import Cat from './components/Cat';

function App() {
  return (
    <div className="App">
    <Cat name="Pinky" 
    img="https://cdn.pixabay.com/photo/2019/02/10/14/31/cat-3987352_1280.jpg" color="gray"/>
    <Cat name="Sheldon"  img="https://cdn.pixabay.com/photo/2020/03/06/10/55/cat-4906764_1280.jpg" color="blue"  />
    <Cat name="Çoço"
       img="https://cdn.pixabay.com/photo/2019/01/27/13/03/cat-3958045_1280.jpg" color="orange"
    />

    </div>
  );
}

export default App;
