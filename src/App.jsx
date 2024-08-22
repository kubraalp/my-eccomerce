import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Header />
      <PageContent>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/ProductPage" component={ProductPage} />
          <Route path="/PricingPage" component={PricingPage} />
          <Route path="/ContactPage" component={ContactPage} />
        </Switch>
      </PageContent>
      <Footer />
    </Router>
  );
}

export default App;
