import sackOfPotatoes from '../pictures/sack-of-potatoes.jpg';


export function LoadHomePage() {
  document.getElementById("contents").innerHTML = `
          <span>
            <div class="titles">
            <h1>Welcome to Hot Potatoes!</h1>
            </div>
            <p>
              <strong>Serving joy, one spud at a time.</strong>
            </p>
            <p>At Hot Potatoes, we believe life’s better with carbs — specifically golden, crispy, cheesy, fluffy
              potatoes in every form you can dream of.</p>

            <p>Whether you're craving fries with flair, mash that’ll make you cry (tears of joy), or a baked beauty
              loaded with toppings — you've just found your new comfort food capital.</p>

            <p>Hungry? Of course you are. Grab a fork and let’s get starchy.</p>

            <p>👉 Check out our [Menu] to dive mouth-first into potato heaven.</p>
            <p>👉 Learn more [About Us] and our humble, root-vegetable-loving origins.</p>

            <span class="image-box">
            <img src="${sackOfPotatoes}">
            </span>
          </span>
`
}
