// //Businasty logic
let triangle;
let sideA;
let sideB;
let sideC;

//Interface logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    sideA = parseInt($("input#side-a").val());
    sideB = parseInt($("input#side-b").val());
    sideC = parseInt($("input#side-c").val());

if(sideA, sideB, sideC){
  if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
    triangle = "Not a triangle";
  }
  else {
    if ((sideA === sideB) && (sideB === sideC) && (sideA === sideC)) {
      triangle = "Equilateral";
    }
    else if (sideA === sideB || sideB === sideC || sideA === sideC) {
      triangle = "Isosceles";
    }
    else if (sideA != sideB && sideB != sideC && sideA != sideC) {
      triangle = "Scalene";
    }
  }
}
else{
  alert('Please enter side lengths');
}
  
  if (triangle === "Scalene"){
    $("#output").show();
    $("#scalene").show();
  }
  else if (triangle === "Isosceles"){
    $("#output").show();
    $("#isosceles").show();
  }
  else if (triangle === "Equilateral"){
    $("#output").show();
    $("#equilateral").show();
  }
  else if (triangle === "Not a triangle"){ 
    $("#output").show();
    $("#not-triangle").show();
  }
});
});
