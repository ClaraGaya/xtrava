import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/StravaAuth";
import StravaRedirect from "../pages/StavaExchangeToken";
import Dashaboard from "../pages/Dashboard";

const AppRouter: React.FC = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact={true} />
				<Route path="/exchange_token" component={StravaRedirect} />
				<Route path="/dashboard" component={Dashaboard} />
			</Switch>
		</BrowserRouter>
	);
};
export default AppRouter;
