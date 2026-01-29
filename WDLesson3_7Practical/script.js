/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function distance(){
      let x1 = document.getElementById("x1")
      let y1 = document.getElementById("y1")
      let x2 = document.getElementById("x2")
      let y2 = document.getElementById("y2")
      let output = document.getElementById("output")

      let sect1 = Math.pow(x2.value - x1.value, 2)
      let sect2 = Math.pow(y2.value - y1.value, 2)

      let d = Math.sqrt(sect1 + sect2)

      output.innerHTML = d
}

/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function compoundinterest(){
      let r = document.getElementById("r").value;
      let p = document.getElementById("p").value;
      let n = document.getElementById("n").value;
      let t = document.getElementById("t").value;
      let a = document.getElementById("A")

      let result =  p * Math.pow(1 + r/n, n*t);

 
      a.innerHTML = "Interest is " + result
}


