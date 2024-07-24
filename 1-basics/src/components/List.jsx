import { Button } from "./Button";
import Item from "./Item";
const list = [
  {
    id: 1,
    name: "Pikachu",
    image:
      "https://i.pinimg.com/1200x/59/8b/03/598b038e93854be96796bdaf5bb17ae5.jpg",
  },
  {
    id: 2,
    name: "Bulbasaur",
    image:
      "https://www.shutterstock.com/image-vector/bulbasaur-selebrate-halloween-flat-style-600nw-1534674413.jpg",
  },
  {
    id: 3,
    name: "Charmander",
    image:
      "https://i.pinimg.com/originals/e2/23/1c/e2231c4f90fae48e85d9ff78dd768ee0.png",
  },
  {
    id: 4,
    name: "Squirtle",
    image:
      "https://i.pinimg.com/736x/00/73/cb/0073cbf3151b39fcfbdeff81c04d29bb.jpg",
  },
];
const getCard = (id) => {
  list.find((card) => card.id === id);
  console.log(card);
};
export const List = ({getCard}) => (
  <div className="list">
    <ul>
      {list.map((listItem) => (
        <Item key={listItem.id} {...listItem} getCard = {getCard} />
      ))}
    </ul>
  </div>
);

const EventExamples = () => {
  const handleButtonClick = () => {
    console.log("btn click!");
  };
};
