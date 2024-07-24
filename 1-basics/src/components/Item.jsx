import "./Item.css";
const Item = ({ name, image, id}) => {
    return (
      <div className="cards">
        <li className="items">{name}</li>
            <img src={image} alt="name" />
            <p>{id }</p>
      </div>
    );

};
export default Item;
