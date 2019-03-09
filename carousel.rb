require 'yaml'
def carousel()
    data =  YAML.load_file('site/data/ad.yaml')
    i = 0
    id = 0
    output = []
    data['mainad'].each do |variable|
        img = variable['img']
        id += 1
        input = ' variable = document.getElementById("img' + id.to_s + '"); variable.style.backgroundImage = "url(img/' + img + ')"; variable.alt = "' + variable['alt'] +'";'
        i += 1
        output << input
    end
    i = 0
    data['popularad'].each do |variable|
        img = variable['img']
        id += 1
        input = ' variable = document.getElementById("img' + id.to_s + '"); variable.style.backgroundImage = "url(img/' + img + ')"; variable.alt = "' + variable['alt'] +'";'
        i += 1
        output << input
    end
    
    
    
    
    
    temp = ""
    output.each do |variable|
        temp += variable
    end
    
    File.write('site/js/ad.js', temp)
    print "ad.js created \n"
end