import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Layout from "./components/layout/Layout";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
