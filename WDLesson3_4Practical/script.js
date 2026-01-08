function createStory(){
  //Following are variables for each of the <span>s that located throughout the story
  boy1span1 = document.getElementById("boyspan1");
  boy1span2 = document.getElementById("boyspan2");
  boy1span3 = document.getElementById("boyspan3");
  boy1span4 = document.getElementById("boyspan4");
  veg1 = document.getElementById("veg1");
  veg2 = document.getElementById("veg2");
  girlspan = document.getElementById("girlspan");

  /* Task 3: Create variables and retrieve the information from the text inputs for the following, 
      1) A boy's name
      2) A vegetable
      3) A girl's name
      4) Another vegetable

  Choose your variable names wisely.  This is a lot of practice of creating variables and using document.getElementById(..)
  */
function createStory(){
  let boyname = document.getElementById("boyname");
  let vegetable1 = document.getElementById("vegetable1");
  let girlname = document.getElementById("girlname");
  let vegetable2 = document.getElementById("vegetable2");

}
  /* Task 4: Set the innerHTML for each of the spans on lines 3 to 9 with the appropriate values from the variables you create in Task 3. */
boy1span1.innerHTML = boyname.value;
boy1span2.innerHTML = boyname.value;
boy1span3.innerHTML = boyname.value;
boy1span4.innerHTML = boyname.value;

veg1.innerHTML = vegetable1.value;
veg2.innerHTML = vegetable2.value;

girlspan.innerHTML = girlname.value;
  /* Task 5: Set the display property of the element with an id of "story" to 'block' */

document.getElementById("story").style.display = "block";

}