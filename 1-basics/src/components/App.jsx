import { List } from './List';
import { Button } from './Button';

import './App.css';
import Header from './Header';

export const App = () => (
  <>
    <header>
      <Header></Header>
      <Button label={"find me"}></Button>
    </header>
    <main>
      <List />
      <Button label={"push it"}></Button>
    </main>
  </>
);
