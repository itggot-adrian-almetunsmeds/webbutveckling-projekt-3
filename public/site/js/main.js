var slideIndex = 0;

function showSlides(index) {
    let slides = document.querySelectorAll('.slide');
    console.log(index)
    console.log(slides)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slides[index].style.display = 'block'





    // var dots = document.getElementsByClassName("dot");
    // if (index > slides.length) {
    //     slideIndex = 1
    // }
    // if (index < 1) {
    //     slideIndex = slides.length
    // }
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //     // dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex-1].className += " active";

}

function changeSlide(input) {
    if (input == 1) {
        slideIndex += 1
    } else if (input == 0) {
        slideIndex -= 1
    }
    let slides = document.querySelectorAll('.slide');
    if (slideIndex > (slides.length-1)){
        slideIndex = 0
    } else if (slideIndex < 0){
        slideIndex = slides.length-1
    }


    showSlides(slideIndex)
}

showSlides(0);







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