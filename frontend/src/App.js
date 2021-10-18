import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="index.html">XinG-LinG</a>
                    </div>
                    <div>
                        <a href="cart.html">Carrinho</a>
                        <a href="signin.html">Login</a>
                    </div>
                </header>
                <main>
                    <Route path="/product/:id"
                        component={ProductScreen}></Route>
                    <Route path="/"
                        component={HomeScreen}
                        exact></Route>
                </main>
                <footer className="row center">
                    Cria software Todos os Direitos Reservados
                    <span>&#174;</span>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
