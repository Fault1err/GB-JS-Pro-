const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product, img = 'img/1.jpg') => {
    return `<div class="product-item">
    <img src ="${img}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    document.querySelector('.products_flex').innerHTML = (list.map(product => renderProduct(product))).join('');
};



// const productsList = list.map(item => renderProduct(item.title, item.price));
// console.log(productsList);
// document.querySelector('.products').innerHTML = productsList;

renderPage(products);