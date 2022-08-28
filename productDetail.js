// Will provide all the js required for detail.html
var addToBagLS=JSON.parse(localStorage.getItem("addToBag")) || [];
let productDetailLS=JSON.parse(localStorage.getItem("productDetail")) || [];
let cartTotalLS=JSON.parse(localStorage.getItem("cartTotal")) || 0;


let recentPage= document.getElementById("recent_page")
let currentPage= document.getElementById("current_page")

displayDetails(productDetailLS)
function displayDetails(data)
{
  
    recentPage.innerText=data.product_type;
    currentPage.innerText=data.name;

  
    let img = document.createElement('img');
    img.src=data.api_featured_image;

   
    let title = document.createElement('h1');

    title.innerText=data.name;

    let brand = document.createElement('p');
    brand.innerText=`Brand: - ${data.brand}`;
    brand.setAttribute("id","brand")

    let rating_div = document.querySelector('#rating_div');

    if(data.rating==0 || data.rating==null)
    {
        data.rating=Math.floor(Math.random() * (6 - 2) + 2);
        document.querySelector('#rating').innerText=data.rating;
    }
    else
    {
        document.querySelector('#rating').innerText=data.rating;
    }

    document.querySelector('#number-of-rating').innerText=`${Math.floor(Math.random() * (500- 10) + 50)} ratings `;



    let price = document.querySelector('#price_div');

    let discout_price = document.querySelector('#discout_price');
    let original_price = document.querySelector('#original_price');

         if(data.price==0 || data.price==null)
        {
            discout_price.innerText="Outof Stock";
            discout_price.style.color="red";
            // maindiv.style.cursor="not-allowed";
            document.getElementById("addToCart").disabled = true;
            document.getElementById("addToCart").style.cursor="not-allowed";


        }
        else{
            let final_price=Math.floor(+(data.price)*30)
            
            discout_price.innerText=`₹${final_price}`;
           let original=(20/100)*(+final_price)
            original_price.innerText=`₹${original+(+final_price)}`
        
        }


        let mrp = document.querySelector('#mrp');
       
        let shades_div = document.querySelector('#shades-div');

// appending shades in select tag
        let optionList = document.getElementById('select_shade');

        let options=data.product_colors;
        for(var i = 0, l = options.length; i < l; i++){
            options[i]["value"]=options[i].colour_name;
            var option = options[i];
            optionList.options.add( new Option(option.colour_name,option.value));
          }
        //   geting shade value
          optionList.addEventListener("change",function(e){
            var selected_color=e.target.value;
            let selected_shade_value=selected_color;
            localStorage.setItem("selected_color",selected_color);
          
          })
        
          // appending shades in squrebox
          let shade_color_div = document.querySelector('#shade_color-div');
          for(var i = 0, l = options.length; i < l; i++){
            let color_box = document.createElement('div');
            // color_box.setAttribute
            let ele=options[i];
            
            color_box.style.backgroundColor=ele.hex_value;
            shade_color_div.append(color_box);
            
                color_box.addEventListener("click",function(){
                 var  selected_color=ele.colour_name;
                 optionList.value=selected_color;
                 localStorage.setItem("selected_color",selected_color);

                    // color_box.style.border="2px";
                    // color_box.style.border="solid";
                    // color_box.style.borderColor = "black";
                });
          }

        let cartBTN = document.querySelector('#addToCart-div');
          let cashback_title = document.querySelector('#cashback-title');
          let hr_line = document.querySelector('#hr-line');
          let offer_div = document.querySelector('#excusive-offer-div');
          let desc = document.querySelector('#description');
                desc.innerText=data.description;
          let write_review = document.querySelector('#write-review');

// add to cart event listner

          cartBTN.addEventListener("click",function(){
            
            // console.log(data)
            for(let i=0 ;i<addToBagLS.length;i++)
            {
              if(addToBagLS[i].id==data.id)
              {
                alert("Product Aledy In Cart");
                dipslayBagData(addToBagLS)
                document.querySelector('#display-total').innerText=`₹${cartTotalLS}`;
                return;
              }
            }
            data["pro_quantity"]="1";
            cartTotalLS=(+cartTotalLS)+(Math.floor(+(data.price)*30));
            data["selected_color"]=localStorage.getItem("selected_color");
            addToBagLS.push(data)
            dipslayBagData(addToBagLS)
            localStorage.setItem("addToBag",JSON.stringify(addToBagLS));
            localStorage.setItem("cartTotal",JSON.stringify(cartTotalLS));
            document.querySelector('#display-total').innerText=`₹${cartTotalLS}`;
          });

    let rightBox=document.getElementById("rightBox")
    rightBox.append(title,brand,rating_div,price,mrp,shades_div,shade_color_div,cartBTN,cashback_title)
    rightBox.append(offer_div,desc,write_review)
    document.getElementById("leftBox").append(img)

}

recentPage.addEventListener("click",function(){
  localStorage.setItem("backBTN",JSON.stringify("1"));
    window.location.href="./product.html";
})


let Cartpopup = document.getElementById("Cartpopup");
function CartpenPopup()
{

  // console.log(addToBagLS);
  // console.log("inside popup")
  Cartpopup.classList.add("Cartopen-popup");
}
function closeCartPopup()
{
  Cartpopup.classList.remove("Cartopen-popup");
  
}

function dipslayBagData(data)
{
  let cart_data_div = document.querySelector('#cart-data-div');
  cart_data_div.innerHTML="";
  document.querySelector('#bag_count').innerText=`My Bag (${addToBagLS.length})`;
  data.forEach(function(ele,index){

  let itemDiv = document.createElement('div');

  let dataDiv = document.createElement('div');
  let closeBtn = document.createElement('button');
      closeBtn.innerText="X";
      closeBtn.addEventListener("click",function(){
        deleteItem(index,ele)
      })

  let img_title_div = document.createElement('div');
  img_title_div.setAttribute("id","img_title_div")

  let img = document.createElement('img');
  img.src=ele.api_featured_image;
  let title = document.createElement('p');
        title.innerText=`${ele.name}:- ${ele.selected_color}`


  let price_quty_div = document.createElement('div');
  price_quty_div.setAttribute("id","price_quty_div")

  let price = document.createElement('p');
  price.innerText=`₹${Math.floor(+(ele.price)*30)}`;

  // qty box
  let quantity_div = document.createElement('div');
  quantity_div.setAttribute("id","quantity_div");

  const QTY_title = document.createElement('p');
  QTY_title.innerText="QTY :- "

  const minusQty = document.createElement('i');
  minusQty.setAttribute("class","fa-solid fa-circle-minus")

  const displayQty = document.createElement('p');
  displayQty.innerText=ele.pro_quantity;

  const PlusQty = document.createElement('i');
  PlusQty.setAttribute("class","fa-solid fa-circle-plus")


// Plus and minus button functionality
  PlusQty.addEventListener("click",function(){
   console.log(ele.pro_quantity)

  })
  minusQty.addEventListener("click",function(){

    ele.pro_quantity=ele.pro_quantity;
   
  })


  quantity_div.append(QTY_title,minusQty,displayQty,PlusQty)
  cart_data_div.append(itemDiv)
  itemDiv.append(dataDiv,closeBtn);
  dataDiv.append(img_title_div,price_quty_div)
  img_title_div.append(img,title);
  price_quty_div.append(price,quantity_div)
  })
  
}

function deleteItem(index,ele)
{
  addToBagLS.splice(index,1);
  localStorage.setItem("addToBag",JSON.stringify(addToBagLS));
  console.log((ele.price)*30);
  cartTotalLS=cartTotalLS-(Math.floor(+(ele.price)*30))
  localStorage.setItem("cartTotal",JSON.stringify(cartTotalLS));
  document.querySelector('#display-total').innerText=`₹${cartTotalLS}`;
  dipslayBagData(addToBagLS)

}
