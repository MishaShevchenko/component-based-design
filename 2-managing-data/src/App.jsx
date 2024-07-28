import { PokemonForm } from './PokemonForm';
import List from './PokemonForm/List';

export const App = () => (
  <div className='App'>
    <header>
      <img src='/assets/header.png' alt='Header pokemon' />
    </header>
    <PokemonForm />
    <List/>
  </div>
);
