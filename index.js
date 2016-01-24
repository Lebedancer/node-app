const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const booksRouter = require('./backend/routes/bookRouter.js')


const port = 5000;
app.use(express.static('frontend'));
app.engine('.hbs', exphbs({
    defaultLayout: 'index',
    extname: '.hbs',
    layoutsDir: './backend/views',
}));

app.set('view engine', '.hbs');
app.set('views', './backend/views');

app.use('/books', booksRouter);

app.get('/', (req, res) => {
    res.render('index', { title: 'WAT' });
});


app.listen(port, err => console.log(`Start server on port ${port}`));

