import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Header } from './components/';
import { Home, Details } from './pages'

export default function App() {
  return (
    <Router>
      <Header />
      <Route path="/details" component={Details} />
      <Route path="/home" component={Home} />
    </Router>
  );
}
