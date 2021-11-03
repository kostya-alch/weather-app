import { Switch, Route } from 'react-router';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatictics/components/MonthStatistics';
import { Header } from './shared/Header/Header';
function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/month-statistics" exact component={MonthStatistics} />
      </Switch>
    </div>
  );
}

export default App;
