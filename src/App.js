import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="main">
          <div className="main-content">
            <Card />
          </div>
          <Nav />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
