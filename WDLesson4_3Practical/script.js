/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

function bmi(){
       let weight = parseFloat(document.getElementById("weight").value);
       let height = parseFloat(document.getElementById("height").value);
       let filename = ""
       let result = ""

       let output = document.getElementById("output")

       let bmi = 703 * (weight / height ** 2);

       if(bmi < 18.5){
              filename = "underweight.png"
              result = "underweight"
       }else if(bmi >= 18.4 && bmi <= 24.9){
              filename = "healthyweight.png"
              result = "at a healthy weight"
       }else if(bmi >= 24.9 && bmi <= 29.9){
              filename = "overweight.png"
              result = "overweight"
       }else if(bmi >= 30.0){
              filename = "obeseweight.png"
              result = "obese"
       }

       output.innerHTML = `Your bmi is ${bmi}. You're ${result}. <img src="${filename}">`
}
