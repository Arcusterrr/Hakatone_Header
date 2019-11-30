import React from "react";
import "./headerstyles.css";
import pict from "./pictures/bflogo.jpg";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="main__logo">
            <img src={pict} />
          </div>
          <div className="header__content">
            <div className="nav">
              <div className="nav__list">
                <div className="nav__item">Вход</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
