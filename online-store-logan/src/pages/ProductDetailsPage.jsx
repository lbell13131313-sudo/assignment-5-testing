import { Link, useParams } from "react-router-dom";


function ProductDetailsPage({products, addToCart}) {
    const { identification } = useParams();

    // matches up the products with the productcard that was clicked to view details for
    const product = products.find(
        (product) => product.id === Number(identification)
    );

    // formats the price to USD format including 2 decimal places and the $ in front
    const formattedCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(product.price);

    if (!product) {
        return (
            <main>
                <h2>Product not found</h2>
                <Link to={'/products'}>
                    Return to Products
                </Link>
            </main>
        );
    } else {
        return (
            <main>
                <div className="product-header">
                    <img 
                        src={product.image}
                        alt="Product image" 
                        className="image"
                    />
                    <a>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">{formattedCurrency}</p>
                        {/* sends you back to the products page */}
                        <Link to={'/products'}>
                            <span>Back to Products</span>
                        </Link>
                    </a>
                </div>
                <button className="card-button" onClick = {() => addToCart(product.id)}> 
                    Add to Cart
                </button>
            </main>
        );
    }
}

export default ProductDetailsPage;