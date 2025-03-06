const Handlebars = require('handlebars')

Handlebars.registerHelper('eq', function (a, b) {
  return a === b
})

Handlebars.registerHelper("formatDate", function (date) {
  const [year, month] = date.split("-");
  return `${month.padStart(2, "0")}-${year}`;
});
