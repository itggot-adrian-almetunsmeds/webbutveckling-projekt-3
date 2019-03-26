require 'yaml'

def product()
    data = YAML.load_file('site/data/products.yaml')
    out = ""
    ad = ""
    i = 0
    while i < 2 
        if data[0]['devices'][i]['deal'] != nil
            thing = "'#{data[0]['devices'][i]['name']}', 1, '#{data[0]['devices'][i]['price'].gsub(/\s.+/, '')}'"
    
            price = '<p> ' + data[0]['devices'][i]['price'] + '</p> <p> Save ' + data[0]['devices'][i]['deal'] + ' </p>
            <div class="addcart" onclick="addItemToCart([' + thing + '])"> Add to cart </div>'
        else
            thing = "'#{data[0]['devices'][i]['name']}', 1, '#{data[0]['devices'][i]['price'].gsub(/\s.+/, '')}'"
            
            price = '<p> ' + data[0]['devices'][i]['price'] + '</p>
            <div class="addcart" onclick="addItemToCart([' + thing + '])"> Add to cart </div>'
        end
        out='<div class="product_page"> <div class="ad">' + ad + '</div><h2>' + data[0]['devices'][i]['name'] + '</h2>
        <img src=" img/' + data[0]['devices'][i]['img'] + '" alt="' + data[0]['devices'][i]['alt'] +'">
        <div class="desc">' + data[0]['devices'][i]['longdesc'] + '</div>
        <div class="price">
        ' + price + '
        </div>
        <h3>Techical Specifications</h3>
        <table>
        <tr>
        <td>Platform</td>
        <td>' + data[0]['devices'][i]['technical'][0]['platforms'] + '</td>
        </tr>
        <tr>
        <td>Power Source</td>
        <td>' + data[0]['devices'][i]['technical'][0]['power'] +'</td>
        </tr>
        <tr>
        <td>Cable connections</td>
        <td>' + data[0]['devices'][i]['technical'][0]['connections'] +' </td>
        </tr>
        <tr>
        <td>Wireless connectivity</td>
        <td> ' + data[0]['devices'][i]['technical'][0]['wireless_connectivity'] +'</td>
        </tr>
        </table>
        </div>'
        name = data[0]['devices'][i]['name'].gsub(/\s/,'-') + '.html.erb'
        i += 1
        File.write('site/' + name, out)
        puts name + ' created'
    end
end