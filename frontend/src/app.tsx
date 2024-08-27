import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={ProductsPage} />
                <Route path="/products/:productid" component={ProductDetailPage} />
            </Switch>
        </Router>
    );
};

export default App;
