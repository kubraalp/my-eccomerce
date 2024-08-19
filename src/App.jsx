import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <PageContent>
        <Switch>
          <Route path="/" component={HomePage} exact />
          {/* Diğer sayfalar için rotalar */}
        </Switch>
      </PageContent>
      <Footer />
    </Router>
  );
}

export default App;
