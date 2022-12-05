import "./App.css";
import { useEffect } from "react";
import { fetchCharacters } from "./Redux/rickandmorty";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  });
  return (
    <div className="App">
      <header className="App-header">hello world</header>
    </div>
  );
}

export default App;
