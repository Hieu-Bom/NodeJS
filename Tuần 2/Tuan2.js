var http = require('https');

var url = ['https://www.google.com/',
            'https://translate.google.com/',
            'https://www.youtube.com/',
            'https://www.google.com/',
            'https://translate.google.com/',
            'https://www.youtube.com/']


function laytt(a, x) {
    http.get(a, function(res) {
        var content = '', kq = '', a, b;
        res.on('data', function(chunk) {
            content = content + chunk;
        });
        res.on('end', function() {
            a=content.indexOf('<title>')+7;
            b=content.indexOf('</title>');
            kq = content.slice(a,b);
            console.log(x,'. ', kq); 
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });

    return new Promise(res => {
        setTimeout(() => {
          res();
        }, 200);
      });
 }

async function main()
{
    for(var i = 0; i < url.length; i++)
    { 
        await laytt(url[i], i+1);
    }
}
main();