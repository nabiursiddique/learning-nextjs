const productlist = async () => {
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products;
}

const Productlistserver = async () => {
    // Server side fetching
    const products = await productlist();
    console.log(products);
    return (
        <div>
            <h1>Product list from server</h1>
            {
                products.map((product, ind) => (
                    <div key={ind}>
                        <h3>Name: {product.title}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default Productlistserver;