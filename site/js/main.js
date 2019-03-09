// Carousel functions
var slideIndex = [0, 0, 0];

function showSlides(index, num) {
    num = parseInt(num + 1, 10);
    let carousel = '.carousel' + num + ' > .slide';
    let slides = document.querySelectorAll(carousel);
    carousel = '.carousel' + num + ' > .circles > .slide_circle';
    let buttons = document.querySelectorAll(carousel);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        buttons[i].style.backgroundColor = 'rgba(100,100,100,1)';
    }
    slides[index].style.display = 'grid';
    buttons[index].style.backgroundColor = 'black';
}

function changeSlide(input, num) {
    if (input == 1) {
        slideIndex[num] += 1;
    } else if (input == (-1)) {
        slideIndex[num] -= 1;
    }
    num = parseInt(num, 10);
    tempNum = num + 1;
    let carousel = '.carousel' + tempNum + ' > .slide';
    let slides = document.querySelectorAll(carousel);
    if (slideIndex[num] > (slides.length - 1)) {
        slideIndex[num] = 0;
    } else if (slideIndex[num] < 0) {
        slideIndex[num] = slides.length - 1;
    }

    showSlides(slideIndex[num], num);
}

function renderButtons(num) {
    carousel = '.carousel' + num + ' > .slide';
    let slides = document.querySelectorAll(carousel);
    carousel = '.carousel' + num + ' > .circles';
    let root = document.querySelector(carousel);
    let buttons = [];
    for (i = 0; i < slides.length; i++) {
        let button = document.createElement('div');
        button.classList.add('slide_circle');
        buttons.push(button);
    }
    for (i = 0; i < buttons.length; i++) {
        root.append(buttons[i]);
    }
}

function autoChangeSlide() {
    let p = document.getElementsByClassName('carousel');
    for (l = 0; l < p.length; l++) {
        changeSlide('1', l.toString());
    }
    setTimeout(autoChangeSlide, 5000);
}
renderButtons(1);
renderButtons(2);
renderButtons(3);
showSlides(0, 0);
showSlides(0, 1);
showSlides(0, 2);
autoChangeSlide();


// console.log(screen.height)
// console.log(screen.width)





// shoppingCartAdd('hey', 'potatis', '124kr', '10', '199')
// shoppingCart()

function shoppingCartAdd(title, desc, price, saldo, quantity) {
    let temp = [title, desc, price, saldo, quantity];
    // let cart = sessionStorage.getItem('cart');
    // cartStorage = JSON.parse(cart)
    // console.log(cartStorage)
    console.log(sessionStorage.getItem('cart'))

    if (cartStorage == null) {
        var cart = []
    }
    cart.push(temp)
}

function shoppingCart(event) {
    let base = document.querySelector('.cart_content');
    let rootChild = document.createElement('div')
    rootChild.classList.add('product_group')
    let product = document.createElement('h4');
    product.classList.add('cart_product');
    let price = document.createElement('p');
    price.classList.add('cart_price');
    let description = document.createElement('p');
    description.classList.add('cart_description');
    base.append(rootChild);
    base.appendChild(product);
    base.appendChild(description);
    base.appendChild(price);
}