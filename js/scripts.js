function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.sizePrice = function(size, toppingsArray) {
  var total = 0;
  if (size === "Small") {
    total += 6;
  } else if (size === "Medium") {
    total += 8;
  } else if (size === "Large") {
    total += 10;
  }

  if (toppingsArray.length < 1){
    total += 0;
    this.price = total;
  } else {
    for (var i = 0; i < toppingsArray.length; i++) {
      total += 1;
      this.price = total;
  }
}
}
Pizza.prototype.cost = function (size, toppings, price) {
  return "$" + this.price + " " + this.size + " pizza, with " + this.toppings + ".";
}


$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    var sizeNew = $('#pizza-size').val();
    var toppings = $('input:checkbox[name=toppings]:checked');
    var toppingsArray = [];
    for(var i=0; i< toppings.length; i++){
      toppingsArray.push($(toppings[i]).val());
    }



    var newPizza = new Pizza(sizeNew, toppingsArray, price);
    var price = newPizza.sizePrice(sizeNew, toppingsArray);
    var output = newPizza.cost(sizeNew, toppingsArray, price);
    $('#pizza-order').show();
    $('.order').text(output);
  });
  $('#final-order').click(function(event) {
    event.preventDefault();

    $('#container').hide();
    $('#thank-you').show();
  })
});
