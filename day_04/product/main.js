const products = [
    {
        id: 1,
        name: 'T-Shirt',
        price: 100000,
        brand: 'Adidas',
        thumbnail: '',
        rating: 1.5
    },
    {
        id: 2,
        name: 'Blazer',
        price: 200000,
        brand: 'Nike',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 2.5
    },
    {
        id: 3,
        name: 'Polo-Shirt',
        price: 300000,
        brand: 'LV',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 3.5
    },
    {
        id: 4,
        name: 'Coat',
        price: 400000,
        brand: 'Gucci',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 4.5
    },
    {
        id: 5,
        name: 'Raincoat',
        price: 500000,
        brand: 'NY',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 5.5
    },
    {
        id: 6,
        name: 'Vest',
        price: 600000,
        brand: 'DNDK',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 6.5
    }
];

const convertNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const productListEl = document.querySelector(".product-list");
const renderProductList = (products) => {
    let html = '';
    products.forEach(product => {
        html += `
        <div class="col-md-3">
            <div class="course-item shadow-sm rounded mb-4">
                <div class="course-item-image">
                    <img
                    src="${product.thumbnail}"
                    alt="${product.name}"
                    />
                </div>
                <div class="course-item-info p-3">
                    <h2 class="fs-5 mb-4 text-dark">
                    ${product.name}
                    </h2>
                    <div
                    class="d-flex justify-content-between align-items-center fw-light text-black-50"
                    >
                    <p class="type">${product.brand}</p>
                    <p class="rating">
                        <span>${product.rating}</span>
                        <span class="text-warning"
                        ><i class="fa-solid fa-star"></i
                        ></span>
                    </p>
                    </div>
                    <p class="price text-danger fs-5">${convertNumberWithCommas(product.price)}</p>
                </div>
                </div>
            </div>
        </div>`
    });
    productListEl.innerHTML = html;
};
renderProductList(products);
