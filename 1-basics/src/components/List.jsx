import { Button } from './Button';
import Item from './Item';

const list = ['Pikachu', 'Bulbazaur', 'Charmander', 'Squirtle']

export const List = () => (
  <div className="list">
    <ul>
      {list.map((listItem) => (
        <List key={listItem}/>))}
    </ul>

    <Button label={"push it"}></Button>
  </div>
);
