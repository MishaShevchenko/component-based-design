import Button from "./Button";

import "./Item.css";
const Item = ({ name, image, id, getCard, number }) => {
  return (
    <div className="cards">
      <li className="items">{name}</li>
      <img src={image} alt={name} />
      <p>{`# ${number + 1}`}</p>
      <Button label={"Show Card Info"} getCard={getCard} id={id}></Button>
    </div>
  );
};
export default Item;
