import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import "./Nav.css";

class Nav extends Component {
  state = { activeItem: "account" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary vertical>
        <Menu.Item
          name="Avicii"
          active={activeItem === "account"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Skillex"
          active={activeItem === "settings"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Martin Garrix"
          active={activeItem === "settings"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default Nav;
