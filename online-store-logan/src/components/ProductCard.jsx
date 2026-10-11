import './ProductCard.css' // allows me to use my custom css styles
import { Link } from 'react-router-dom'

// each card has the same format to help with a clean look
function ProductCard({ identification, name, price, image, description, onAddToCart}) {
    
    // formats the price to USD format including 2 decimal places and the $ in front
    const formattedCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    return (
        <div className="product-card">
            <div className="product-header">
                <img 
                    src={image}
                    alt="Product image" 
                    className="image"
                />
                <a>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p className="price">{formattedCurrency}</p>
                    {/* sends you to the product details page */}
                    <Link to={`/details/${identification}`}>
                        <span>View Details</span>
                    </Link>
                </a>
            </div>
            <button className="card-button" onClick = {() => onAddToCart(identification)}> 
                Add to Cart
            </button>
        </div>
    );
}

// Every component file must export the component
export default ProductCard;