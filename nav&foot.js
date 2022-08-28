// This page will consist the javascript that will export the navbar and to all the page of the website.
function navbar() {
	return `<div>
    <div id="top1">
        <div>
            <img class="navImg" src="https://www.myglamm.com/images/gift.svg" alt="" />
            <p>FLAT 199 Store</p>
            <p>SHOP NOW</p>
        </div>
        <div>
            <img class="navImg" src="https://www.myglamm.com/images/shop.svg" alt="" />
            <p>MyGlamm Store</p>
        </div>
    </div>
</div>
<div>
    <div>
        <img id="top2"
            src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
            alt=""
        />
        <div>
            <form action="">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    placeholder="Find Lipstick, Eyeliner etc"
                    id="search"
                />
            </form>
        </div>
    </div>
    <div>
        <div>
            <span id="bag" class="material-symbols-rounded"> shopping_bag </span>
        </div>
        <div id="userProfile">
            <div>
                <span class="material-symbols-rounded" id="open_popup">
                    person_filled
                </span>
            </div>
            <div id="userop" class="userOptions">
                <p><a href="./profile.html">My Profile</a></p>
                <p><a href="./myOrder.html">My Orders</a></p>
                <p><a href="./myDashboard.html">My Dashboard</a></p>
                <p><a href="./myGlamm.html">MyGlammXO Party</a></p>
                <button id="log_out">Logout</button>
            </div>
        </div>
    </div>
</div>
<div>
    <div class="dropdown">
        <p><a href="./nav&foot.html"> HOME </a></p>
    </div>
    <div class="dropdown">
        <p>MAKEUP</p>
        <div class="options">
            <div>
                <div class="nav_1_contents">
                    <h5 class="nav_1_heading">LIPS</h5>
                    <p>Lipstick</p>
                    <p>Liquid Lipstick</p>
                    <p>Hi-Shine Lipstick</p>
                    <p>Matte Lipstick</p>
                    <p>Lip Gloss</p>
                    <p>Lip Liner</p>
                    <p>Lip Balm</p>
                    <p>Lip Glitter</p>
                    <p>Lip Stain</p>
                    <p>Lipstick Set</p>
                    <p>Lip Kit</p>
                    <p>Find Your Lipstick</p>
                </div>
                <div class="nav_1_contents">
                    <h5 class="nav_1_heading">FACE</h5>
                    <p>Fixing Powder</p>
                    <p>Primer</p>
                    <p>Concealer</p>
                    <p>Foundation</p>
                    <p>Compact Powder</p>
                    <p>Setting Powder</p>
                    <p>Banana Powder</p>
                    <p>Sindoor</p>
                    <p>Highlighter</p>
                    <p>Blush</p>
                    <p>Bronzer</p>
                    <p>Cheek Stain</p>
                </div>
                <div class="nav_1_contents">
                    <h5 class="nav_1_heading">EYES</h5>
                    <p>Eye Shadow</p>
                    <p>Eyeliner</p>
                    <p>Eyebrows</p>
                    <p>Glitter</p>
                    <p>Mascara</p>
                    <p>Kajal</p>
                    <p>Eye Combos</p>
                </div>
                <div>
                    <div class="nav_1_contents">
                        <h5 class="nav_1_heading">NAILS</h5>
                        <p>Nail Lacquer</p>
                        <p>Nail Polish</p>
                        <p>Matte Nail Polish</p>
                    </div>
                    <div class="nav_1_contents">
                        <h5 class="nav_1_heading">KITS AND COMBOS</h5>
                        <p>Makeup Kits</p>
                        <p>Bridal Makeup Kits</p>
                        <p>Makeup Gift Sets</p>
                    </div>
                    <div class="nav_1_contents">
                        <h5 class="nav_1_heading">MAKEUP ACCESSORIES</h5>
                        <p>Makeup Brushes</p>
                        <p>Eyeshadow Brushes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="dropdown">
        <p>HAIR CARE</p>
        <div class="options">
            <div>
                <div class="nav_1_contents" type="none">
                    <h5 class="nav_1_heading">HAIR CARE</h5>
                    <p>Shampoo</p>
                    <p>Conditoner</p>
                    <p>Hair Oil</p>
                    <p>Serum</p>
                    <p>Hair Mask</p>
                    <p>Combos</p>
                </div>
            </div>
            <div>
                <div>
                    <img
                        src="https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
                        alt=""
                    />
                    <p>MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO - 200ML</p>
                    <p>For Hair Fall Control</p>
                    <p>₹269 <s>₹299</s></p>
                </div>
                <div>
                    <img
                        src="https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
                        alt=""
                    />
                    <p>MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO - 200ML</p>
                    <p>For Hair Fall Control</p>
                    <p>₹269 <s>₹299</s></p>
                </div>
                <div>
                    <img
                        src="https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
                        alt=""
                    />
                    <p>MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO - 200ML</p>
                    <p>For Hair Fall Control</p>
                    <p>₹269 <s>₹299</s></p>
                </div>
                <div>
                    <img
                        src="https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
                        alt=""
                    />
                    <p>MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO - 200ML</p>
                    <p>For Hair Fall Control</p>
                    <p>₹269 <s>₹299</s></p>
                </div>
            </div>
        </div>
    </div>
    <div class="dropdown">
        <p>SKIN CARE</p>
        <div class="options">
            <div>
                <div class="nav_1_contents">
                    <h5 class="nav_1_heading"></h5>
                    <p>Moisturizer</p>
                    <p>Night Cream</p>
                    <p>Eye Cream</p>
                    <p>Body lotion</p>
                    <p>Serum</p>
                    <p>Sunscreen</p>
                    <p>Skincare Kits</p>
                </div>
                <div class="nav_1_contents">
                    <h5 class="nav_1_heading">CLEANSING PRODUCTS</h5>
                    <p>Cleanser</p>
                    <p>Face Wash</p>
                    <p>Exfoliator & Scrub</p>
                </div>
                <div class="nav_1_contents">
                    <h5 class="nav_1_heading">MASK</h5>
                    <p>Sheet Mask</p>
                    <p>Face Pack</p>
                </div>
            </div>
        </div>
    </div>
    <div class="dropdown">
        <p>SANITIZING CARE</p>
        <div class="options">
            <div>
                <div class="nav_1_contents" type="none">
                    <h5 class="nav_1_heading">SANITIZING CARE</h5>
                    <p>Sanitizing Wipes</p>
                    <p>Hand Sanitizer</p>
                    <p>Sanitizing Kits</p>
                    <p>Sanitizing Spray</p>
                </div>
                <div>
                    <img
                        src="https://files.myglamm.com/site-images/400x400/Germ-Shield_2.jpg"
                        alt=""
                    />
                    <p>GERM SHIELD</p>
                    <p>25 Sanitizing Wipes + 1 Moisturizing Hand Sanitizer</p>
                    <p>₹185 <s>₹370</s></p>
                </div>
            </div>
        </div>
    </div>
    <div class="dropdown">
        <p>COLLECTION</p>
        <div class="options">
            <div>
                <div class="nav_1_contents" type="none">
                    <h5 class="nav_1_heading">SHOP BY COLLECTION</h5>
                    <p>MyGlamm</p>
                    <p>SUPERFOODS</p>
                    <p>Treat Love Care</p>
                    <p>Clean Beauty</p>
                    <p>POPxo</p>
                    <p>WIPEOUT</p>
                    <p>GLOW Iridescent Brightening Skincare</p>
                    <p>Manish Malhotra</p>
                    <p>YOUTHfull</p>
                    <p>LIT collection</p>
                    <p>POSE</p>
                    <p>K.Play</p>
                    <p>Just Dropped</p>
                </div>
            </div>
            <div>
                <div>
                    <img
                        src="https://files.myglamm.com/site-images/400x400/Soiree-(1).jpg"
                        alt=""
                    />
                    <p>Manish Malhotra 9 in 1 Eyeshadow Palatte - Soirée</p>
                    <p>
                        Compact Eyeshadow Palette with 9 shades in Matte, Metallic &
                        Foil Finishes
                    </p>
                    <p>₹1295 <s>₹1850</s></p>
                </div>
                <div>
                    <img
                        src="https://files.myglamm.com/site-images/400x400/GGM-(1).jpg"
                        alt=""
                    />
                    <p>Glow to Glamour Shimmer and Fixing Powder</p>
                    <p>2 in 1 Shimmer and Fixing Powder</p>
                    <p>₹836 <s>₹1195</s></p>
                </div>
                <div>
                    <img
                        src="https://files.myglamm.com/site-images/400x400/Tom-Collins_6.jpg"
                        alt=""
                    />
                    <p>MyGlamm Lit Creamy Matte Lipstick - Tom Collins</p>
                    <p>Precision Perfect Matte Slimstick</p>
                    <p>₹386 <s>₹595</s></p>
                </div>
            </div>
        </div>
    </div>
    <div class="dropdown">
        <p>REWARDS</p>
        <div class="options"></div>
    </div>
    <div class="dropdown">
        <p>MYGLAMM STUDIO</p>
        <div class="options">
            <div>
                <div class="nav_1_contents" type="none">
                    <h5 class="nav_1_heading">STUDIO</h5>
                    <p>Blogs</p>
                </div>
            </div>
        </div>
    </div>
    <div class="dropdown"><p>OFFERS</p></div>
</div>
<div id="pop_up" class="popUp">
    <div>
        <div id="close_popup1"><i class="fa-solid fa-x"></i></div>
    </div>
    <p>Get 15% Good Points back on every order</p>
    <div>
        <img src="https://www.myglamm.com/images/myglamm-logo.png" alt="" />
    </div>
    <div>
        <p>*Mobile Number</p>
    </div>
    <div>
        <div>
            <label for="">COUNRTY CODE</label><br />
            <select name="" id="countryCode">
                <option value="+91">IND +91</option>
            </select>
        </div>
        <div>
            <label for="">*MOBILE NUMBER</label><br />
            <input type="tel" name="" id="newUserMobile" />
        </div>
    </div>
    <div>
        <button id="newUserSubmit">CONTINUE</button>
        <p>By Signing up you agree to our <b> Terms & Conditions </b></p>
    </div>
</div>
<div id="pop_up2" class="popUp">
    <div>
        <p>VERIFY YOUR MOBILE NUMBER TO COMPLETE YOUR REGISTRATION</p>
        <div id="close_popup2"><i class="fa-solid fa-x"></i></div>
    </div>
    <p>
        ENTER OTP SENT ON <u><span></span></u>
        <img src="https://img.icons8.com/emoji/344/pencil-emoji.png" alt="" />
    </p>
    <div id="box">
        <input id="inputOtp" maxlength="4" />
        <div id="timer"></div>
    </div>
    <div>
    </div>
    <div>
        <div>
            <label for="">NAME</label><br />
            <input type="text" placeholder="*Full Name" id="newUserName" />
        </div>
        <div>
            <label for="">EMAIL</label><br />
            <input type="email" placeholder="Email Address" id="newUserEmail" />
        </div>
    </div>
    <div>
        <button id="newUserVerify">VERIFY</button>
    </div>
</div>
<div id="pop_up3" class="popUp">
    <div>
        <div id="back_popup">
            <i class="fa-solid fa-arrow-left"></i>
        </div>
        <p>VERIFY YOUR MOBILE NUMBER TO COMPLETE YOUR REGISTRATION</p>
        <div id="close_popup3"><i class="fa-solid fa-x"></i></div>
    </div>
    <div>
        <img src="https://www.myglamm.com/images/mob-otp.png" alt="" />
    </div>
    <p>
        ENTER OTP SENT ON <u><span></span></u>
        <img src="https://img.icons8.com/emoji/344/pencil-emoji.png" alt="" />
    </p>
    <div id="box">
        <input id="inputOtp1" maxlength="4" />
        <div id="timer1"></div>
    </div>
    <div>
        <button id="otpVerify">VERIFY</button>
    </div>
</div>
`;
}

function footer() {
	return `<div id="footer1">
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">LIPS</h5>
        <li>Lipstick</li>
        <li>Matte Lipstick</li>
        <li>Hi-Shine Lipstick</li>
        <li>Liquid Lipstick</li>
        <li>Lip Gloss</li>
        <li>Hi-Shine Lipgloss</li>
        <li>Lip Liner</li>
        <li>Lip Balm</li>
        <li>Glitter</li>
        <li>Lip Stain</li>
        <li>Lipstick Set</li>
        <li>Lip Kit</li>
        <li>Find Your Lipstick</li>
    </ul>
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">FACE</h5>
        <li>Face Sets</li>
        <li>Fixing Powder</li>
        <li>Primer</li>
        <li>Concealer</li>
        <li>Foundation</li>
        <li>Compact</li>
        <li>Banana Powder</li>
        <li>Highlighter</li>
        <li>Blush</li>
        <li>Bronzer</li>
        <li>Sindoor</li>
        <li>Cheek Stain</li>
        <li>Setting Powder</li>
        <li>Makeup Accessories</li>
        <li>Makeup Brushes</li>
    </ul>
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">EYES</h5>
        <li>Eye Shadow</li>
        <li>Eyeliner</li>
        <li>Eyebrows</li>
        <li>Glitter</li>
        <li>Mascara</li>
        <li>Kajal</li>
        <li>Eyeshadow Brushes</li>
        <li>Eye Combos</li>
    </ul>
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">NAILS</h5>
        <li>Nail Polish</li>
        <li>Matte Nail Polish</li>
        <li>Nail Lacquer</li>
    </ul>
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">SKINCARE</h5>
        <li>Moisturizer</li>
        <li>Night Cream</li>
        <li>Eye Cream</li>
        <li>Body lotion</li>
        <li>Serum</li>
        <li>Sunscreen</li>
        <li>Skincare Kits</li>
        <li>Cleansing Products</li>
        <li>Exfoliator & Scrub</li>
        <li>Face Wash</li>
        <li>Cleanser</li>
        <li>Mask</li>
        <li>Face Pack</li>
        <li>Sheet Mask</li>
    </ul>
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">BATH & BODY</h5>
        <li>Shower Gels</li>
        <li>Soaps</li>
        <li>Body Lotion</li>
        <li>Body Spray & Mists</li>
        <li>Hand Wash</li>
        <li>Foot Cream</li>
    </ul>
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">SANITIZING CARE</h5>
        <li>Sanitizing Wipes</li>
        <li>Face Washes</li>
        <li>Shower Gels</li>
        <li>Body Moisturizers</li>
        <li>Soaps</li>
        <li>Hand Care</li>
        <li>Foot Care</li>
        <li>Surface Spray</li>
        <li>Sanitizing Kits</li>
        <li>Body Spray & Mists</li>
        <li>Sanitizing Spray</li>
        <li>Hand Sanitizer</li>
    </ul>
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">KITS AND COMBOS</h5>
        <li>Makeup Kits</li>
        <li>Bridal Makeup Kits</li>
        <li>Makeup Combo</li>
        <li>Makeup Gift Sets</li>
        <li>Cosmetics Kits & Combos</li>
    </ul>
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">HAIR CARE</h5>
        <li>Shampoo</li>
        <li>Conditoner</li>
        <li>Hair Oil</li>
        <li>Serum</li>
        <li>Hair Mask</li>
        <li>Combos</li>
    </ul>
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">MYGLAMMSTUDIO</h5>
        <li>Style</li>
        <li>Lifestyle</li>
        <li>Trends</li>
        <li>Tips</li>
        <li>Beauty</li>
        <li>Tutorials</li>
    </ul>
    <ul class="foot_1_contents" type="none">
        <h5 class="foot_1_heading">KNOW MORE</h5>
        <li>About Us</li>
        <li>Exclusive Offers</li>
        <li>Refer & Earn</li>
        <li>myglammPARTIES</li>
        <li>Store Locator</li>
        <li>Press & Media</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Shipping and Delivery policy</li>
        <li>Returns and Replacements</li>
        <li>MyGlamm Rewards</li>
        <li>Loyalty Program Policy</li>
        <li>Sitemap</li>
        <li>Responsible Disclosure</li>
    </ul>
</div>
<div id="footer2">
    <div id="foot_form">
        <form action="">
            <h5>SUBSCRIBE FOR MYGLAMM EMAILS</h5>
            <input
                type="email"
                placeholder="Please Enter Valid Email"
                id="subscribe"
            />
            <input type="submit" value="SUBSCRIBE NOW" id="subscribe_now" />
         </form>
            <div>
            <ul type="none">
                <li><label for="">STAY CONNECTED</label>|</li>
                <li>
                    <img
                        src="https://www.myglamm.com/images/instagram.svg"
                        alt=""
                    />
                </li>
                <li>
                    <img src="https://www.myglamm.com/images/twitter.svg" alt="" />
                </li>
                <li>
                    <img
                        src="https://www.myglamm.com/images/pinterest.svg"
                        alt=""
                    />
                </li>
                <li>
                    <img src="https://www.myglamm.com/images/youtube.svg" alt="" />
                </li>
            </ul>
            </div>
        
    </div>
    <div id="app_link">
        <p>EXPERIENCE THE MYGLAMM MOBILE APP</p>
        <div>
            <div>
                <img src="https://i.postimg.cc/DzVCyW8w/iosStore.png" alt="" />
            </div>
            <div>
                <img src="https://i.postimg.cc/zDpTPLNR/play-Store.png" alt="" />
            </div>
        </div>
    </div>
</div>`;
}

export { navbar, footer };

// search functionality
let query=JSON.parse(localStorage.getItem("query")) || "";

function searchquery()
{
    let cat_title;
    let temp = document.querySelector('#search').value;
    console.log(temp);
    if(temp=="")
    {
        temp="Eyeshadow";
      
        cat_title= document.getElementById("category-title")
        localStorage.setItem("query",JSON.stringify(temp));

        window.location.href="./product.html";
     
    }
    else
    {
       
        cat_title=document.getElementById("category-title");
        cat_title.innerText=`Search Result for "${temp}"`;
        localStorage.setItem("query",JSON.stringify(temp));
        window.location.href="./product.html";

       
    }
    
    


}

// creating debouncing function for search functionality
let id;
function  debounce(fun,time){
    if(id)
    {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        fun()
    }, time)
}