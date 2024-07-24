import './Button.css';

export const Button = ({ label }) => {
  // console.log('props', label);
 
  return (
    <div className='button'>
      <button className="btn">{label}</button>
    </div>
  );
};
