import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/StravaAuth";
import StravaRedirect from "../pages/StavaExchangeToken";
import Dashaboard from "../pages/Dashboard";

function AppRouter() {
  return (
      <BrowserRouter>
          <div className="main">
              <Switch>
                  <Route path="/" component={Home} exact={true} />
                  <Route path="/exchange_token" component={StravaRedirect} />
                  <Route path="/dashboard" component={Dashaboard} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}
export default AppRouter;