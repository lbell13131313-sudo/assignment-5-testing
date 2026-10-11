import { Link, useParams } from "react-router-dom";

function ProductDetailsPage({products, addToCart}) {
    const { id } = useParams();

    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return (
            <main>
                <h2>Product not found</h2>
                <Link to={'/products'}>
                    Back to Products
                </Link>
            </main>
        );
    }

    return (
        <div>
            not in use yet
        </div>
    );
}

export default ProductDetailsPage;