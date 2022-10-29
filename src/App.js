import './App.css';
import Posts from './Posts';
// import Movies from './Movies'
import AsyncPosts from './AsyncPosts'

function App() {
  return (
    <div className="App">
      <h2>Latest articles</h2>
      <AsyncPosts />
    </div>
  );
}

export default App;
