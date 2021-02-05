import logo from "./logo.svg";
import "./App.scss";

import { HomePage } from "./pages/homepage/homepage.component";

export const App = () => (
  <div
    className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom"
    uk-height-viewport="offset-bottom: 20"
  >
    <HomePage></HomePage>
  </div>
);

export default App;
