const express = require('express'),
      app = express(),
      mustacheExpress = require('mustache-express'),
      port = process.env.PORT || 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Renders the landing page
app.get('/', (req, res) => {
  res.render('index');
})

// Links to the angryGroup controller
const angryGroup = require('./controllers/angry-group');
app.use('/angry-birds', angryGroup);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
