//Số cân KT NT n:
var n=7;

var fs = require("fs");
fs.open('a.out', 'w', function(err) {
    if (err) {
        return console.error(err);
    }   
 });

function KtraNT(x)
{
    var a = 4;
    var kq = true;
    if (x <= 1) return false;
    if (x >= 4)
    {
        if ((x % 2) == 0) return false;
        if ((x % 3) == 0) return false;
        while (a <= Math.round(Math.sqrt(x)))
        {
            if ((x % a) == 0)
            { kq = false;  break;}
            a =a+1;
        }
    }
    return kq;
}

function LaSNT() {
    fs.readdir("./",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            fs.appendFile('a.out', file + "\n",  function(err) {
                if (err) {
                    return console.error(err);
                }
            });
            console.log( file );
        });
    });
}

function KLaSNT() {
    fs.readFile('b.out', function (err, data) {
        if (err) {
           return console.error(err);
        }
        console.log("D/s SNT nho hon 1000: \n" + data.toString());
     });
}

if (KtraNT(n)==true)
        LaSNT(); 
    else 
        KLaSNT();
