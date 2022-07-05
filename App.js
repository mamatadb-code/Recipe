
import './App.css';
import Recipe from './Recipe'
import Navbar from './Navbar'
import RecipeList  from './RecipeList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
      {/* <Recipe 
          title = "Pasta" 
          ingredients = {["flour", "water" ]}
          instructions = "Mix ingredients"
          img = "pasta.png" 
          /> */}
 
    </div>
  );
}

export default App;
