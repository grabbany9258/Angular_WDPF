let hat = {
    name: "Hat",
    price: 100
    };
    let boots = {
    name: "Boots",
    price: 100
    }
    function printDetails(product : { name: string, price: number}) {
    console.log(`Name: ${product.name}, Price: ${product.price}`);
    }
    printDetails(hat);
    printDetails(boots);