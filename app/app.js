var allInfo = [];

function modal() {
    $('#addProduct').click(function (event) {
        $('.modal').css({
            'transform': 'translateX(0)'
        });
    });
    $('.submit-btn').click(function (event) {
        $('.modal').css({
            'transform': 'translateX(100%)'
        });
    });
}

function renderProducts(product) {
    var newProductCard = "<div class=\"card\">";
    newProductCard += "<div class=\"card__img\">";
    newProductCard += "<svg class=\"card__img--icon\">";
    newProductCard += "<use xlink:href=\"img/sprite.svg#icon-" + product.image + "\"></use>";
    newProductCard += "</svg>";
    newProductCard += "</div>";
    newProductCard += "<div class=\"card__information\">";
    newProductCard += "<h1 class=\"card__title\">" + product.title + "</h1>";
    newProductCard += "<p class=\"card__price\">$" + product.price + "</p>";
    newProductCard += "<p class=\"card__description\">" + product.description + "</p>";
    newProductCard += "<div class=\"card__stars\">";
    // set # of stars
    for (i = 0; i < product.stars; i++) {
        newProductCard += "<svg class=\"card__stars--icon\">";
        newProductCard += "<use xlink:href=\"img/sprite.svg#icon-bolt\"></use>";
        newProductCard += "</svg>";
    }
    newProductCard += "</div>";
    newProductCard += "</div>";
    newProductCard += "</div>";

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
    alert("Click 'Add Product' to add a new item, Todd.");
}

function initListeners() {
    $('.submit-btn').click(function (e) {
        e.preventDefault();
        var title = $('.modal__form #title').val();
        var price = $('.modal__form #price').val();
        var image = $('.modal__form #image').val();
        var description = $('.modal__form #description').val();
        var stars = $('.modal__form #stars').val();
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
    modal();
});