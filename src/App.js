import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import items from "./variables/itemsData"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: items
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
