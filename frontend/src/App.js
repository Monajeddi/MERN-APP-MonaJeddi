import './App.css';
import {Switch , Route} from 'react-router-dom'

import Home from './Components/Home/Home';
import ContactList from './Components/ContactList/ContactList';
import AddEditContact from './Components/AddEditContact/AddEditContact';

function App() {
  return (
    <div className="App">
      <Home/>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/(add_contact|edit_contact)" component={AddEditContact} />
      </Switch>
     
    </div>
  );
}

export default App;
