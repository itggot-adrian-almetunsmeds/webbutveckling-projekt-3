require_relative './carousel.rb'
require_relative './products.rb'

carousel()
product()

layout('site/layout.html.erb')

ignore(/misc/)
ignore(/.sass-cache/)
ignore(/data/)
ignore(/psd/)
ignore('readme.md')
ignore('.gitignore')
ignore('site/css/carousel.css.sass')
ignore('site/css/cart.css.sass')
ignore('site/css/footer.css.sass')
ignore('site/css/header.css.sass')
ignore('site/css/nav.css.sass')
ignore('site/css/index.css.sass')
ignore('site/css/items.css.sass')
ignore('site/css/product.css.sass')
ignore('site/css/variable.css.sass')
ignore('site/css/about.css.sass')
ignore('carousel.rb')
ignore('products.rb')