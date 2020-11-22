import React from "react";
import { Route } from "react-router-dom";

import Auth from "../containers/Auth";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Settings from "../components/Settings";

const App = () => {
  return (
    <div>
      <Route path="/">
        <Header />
      </Route>
      <Route path="/user/login">
        <Auth />
      </Route>
      <Route path="/user/profile">
        <Profile />
      </Route>
      <Route path="/user/settings">
        <Settings />
      </Route>
    </div>
  );
};

export default App;
