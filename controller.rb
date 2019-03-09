require_relative './carousel.rb'

carousel()

layout('site/layout.html.erb')

ignore(/misc/)
ignore(/.sass-cache/)
ignore(/data/)
ignore('readme.md')
ignore('.gitignore')
ignore('site/css/carousel.css.sass')
ignore('site/css/cart.css.sass')
ignore('site/css/footer.css.sass')
ignore('site/css/header.css.sass')
ignore('site/css/nav.css.sass')
ignore('carousel.rb')