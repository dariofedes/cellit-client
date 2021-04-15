import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Header } from './components/';
import { Home, Details } from './pages'

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/details" component={Details} />
    </Router>
  );
}
