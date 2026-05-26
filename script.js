const button = document.querySelector("button");
const heading = document.querySelector("h1");
const para = document.querySelector("p");

// 1. Take the button and wait for a prompt using the addEventListener
button.addEventListener("click", function () {
    // 2. Waiting on prompt is to be triggered by the click of the button
    // 3. When promt is triggered, name asked
  const name = prompt("What is your name?");
  // 4. When name is entered, heading text content (changes what user sees) changes to "Hi, name"
  heading.textContent = `Hi, ${name}`;
  button.textContent = "Clicked!";
  para.textContent = "Today's mood is HAPPY!";
  // console.log is used to see output in console via inspect
  console.log("The button has been clicked");
  console.log(`The user's name is ${name}`);
})

// Change the button text after it is clicked
// Add 2nd para that updates with today's mood
// Style button in CSS
// Add one console.log message of your choice