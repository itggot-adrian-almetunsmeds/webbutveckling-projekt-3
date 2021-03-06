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

function init() {
    renderButtons(1);
    renderButtons(2);
    renderButtons(3);
    showSlides(0, 0);
    showSlides(0, 1);
    showSlides(0, 2);
    autoChangeSlide();
}

function navToggle() {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.navback').classList.toggle('active');
    document.querySelector('.wrapper').classList.toggle('blur');
    document.querySelector('footer').classList.toggle('blur');
}

function renderCart(name, quantity, price) {
    let rootList = document.querySelector('.cart_content');
    let item = document.createElement('div');
    item.classList.add('cartItem')
    let itemName = document.createElement('p');
    itemName.innerHTML = name;
    let itemPrice = document.createElement('p');
    itemPrice.innerHTML = price + " SEK";
    itemPrice.classList.add('price')

    // Quantity
    quant = document.createElement('div');
    quant.classList.add('quant');
    let itemQuantity = document.createElement('div');
    itemQuantity.classList.add('quantity')
    let buttonAdd = document.createElement('div');
    buttonAdd.innerHTML = '+';
    buttonAdd.classList.add('addButton');
    buttonAdd.addEventListener('click', function () {
        changeQ(name, "+")
    })
    let itemQ = document.createElement('p');
    itemQ.innerHTML = quantity;
    let buttonRemove = document.createElement('div');
    buttonRemove.innerHTML = '-';
    buttonRemove.classList.add('removeButton');
    buttonRemove.addEventListener('click', function () {
        changeQ(name, "-")
    })
    itemQuantity.append(buttonRemove);
    itemQuantity.append(itemQ);
    itemQuantity.append(buttonAdd);
    quant.append(itemQuantity)

    item.append(itemName);
    item.append(quant);
    item.append(itemPrice);
    rootList.append(item);
    sum()
}

function alreadyInCart(name) {
    cart = JSON.parse(localStorage.getItem("cart"));
    for (i = 0; i < cart.length; i++) {
        console.log("some")
        if (cart[i].includes(name)) {
            document.querySelector(".addcart").innerHTML = "Already in cart"
            document.querySelector(".addcart").onclick = function() {  };
        }
    }
}

function changeQ(name, change) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let price = Number(localStorage.getItem('sum'));
    for (i = 0; i < cart.length; i++) {
        if (cart[i].includes(name)) {
            if (change == "+") {
                cart[i][1] = Number(cart[i][1]) + 1
                price += Number(cart[i][2])
            } else {
                cart[i][1] -= 1
                price -= Number(cart[i][2])
                if (cart[i][1] == 0) {
                    cart.splice(i, 1)
                }
            }
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('sum', price);
    let rootList = document.querySelector(".cart_content");
    while (rootList.firstChild) {
        rootList.removeChild(rootList.firstChild);
    }
    if (cart.length > 0) {
        document.querySelector(".checkout").style.display = 'flex'
        document.querySelector(".sum > p").style.display = 'block'
        document.querySelector(".namequantprice").style.display = 'grid'


        for (i = 0; i < cart.length; i++) {
            renderCart(cart[i][0], cart[i][1], cart[i][2])
        }
    } else {
        let rootList = document.querySelector('.cart_content');
        let nothing = document.createElement('h2');
        nothing.classList.add('nothing')
        nothing.innerHTML = "You have not added any products to the cart yet.";
        rootList.append(nothing)
        document.querySelector(".checkout").style.display = 'none'
        document.querySelector(".sum > p").style.display = 'none'
        document.querySelector(".namequantprice").style.display = 'none'

    }
}

function sum() {
    let sum = document.querySelector('.sum > p');
    sum.innerHTML = '<b>Total sum:  </b>' + localStorage.getItem('sum') + ' SEK';
}

function addItemToCart(array) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let price = Number(localStorage.getItem('sum'));
    console.log(price)
    if (cart != null) {
        cart.push(array)
        price += Number(array[2])
    } else {
        cart = [array]
        price = Number(array[2])
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('sum', price);
    console.log('Item added to cart.')
    document.location.reload(true)
}