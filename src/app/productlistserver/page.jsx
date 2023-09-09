import Button from "./Button";

const productlist = async () => {
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products;
}

const Productlistserver = async () => {
    // Server side fetching
    const products = await productlist();
    return (
        <div>
            <h1>Product list from server</h1>
            {
                products.map((product, ind) => (
                    <div key={ind}>
                        <h3>Name: {product.title}</h3>
                        <Button price={product.price} />
                    </div>
                ))
            }
        </div>
    );
};

export default Productlistserver;