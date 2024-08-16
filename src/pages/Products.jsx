import { useSearchParams } from "react-router-dom";
import { getProducts } from "../fakeApi";
import { ProductList } from "../components/ProductList";
import { SearchBox } from "../components/SearchBox";

export default function Products() {
    const products = getProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get("name") ?? "";

    const visibleProducts = products.filter((product) => 
    product.name.toLocaleLowerCase().includes(productName.toLocaleLowerCase())
);

const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
};
    return (
        <main>
            <SearchBox value={productName} onChange={updateQueryString}/>
            <ProductList products={visibleProducts}/>
        </main>
    )
}



