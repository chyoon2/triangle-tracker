// //Businasty logic
let triangle;
if (parseInt($("input#side-a").val()) + parseInt($("input#side-b").val()) === parseInt($("input#side-c").val()) || parseInt($("input#side-b").val()) + parseInt($("input#side-c").val()) === parseInt($("input#side-a").val()) || praseInt($("input#side-a").val()) + parseInt($("input#side-c").val())) {
  triangle = "Not a triangle"
}
else {
  if (parseInt($("input#side-a").val()) === parseInt($("input#side-b").val()) && parseInt($("input#side-b").val()) === parseInt($("input#side-c").val())) {
    triangle = "Equilateral"
  }
  else if (parseInt($("input#side-a").val()) === parseInt($("input#side-b").val()) || parseInt($("input#side-b").val()) === parseInt($("input#side-c").val())) {
    triangle = "Isosceles"
  }
  else if (parseInt($("input#side-a").val()) != parseInt($("input#side-b").val()) && parseInt($("input#side-a").val()) != parseInt($("input#side-c").val()) && parseInt($("input#side-b").val()) != parseInt($("input#side-c").val())) {
    triangle = "Scalene"
  }
}

//Interface logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();

    if (triangle==="Scalene"){
      (".output").show();
      ("#scalene").show();
    }
    else if (triangle==="Isosceles"){
      (".output").show();
      ("#isosceles").show();
    }
    else if (triangle==="equilateral"){
      (".output").show();
      ("#scalene").show();
    }
    else {
      (".output").show();
      ("#not-triangle").show;
    }

  });
});