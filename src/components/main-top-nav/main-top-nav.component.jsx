import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../menu_book-24px.svg";

export const LogoSpan = styled.span`
  margin-left: 5px;
  font-family: "Righteous", cursive;
  font-size: 18px;
  color: #ff4700;
`;

export const NavTag = styled.nav.attrs({
  className: "uk-navbar-container",
})`
  background-color: #300f34;
`;

export const SearchTag = styled.input.attrs({
  className: "uk-search-input uk-width-1-1",
})`
  border-radius: 16px;
  text-align: center;
`;
//  uk-width-1-1

export const MainTopNav = (props) => (
  <NavTag uk-navbar>
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className="uk-brand">
          <a href="#">MyWiki</a>
        </li>
      </ul>
      <ul className="uk-navbar-nav">
        <li className="uk-active">
          <form className="uk-search uk-search-default">
            <SearchTag type="search" placeholder=" Search..." />
          </form>
        </li>
      </ul>
    </div>
  </NavTag>
);
