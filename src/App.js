import React from 'react';
import NavBar from './components/Navbar';
import Top from './pages/Top';
import Quiz from './pages/Quiz';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


function App(){
  return (
   <BrowserRouter>
     <NavBar />
     <div className="container">
       <Switch>
         <Route exact path="/" component={Top} />
         <Route path="/quiz" component={Quiz} />
         <Route render={ () => <h4>not found</h4>} />
       </Switch>
     </div>
   </BrowserRouter>
  );
}

export default App;
