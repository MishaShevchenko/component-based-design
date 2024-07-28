import React, { useState } from "react";
import Item from "./Item";


const initialList = ["Pikachu", "Bulbazaur", "Charmander", "Squirtle"];
const List = () => {
  const [list, setList] = useState(initialList);
const [newPokemon, setNewPokemon] = useState("");

    const addPokemon = () => {
      setList([...list, newPokemon]);
      setNewPokemon("");
    };

    const removePokemon = (pokemon) => {
      setList(list.filter((item) => item !== pokemon));
    };

    return (
      <div className="list">
        <ul>
          {list.map((listItem) => (
            <Item key={listItem} listItem={listItem} />
          ))}
        </ul>
        <input
          type="text"
          value={newPokemon}
          onChange={(e) => setNewPokemon(e.target.value)}
          placeholder="Add a Pokemon"
        />
        <Button label={"Add"} onClick={addPokemon} />
        <ul>
          {list.map((listItem) => (
            <li key={listItem}>
              {listItem}{" "}
              <button onClick={() => removePokemon(listItem)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
};
export default List;
