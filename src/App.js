import React from "react";
import "./App.css";
// import domtoimage from "dom-to-image";
// import GhPolyglot from "gh-polyglot";
import LandingPage from "./containers/LandingPage";
import UserDetails from "./containers/UserDetails";

import { Switch, Route } from "react-router-dom";

function App() {
  // const saveImage = () =>
  //   domtoimage
  //     .toJpeg(document.getElementById("my-node"), { quality: 0.95 })
  //     .then(function (dataUrl) {
  //       var link = document.createElement("a");
  //       link.download = "my-image-name.jpeg";
  //       link.href = dataUrl;
  //       link.click();
  //     });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(routeProps) => <LandingPage />} />
        <Route
          exact
          path="/users/:userId"
          render={(routeProps) => <UserDetails />}
        />
      </Switch>
    </div>
  );
}

export default App;
