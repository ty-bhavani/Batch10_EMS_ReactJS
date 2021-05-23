import { Link, Route, Switch } from "react-router-dom";
import Create from "../pages/Create";
import Home from "../pages/Home";
import ShowAcc from "../pages/ShowAcc";


export const routing = (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
     
     
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <Link className="nav-link" to="/home" style={{textDecoration:'none'}}>
             Home   {"  "}
              </Link>
              <Link className="nav-link" to="/create" style={{textDecoration:'none'}}>
                CreateAccount{" "}
              </Link>
         {""}
         
              <Link className="nav-link" to="/showacc" style={{textDecoration:'none'}}>
               {""} ShowAccount
              </Link>
         
        
          </ul>
        </div>
      </div>
    </nav>
    <Switch>
      <Route exact  path="/" component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/showacc" component={ShowAcc} />
      <Route path="/home" component={Home} />
    </Switch>
  </>
);