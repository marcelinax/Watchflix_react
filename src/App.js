import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WatchflixHomepage from './components/WatchflixHomepage';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={'/'} exact>
					<WatchflixHomepage/>
				</Route>
			</Switch>
		</BrowserRouter>

	);
}

export default App;
