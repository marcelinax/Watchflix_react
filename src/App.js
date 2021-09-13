import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WatchflixHomepage from './components/WatchflixHomepage';
import WatchflixNavigation from './components/WatchflixNavigation';

function App() {

	return (
		<BrowserRouter>
			<WatchflixNavigation/>
			<Switch>
				<Route path={'/'} exact>
					<WatchflixHomepage/>
				</Route>

			</Switch>
		</BrowserRouter>
	);
}

export default App;
