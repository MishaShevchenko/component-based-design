import { List } from './List';
import  Button  from './Button';

import './App.css';
import Header from './Header';
import Footer from './Footer';

export const App = () => (
  <>
    <header>
      <Header></Header>
      <Button label={"find me"}></Button>
    </header>
    <main>
      <List />
    </main>
    <footer>
      <Footer/>
    </footer>
  </>
);
