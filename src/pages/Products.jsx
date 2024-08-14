import { getProducts } from "../fakeApi";
import { ProductList } from "../components/ProductList";

export default function Products() {
    const products = getProducts();
    return (
        <main>
            <ProductList products={products}/>
        </main>
    )
}



