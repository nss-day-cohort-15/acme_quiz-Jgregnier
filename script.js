addProducts = function() {

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

// Using lower teir value to get higher teir value with the relative data
    var productsNumber = parseInt($("#mainSelector").val());
    var typeNumber = products[productsNumber].type;
    var categoryNumber = types[typeNumber].category

    var output = `
      <div class = "row">
        <div class= "col-md-1"></div>
        <div class= "categoryAndType col-md-8">
        Here are all our ${types[typeNumber].name} products, these are in the ${categories[categoryNumber].name} category <br>
        ${types[typeNumber].name} : ${types[typeNumber].description}
        </div>
      </div>
      <div class="row">
       <div class="col-md-1"> </div>`;

    var stopNumber = productsNumber + 2;

    for(var i = productsNumber; i <= stopNumber; i++){
      output += `
        <div class="addedProduct col-md-3">

         ${products[i].name}  <br> ${products[i].description}
        </div>
      `;
      }
    output += `</div>`

    $("#productContainer").append(output);
  })
}

$("#addProducts").click(function() {
  addProducts();
})

$("#clearProducts").click(function() {
  $("#productContainer").html(" ")
})
