const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 30 },
    { id: 3, title: 'Keyboard', price: 55 },
    { id: 4, title: 'Gamepad', price: 65 },
    { id: 5, title: 'Chair', price: 165 },
    { id: 6, title: 'Table', price: 200 },
    { id: 7, title: 'Sound system', price: 100 },
    { id: 8, title: 'Motherboard', price: 120 },
    { id: 9, title: 'RAM', price: 80 },
    { id: 10, title: 'HDD', price: 100 }
];



const renderProduct = (title, price) => {
    return `<div class="product-item col-sm-12 col-md-3 col-lg-2">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    let productsList = list.map(item => renderProduct(item.title, item.price));
    productsList = productsList.join(' ');
    document.querySelector('.products').innerHTML = productsList;

};


renderPage(products);