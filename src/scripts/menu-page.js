import cheesyMash from '../pictures/Cheesy-Mashed-Potatoes.jpg';
import friesOfTheRound from '../pictures/fries-of-the-round-table.png';
import fullyLoadPotato from '../pictures/Loaded-Baked-Potato.png';
import taterTotCasserole from '../pictures/tater-tots-casserole.png';
import spicyPotatoePuffs from '../pictures/spicy-potato-puff.png';

export function LoadMenuPage() {
  document.getElementById("contents").innerHTML = `
    <span>
      <div class="titles">
      <h1>“The Starch Side of Heaven”</h1>
      </div>

      <h2>Hot Potatoes Menu</h2>
      <p><strong>From crispy to creamy, simple to over-the-top</p> 
      <p>— here’s our ultimate potato lineup:</strong></p>

      
      <div class="titles">
      <h2>🧀 Classic Cheesy Mash</h2>
      </div>


      <p>Fluffy mashed potatoes with sharp cheddar, garlic butter, and a little soul.</p>

      <span class="image-box">
      <img src="${cheesyMash}">
      </span>

      <br><br>

      <div class="titles">
      <h2>🍟 Fries of the Round Table</h2>
      </div>

      <p>Perfectly crispy hand-cut fries — served with a flight of dipping sauces: garlic aioli, spicy ketchup, and mystery sauce #7.</p>

      <span class="image-box">
      <img src="${friesOfTheRound}">
      </span>

      <br><br>

      <div class="titles">
      <h2>🥔 Fully Loaded Baked Beast</h2>
      </div>

      <p>A baked potato dressed to the nines: bacon, sour cream, green onion, cheese, butter, and a dash of paprika.</p>

      <span class="image-box">
      <img src="${fullyLoadPotato}">
      </span>

      <br><br>

      <div class="titles">
      <h2>🥘 Tater Tot Casserole</h2>
      </div>

      <p>A golden-brown skillet packed with tots, beef, and creamy sauce under a bubbly cheddar crust.</p>

      <span class="image-box">
      <img src="${taterTotCasserole}">
      </span>

      <br><br>

      <div class="titles">
      <h2>🌶️ Spicy Potato Puffs</h2>
      </div>

      <p>Deep-fried and seasoned with chili, lime, and secret spices. Comes with a warning label (and ranch).</p>

      <span class="image-box">
      <img src="${spicyPotatoePuffs}">
      </span>
      <br><br>
      <span>
      <h5>🥄 Add a scoop of garlic mash for $2.</h5>
      <h5>🧂 Make anything "extra crispy" for free.</h5>
      <h5>❤️ Potato lovers get free hugs. Always.</h5>
      </span>
    </span>

`
}
