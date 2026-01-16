// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function Average(){
    let grade1 = document.getElementById("g1")
    let grade2 = document.getElementById("g2")
    let grade3 = document.getElementById("g3")
    let output1 = document.getElementById("outputaverage")
    let gradeaverage = (parseFloat(grade1.value) + parseFloat(grade2.value) + parseFloat(grade3.value))/3;
    
    output1.innerHTML = gradeaverage
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function Slope(){
    let x1 = document.getElementById("x1")
    let y1 = document.getElementById("y1")
    let x2 = document.getElementById("x2")
    let y2 = document.getElementById("y2")
    let slope = document.getElementById("slope")
    let sloperesult = ((parseFloat(y2.value) - (parseFloat(y1.value)))) / ((parseFloat(x2.value) - parseFloat(x1.value)));

    slope.innerHTML = sloperesult
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function BMI(){
    let height = document.getElementById("height") / 100
    let weight = document.getElementById("weight")
    let BMI = document.getElementById("BMI")
    let bmiresult = ((parseFloat(weight.value)) * 703) / ((parseFloat(height.value) * 12))

    BMI.innerHTML = bmiresult
}