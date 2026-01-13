/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/


function recArea(){
  let l = document.getElementById("lr");
  let h = document.getElementById("hr");
  let output = document.getElementById("output")

  let area = l.value * h.value

  output.innerHTML = area;


}

function recPerimeter(){
  let l = document.getElementById("lr");
  let h = document.getElementById("hr");
  let output = document.getElementById("output")

  let perim = 2 * (parseFloat(l.value) + parseFloat(h.value))


  output.innerHTML = perim;
  
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/


function cirArea(){
      let pi = 3.1415926;
      let radius = document.getElementById("radius")
      let output = document.getElementById("output")
      let area = pi * (parseFloat(radius.value) * parseFloat(radius.value))
      output.innerHTML = area
}

function cirPerimeter(){
      let pi = 3.1415926;
      let radius = document.getElementById("radius")
      let output = document.getElementById("output")
      let circum = 2 * pi * radius.value
      output.innerHTML = circum
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}