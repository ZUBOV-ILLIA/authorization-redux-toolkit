import './App.css';
import {Switch, Route} from 'react-router-dom';
import { HomePage } from 'Pages/HomePage';
import { RegisterPage } from 'Pages/RegisterPage';
import { LoginPage } from 'Pages/LoginPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={RegisterPage} />
    </Switch>
  );
}

export default App;
