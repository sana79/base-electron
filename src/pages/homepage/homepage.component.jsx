import React from "react";

// import { HomePageContainer } from "./homepage.styles";
// import { MainTopNav } from "../../components/main-top-nav/main-top-nav.component";
// import { MainPageContainer } from "../../components/main-page-container/main-page-container.component";

import { SidePanel } from "../../components/side-panel/side-panel.component";
import { MainPanel } from "../../components/main-panel/main-panel.component";

import { MainTopNav } from "../../components/main-top-nav/main-top-nav.component";
/* <div>
    <MainTopNav></MainTopNav>
    <MainPageContainer></MainPageContainer>
  </div> */

export const HomePage = (props) => (
  <div>
    <MainTopNav></MainTopNav>
    <div class="uk-text-center uk-grid" uk-grid>
      <SidePanel></SidePanel>
      <MainPanel></MainPanel>
    </div>
  </div>
);
