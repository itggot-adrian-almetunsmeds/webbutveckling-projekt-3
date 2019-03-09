require 'yaml'

def product()
data = YAML.load_file('site/data/products.yaml')
out = ""
ad = ""
i = 0
while i < 2
    out='<div class="ad">' + ad + '</div><h2>' + data[0]['smartdevices'][i]['name'] + '</h2><img src=" img/ ' +
    data[0]['smartdevices'][i]['img'] + '" alt="' + data[0]['smartdevices'][i]['alt'] +'">
    <div class="desc">' + data[0]['smartdevices'][i]['longdesc'] + '</div>
    <table>
        <tr>
            <td>Platform</td>
            <td>' + data[0]['smartdevices'][i]['technical'][0]['platforms'] + '</td>
        </tr>
        <tr>
            <td>Power Source</td>
            <td>' + data[0]['smartdevices'][i]['technical'][0]['power'] +'</td>
        </tr>
        <tr>
            <td>Cable connections</td>
            <td>' + data[0]['smartdevices'][i]['technical'][0]['connections'] +' </td>
        </tr>
        <tr>
            <td>Wireless connectivity</td>
            <td> ' + data[0]['smartdevices'][i]['technical'][0]['wireless_connectivity'] +'</td>
        </tr>
    </table>'
    name = data[0]['smartdevices'][i]['name'].gsub(/\s/,'-') + '.html.erb'
    i += 1
    File.write('site/' + name, out)
    puts name + ' created'
    end
end