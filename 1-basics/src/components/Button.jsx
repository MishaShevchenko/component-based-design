import './Button.css';

export const Button = ({ label }) => {
  console.log('props', label);

  return <button className='btn'>{label}</button>;
};
