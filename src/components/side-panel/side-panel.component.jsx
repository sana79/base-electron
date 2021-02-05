import React from "react";
import styled from "styled-components";

export const SidePanelDiv = styled.div.attrs({
  className:
    "uk-card uk-card-default uk-card-body uk-section uk-section-primary uk-flex uk-flex-center uk-flex-middle uk-text-center uk-height-viewport",
})`
  border-radius: 20px;
  margin-right: 10px;
  color: #ff4700;
  background-color: #3f0e40;
  border: 1px solid #ff4700;
`;

export const SidePanel = (props) => (
  <div class="uk-width-1-4@m">
    <div class="uk-card uk-card-default uk-card-body uk-height-viewport">
      1-4
    </div>
  </div>
);
