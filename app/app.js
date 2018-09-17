var allInfo = [];

function renderProducts(product) {
    var newProductCard = "<div class=\"card\">";
    newProductCard += "<div class=\"card__img\">";
    newProductCard += "<svg class=\"card__img--icon\">";
    newProductCard += "<use xlink:href=\"img/sprite.svg#icon-envelope\"></use>";
    newProductCard += "</svg>";
    newProductCard += "</div>";
    newProductCard += "<div class=\"card__information\">";
    newProductCard += "<h1 class=\"card__title\">" + product.title + "</h1>";
    newProductCard += "<p class=\"card__price\">" + product.price + "</p>";
    newProductCard += "<p class=\"card__description\">" + product.description + "</p>";


    // <div class="card__stars">
    //     <svg class="card__stars--icon">
    //     <use xlink:href="img/sprite.svg#icon-bolt"></use>
    //     </svg>
    //     <svg class="card__stars--icon">
    //     <use xlink:href="img/sprite.svg#icon-bolt"></use>
    //     </svg>
    //     <svg class="card__stars--icon">
    //     <use xlink:href="img/sprite.svg#icon-bolt"></use>
    //     </svg>
    //     <svg class="card__stars--icon">
    //     <use xlink:href="img/sprite.svg#icon-bolt"></use>
    //     </svg>
    //     <svg class="card__stars--icon">
    //     <use xlink:href="img/sprite.svg#icon-bolt"></use>
    //     </svg>
    //     </div>
    //     </div>
    //     </div>





    newProductCard += "<p>" + product.title + ' ' + product.price + "</p>";
    newProductCard += "<img src='" + product.image + "'/>";
    newProductCard += "<p class='bio'>" + product.description + "</p>";
    newProductCard += "</section>";

    $('.product-view').append(newProductCard);
}

function init() {
    $.getJSON("data/data.json", function (data) {
        allInfo = data.products;
        $.each(allInfo, function (idx, product) {
            renderProducts(product);
        });
    });

    initListeners();
}

function initListeners() {
    $('.submit-btn').click(function (e) {
        e.preventDefault();
        var title = $('.product-form #title').val();
        var price = $('.product-form #price').val();
        var image = $('.product-form #image').val();
        var description = $('.product-form #description').val();
        var stars = $('.product-form #stars').val();
        var id = allInfo.length;

        var productObj = {
            "id": id.toString(),
            "title": title,
            "price": price,
            "image": image,
            "description": description,
            "stars": stars
        };

        allInfo.push(productObj);
        renderProducts(productObj);
    });
}

$(document).ready(function () {
    console.log("init jquery");
    init();
    console.log(allInfo);
});