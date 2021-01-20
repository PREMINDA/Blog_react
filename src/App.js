import Navbar from './Navbar'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Create from './Creat';
import BlogDetail from './Blogdetails';


function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetail/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
