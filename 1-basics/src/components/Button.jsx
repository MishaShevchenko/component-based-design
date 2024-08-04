import './Button.css';

 const Button = ({ label,id,getCard }) => {
   // console.log('props', label);

  return (
    <div className="button">
      <button onClick={() => getCard(id)} className="btn">{label}</button>
    </div>
  );
};
export default Button