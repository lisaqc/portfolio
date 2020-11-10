import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toggle/style.css"

import Landing from "./pages/landing/landing.page";
import About from "./pages/about/about.page";
import Projects from "./pages/projects/projects.page";
import Books from "./pages/books/books.page";

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter> 
          <Switch>
            <Route exact path="/resume" render={() => {window.location.href="/LisaChen_Resume.pdf"}} />
            <Route exact path="/resume/" render={() => {window.location.href="/LisaChen_Resume.pdf"}} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/books" component={Books} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;









