Promise.all([
  $.getJSON("categories.json"),
  $.getJSON("types.json"),
  $.getJSON("products.json")])
  .then(values => {

  var categoriesArray = values[0];
  var typesArray = values[1];
  var productArray = values[2];

// Making the data more managable, getting all data into an array
  var categories = categoriesArray.categories;
  var types = typesArray.types;
  var products = productArray.products;

  for(var i = 0; i < types.length; i++){
    $("#mainSelector").append(
    `<option value="${i * 3}"> ${types[i].name} </option>`
    )};
  })


