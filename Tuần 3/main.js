const express = require('express');
const main = express();
const port = 3000

main.use(express.static('public'));
main.use('/css', express.static('public/css'));
main.use('/js', express.static('public/js'));
main.use('/img', express.static('public/img'));

main.set('views', './view');
main.set('view engine', 'ejs');

main.get('', (req, res) => {
    res.render('index', )
});

main.get('/hienthi', (req, res) => {
    res.render('hienthi', )
});

main.get('/time', (req, res) => {
    res.render('time', )
});

main.get('/time/day', (req, res) => {
    res.render('day', )
});

main.listen(port, () => console.log(`Mo cong ${port}`));