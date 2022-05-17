import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import HeaderForm from './components/HeaderForm';
import Person from './views/Person';
import Planet from './views/Planet';

function App() {
  return (
    <BrowserRouter >
      <div className="container bg-dark text-warning w-50 mt-5 p-3 d-flex justify-content-center">
        <h1>Luke API</h1>
      </div>
      <HeaderForm />
      <Switch>

        <Route path="/planets/:id">
          <Planet/>
        </Route>

        <Route path="/people/:id">
          <Person/>
        </Route>

      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
