import "./App.css";
import { useEffect } from "react";
import { fetchCharacters } from "./Redux/rickandmorty";
import { useDispatch } from "react-redux";

import CharactersCard from "./components/Card";
import Header from "./layout/Header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  });
  return (
    <div className="App">
      <Header />
      <CharactersCard />
    </div>
  );
}

export default App;
