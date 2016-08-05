  addProducts = function() {

    Promise.all([
      $.getJSON("categories.json"),
      $.getJSON("types.json"),
      $.getJSON("products.json")])
      .then(values => {
      var categoriesArray = values[0];
      var typesArray = values[1];
      var productArray = values[2];

      var categories = categoriesArray.categories;
      var types = typesArray.types;
      var products = productArray.products;

      var productsNumber = parseInt($("#mainSelector").val());
      var typeNumber = products[productsNumber].type;
      var categoryNumber = types[typeNumber].category

      $("#productContainer").append(`
        <div class="categoryAndType">
        Here are all our ${types[typeNumber].name} products, these are in the ${categories[categoryNumber].name} category <br>
        ${types[typeNumber].name} : ${types[typeNumber].description}
        </div
        `)

      var stopNumber = productsNumber + 2;

      for(var i = productsNumber; i <= stopNumber; i++){
        $("#productContainer").append(`
          <div class="addedProduct col-md-3">

           ${products[i].name}  <br> ${products[i].description}
          </div>
        `)
      }
  })
}

$("#addProducts").click(function() {
  addProducts();
  console.log("this runs")
})

$("#clearProducts").click(function() {
  $("#productContainer").html(" ")
})
