// function getProducts () {

  addProducts = function() {

    Promise.all([
      $.getJSON("categories.json"),
      $.getJSON("types.json"),
      $.getJSON("products.json")])
      .then(values => {
      var categories = values[0];
      var types = values[1];
      var productArray = values[2]
      var products = productArray.products

      var selectorNumber = parseInt($("#mainSelector").val());
      var stopNumber = selectorNumber + 2;

      for(var i = selectorNumber; i <= stopNumber; i++){
        console.log(i);
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
