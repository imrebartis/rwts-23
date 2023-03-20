import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "RJ Barrett",
      age: 22,
      img: "https://cdn.nba.com/headshots/nba/latest/260x190/1629628.png",
      note: "NYK",
    },
    {
      name: "Will Barton",
      age: 32,
      img: "https://cdn.nba.com/headshots/nba/latest/260x190/203115.png",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
