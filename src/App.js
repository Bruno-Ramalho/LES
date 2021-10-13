import data from './data';
import Product from './components/products/Product';
function App() {
    return (
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
                <div className="row center">
                    {
                        data.products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))
                    } </div>
            </main>
            <footer className="row center">
                Cria software Todos os Direitos Reservados
                <span>&#174;</span>
            </footer>
        </div>
    );
}

export default App;
