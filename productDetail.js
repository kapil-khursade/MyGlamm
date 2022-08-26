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
    localStorage.setItem("query",JSON.stringify(data.product_type));
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
            localStorage.setItem("selected_color",JSON.stringify(selected_color));
          
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
                 localStorage.setItem("selected_color",JSON.stringify(selected_color));

                    // color_box.style.border="2px";
                    // color_box.style.border="solid";
                    // color_box.style.borderColor = "black";
                });
          }

        let cartBTN = document.querySelector('#addToCart-div');
          const cashback_title = document.querySelector('#cashback-title');
          const hr_line = document.querySelector('#hr-line');
          const offer_div = document.querySelector('#excusive-offer-div');
          const desc = document.querySelector('#description');
                desc.innerText=data.description;
          const write_review = document.querySelector('#write-review');

          cartBTN.addEventListener("click",function(){
            console.log(data)
            for(let i=0 ;i<addToBagLS.length;i++)
            {
              if(addToBagLS[i].id==data.id)
              {
                alert("Product Aledy In Cart");
                return;
              }
            }

            data["selected_color"]=JSON.parse(localStorage.getItem("selected_color"));
           
            
            addToBagLS.push(data)
            localStorage.setItem("addToBag",JSON.stringify(addToBagLS));
          })

let rightBox=document.getElementById("rightBox")
rightBox.append(title,brand,rating_div,price,mrp,shades_div,shade_color_div,cartBTN,cashback_title)
rightBox.append(offer_div,desc,write_review)
document.getElementById("leftBox").append(img)

}

recentPage.addEventListener("click",function(){
    window.location.href="./product.html";
})
