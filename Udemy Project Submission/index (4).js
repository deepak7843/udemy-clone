
      async function designCourse(){

        try{
        let res=await fetch(`https://www.udemy.com/api-2.0/courses/?category=Development&ordering=highest-rated&ratings=4.4&page_size=25`,{
            "method": "GET",
            "headers":{
          "Accept": "application/json, text/plain, */*",
          "Authorization": "Basic THBVTThWZFcya1YwZ3RHVEVBWk03V1VxdFlSSTF6RjJ5SU03d01OQjp6VHp6d3lMSTI5V2JVeGNYeHFDRmZVSFZmbkEyZjF3Z012MFU2TkhyNUNjR3h1ZEpjWEgzNUN6VGltV0NzT2UxcFFFV3I4NFJ2UEdxVkRzZnV3cHpPek1kTVA5SUViUG9Na2xtNnpvS2w0bWVLaVFjOFZMWWVjaWtwbEdTdVJKMg==",
        
          "Content-Type": "application/json;charset=utf-8"
        }
        
        
        })
        let data= await res.json();
        appenddesignCourse(data)
        console.log(data)
        }
        catch(err){
        console.log(err)
        }
        
              }
              designCourse()


function appenddesignCourse(data){



    // console.log(data);

    data.results.forEach((element) => {
        

       
       

        let div=document.createElement("div");

        div.id="box1_om"
        

        let heading=document.createElement("h2");
        heading.textContent=`Top courses in Development`

        let image=document.createElement("img");
        image.src=element.image_240x135;

let h4=document.createElement("h4");

h4.innerText=element.title;

let name=document.createElement("p");
name.id="name_om"
name.innerText=element.visible_instructors[0].display_name
let price_box=document.createElement("div");
price_box.id="price_box"
let price=document.createElement("h4");
price.innerText=element.price;

let strikedprice=document.createElement("h4");
strikedprice.id="strikedprice"
strikedprice.innerText=`${element.price+5}`

price_box.append(price,strikedprice)
let rating=document.createElement("h4");
rating.id="rating"
rating.innerText=`${(Math.random() * 1 + 4).toFixed(1)}⭐⭐⭐⭐(${(Math.random() * 4000 + 10000).toFixed(0)})`
let cartArr=[];
let wishlistArr=[];


let hoverDiv=document.createElement("div");
            hoverDiv.setAttribute("class","sideDiv");
            let div1=document.createElement("div");
            let button=document.createElement("button");
            button.textContent="Add to cart";
            // let tit=document.createElement("div");
            // tit.textContent=el.title;
            let div2=document.createElement("div");
            let imgw=document.createElement("img");
            imgw.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKqH86UpBOxNZxXFaxbAwJ9TDamP78_INiw&usqp=CAU";
            div1.append(button);
            div2.append(imgw)
            div1.onclick=()=>{
                // addToCart(el);
                cartArr.push(element);
                localStorage.setItem("cartItem",JSON.stringify(cartArr));
            }
            div2.onclick=()=>{
                wishlistArr.push(element);
                localStorage.setItem("wishListItem",JSON.stringify(wishlistArr));
            }
            hoverDiv.append(div1,div2)
            div.append(image,h4,name,rating,price_box,hoverDiv);
            div.onclick=()=>{
                localStorage.setItem("singleProduct",JSON.stringify(element));
                window.location.href="searchedPage.html"
            }


// div.append(image,h4,name,rating,price_box);

document.querySelector("#container_om1").append(div);

    });
}




async function shortAndFreeCourse(){

    try{
    let res=await fetch(`https://www.udemy.com/api-2.0/courses/?page=1&page_size=25&category=Design&ordering=highest-rated&ratings=4.4`,{
        "method": "GET",
        "headers":{
      "Accept": "application/json, text/plain, */*",
      "Authorization": "Basic THBVTThWZFcya1YwZ3RHVEVBWk03V1VxdFlSSTF6RjJ5SU03d01OQjp6VHp6d3lMSTI5V2JVeGNYeHFDRmZVSFZmbkEyZjF3Z012MFU2TkhyNUNjR3h1ZEpjWEgzNUN6VGltV0NzT2UxcFFFV3I4NFJ2UEdxVkRzZnV3cHpPek1kTVA5SUViUG9Na2xtNnpvS2w0bWVLaVFjOFZMWWVjaWtwbEdTdVJKMg==",
    
      "Content-Type": "application/json;charset=utf-8"
    }
    
    
    })
    let data3= await res.json();
    shortandFreeCourse(data3)
    console.log(data3)
    }
    catch(err){
    console.log(err)
    }
    
          }
          shortAndFreeCourse()


function shortandFreeCourse(data3){



// console.log(data);

data3.results.forEach((element) => {
    

   
   

    let div=document.createElement("div");
    div.id="box2_om"

    let image=document.createElement("img");
    image.src=element.image_240x135;

let h4=document.createElement("h4");

h4.innerText=element.title;

let name=document.createElement("p");
name.id="name_om"
name.innerText=element.visible_instructors[0].display_name
let price_box=document.createElement("div");
price_box.id="price_box"
let price=document.createElement("h4");
price.innerText=element.price;
let strikedprice=document.createElement("h4");
strikedprice.id="strikedprice"
strikedprice.innerText=`${element.price+3}`
price_box.append(price,strikedprice)
let rating=document.createElement("h4");
rating.id="rating"
rating.innerText=`${(Math.random() * 1 + 4).toFixed(1)}⭐⭐⭐⭐(${(Math.random() * 4000 + 10000).toFixed(0)})`

let cartArr=[];
let wishlistArr=[];


let hoverDiv=document.createElement("div");
            hoverDiv.setAttribute("class","sideDiv");
            let div1=document.createElement("div");
            let button=document.createElement("button");
            button.textContent="Add to cart";
            // let tit=document.createElement("div");
            // tit.textContent=el.title;
            let div2=document.createElement("div");
            let imgw=document.createElement("img");
            imgw.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKqH86UpBOxNZxXFaxbAwJ9TDamP78_INiw&usqp=CAU";
            div1.append(button);
            div2.append(imgw)
            div1.onclick=()=>{
                // addToCart(el);
                cartArr.push(element);
                localStorage.setItem("cartItem",JSON.stringify(cartArr));
            }
            div2.onclick=()=>{
                wishlistArr.push(element);
                localStorage.setItem("wishListItem",JSON.stringify(wishlistArr));
            }
            hoverDiv.append(div1,div2)
            div.append(image,h4,name,rating,price_box,hoverDiv);
            div.onclick=()=>{
                localStorage.setItem("singleProduct",JSON.stringify(element));
                window.location.href="searchedPage.html"
            }

        
// div2.append(image,h4,name,rating,price_box);


document.querySelector("#container_om2").append(div);

});
}


async function MostViewedCourse(){

    try{
    let res=await fetch(`https://www.udemy.com/api-2.0/courses/?category=Business&ordering=highest-rated&ratings=4.4&page_size=25`,{
        "method": "GET",
        "headers":{
      "Accept": "application/json, text/plain, */*",
      "Authorization": "Basic THBVTThWZFcya1YwZ3RHVEVBWk03V1VxdFlSSTF6RjJ5SU03d01OQjp6VHp6d3lMSTI5V2JVeGNYeHFDRmZVSFZmbkEyZjF3Z012MFU2TkhyNUNjR3h1ZEpjWEgzNUN6VGltV0NzT2UxcFFFV3I4NFJ2UEdxVkRzZnV3cHpPek1kTVA5SUViUG9Na2xtNnpvS2w0bWVLaVFjOFZMWWVjaWtwbEdTdVJKMg==",
    
      "Content-Type": "application/json;charset=utf-8"
    }
    
    
    })
    let data2= await res.json();
  mostViewedCourse(data2)
    console.log(data2)
    }
    catch(err){
    console.log(err)
    }
    
          }
          MostViewedCourse()


function mostViewedCourse(data2){



// console.log(data);

data2.results.forEach((element) => {
    

    // console.log(element.image_480x270)
    // let arr=[]
    
    // arr.push(element)
    // console.log(arr[0])
   

    let div=document.createElement("div");
    div.id="box3_om"
    let image=document.createElement("img");
    image.src=element.image_240x135;

let h4=document.createElement("h4");

h4.innerText=element.title;
let name=document.createElement("p");
name.id="name_om"
name.innerText=element.visible_instructors[0].display_name
let price_box=document.createElement("div");
price_box.id="price_box"
let price=document.createElement("h4");
price.innerText=element.price;
let strikedprice=document.createElement("h4");
strikedprice.id="strikedprice"
strikedprice.innerText=`${element.price+6} `
price_box.append(price,strikedprice)
let rating=document.createElement("h4");
rating.id="rating"
rating.innerText=`${(Math.random() * 1 + 4).toFixed(1)}⭐⭐⭐⭐(${(Math.random() * 4000 + 10000).toFixed(0)})`


let cartArr=[];
let wishlistArr=[];


let hoverDiv=document.createElement("div");
            hoverDiv.setAttribute("class","sideDiv");
            let div1=document.createElement("div");
            let button=document.createElement("button");
            button.textContent="Add to cart";
            // let tit=document.createElement("div");
            // tit.textContent=el.title;
            let div2=document.createElement("div");
            let imgw=document.createElement("img");
            imgw.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKqH86UpBOxNZxXFaxbAwJ9TDamP78_INiw&usqp=CAU";
            div1.append(button);
            div2.append(imgw)
            div1.onclick=()=>{
                // addToCart(el);
                cartArr.push(element);
                localStorage.setItem("cartItem",JSON.stringify(cartArr));
            }
            div2.onclick=()=>{
                wishlistArr.push(element);
                localStorage.setItem("wishListItem",JSON.stringify(wishlistArr));
            }
            hoverDiv.append(div1,div2)
            div.append(image,h4,name,rating,price_box,hoverDiv);
            div.onclick=()=>{
                localStorage.setItem("singleProduct",JSON.stringify(element));
                window.location.href="searchedPage.html"
            }


      

// div2.append(image,h4,name,rating,price_box);


document.querySelector("#container_om3").append(div);

});
}



async function ITCourse(){

    try{
    let res=await fetch(`https://www.udemy.com/api-2.0/courses/?category=Marketing&ratings=4.4&ordering=highest-rated&page_size=25`,{
        "method": "GET",
        "headers":{
      "Accept": "application/json, text/plain, */*",
      "Authorization": "Basic THBVTThWZFcya1YwZ3RHVEVBWk03V1VxdFlSSTF6RjJ5SU03d01OQjp6VHp6d3lMSTI5V2JVeGNYeHFDRmZVSFZmbkEyZjF3Z012MFU2TkhyNUNjR3h1ZEpjWEgzNUN6VGltV0NzT2UxcFFFV3I4NFJ2UEdxVkRzZnV3cHpPek1kTVA5SUViUG9Na2xtNnpvS2w0bWVLaVFjOFZMWWVjaWtwbEdTdVJKMg==",
    
      "Content-Type": "application/json;charset=utf-8"
    }
    
    
    })
    let data2= await res.json();
    ItAndSoftware(data2)
    console.log(data2)
    }
    catch(err){
    console.log(err)
    }
    
          }
          ITCourse()


function  ItAndSoftware(data2){



// console.log(data);

data2.results.forEach((element) => {
    

    // console.log(element.image_480x270)
    // let arr=[]
    
    // arr.push(element)
    // console.log(arr[0])
   

    let div=document.createElement("div");
    div.id="box4_om"
    let image=document.createElement("img");
    image.src=element.image_240x135;

let h4=document.createElement("h4");

h4.innerText=element.title;
let name=document.createElement("p");
name.id="name_om"
name.innerText=element.visible_instructors[0].display_name
let rating=document.createElement("h4");
rating.id="rating"
rating.innerText=`${(Math.random() * 1 + 4).toFixed(1)}⭐⭐⭐⭐(${(Math.random() * 4000 + 10000).toFixed(0)})`
let price_box=document.createElement("div");
price_box.id="price_box"
let price=document.createElement("h4");
price.innerText=element.price;
let strikedprice=document.createElement("h4");
strikedprice.id="strikedprice"
strikedprice.innerText=`${element.price+9}`
price_box.append(price,strikedprice)



let cartArr=[];
let wishlistArr=[];


let hoverDiv=document.createElement("div");
            hoverDiv.setAttribute("class","sideDiv");
            let div1=document.createElement("div");
            let button=document.createElement("button");
            button.textContent="Add to cart";
            // let tit=document.createElement("div");
            // tit.textContent=el.title;
            let div2=document.createElement("div");
            let imgw=document.createElement("img");
            imgw.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKqH86UpBOxNZxXFaxbAwJ9TDamP78_INiw&usqp=CAU";
            div1.append(button);
            div2.append(imgw)
            div1.onclick=()=>{
                // addToCart(el);
                cartArr.push(element);
                localStorage.setItem("cartItem",JSON.stringify(cartArr));
            }
            div2.onclick=()=>{
                wishlistArr.push(element);
                localStorage.setItem("wishListItem",JSON.stringify(wishlistArr));
            }
            hoverDiv.append(div1,div2)
            div.append(image,h4,name,rating,price_box,hoverDiv);
            div.onclick=()=>{
                localStorage.setItem("singleProduct",JSON.stringify(element));
                window.location.href="searchedPage.html"
            }



// div2.append(image,h4,name,rating,price_box);


document.querySelector("#container_om4").append(div);

});
}




async function Music(){

    try{
    let res=await fetch(`https://www.udemy.com/api-2.0/courses/?category=Music&ratings=4.4&ordering=highest-rated&page_size=25`,{
        "method": "GET",
        "headers":{
      "Accept": "application/json, text/plain, */*",
      "Authorization": "Basic THBVTThWZFcya1YwZ3RHVEVBWk03V1VxdFlSSTF6RjJ5SU03d01OQjp6VHp6d3lMSTI5V2JVeGNYeHFDRmZVSFZmbkEyZjF3Z012MFU2TkhyNUNjR3h1ZEpjWEgzNUN6VGltV0NzT2UxcFFFV3I4NFJ2UEdxVkRzZnV3cHpPek1kTVA5SUViUG9Na2xtNnpvS2w0bWVLaVFjOFZMWWVjaWtwbEdTdVJKMg==",
    
      "Content-Type": "application/json;charset=utf-8"
    }
    
    
    })
    let data2= await res.json();
   music(data2)
    console.log(data2)
    }
    catch(err){
    console.log(err)
    }
    
          }
          Music()


function  music(data2){



// console.log(data);

data2.results.forEach((element) => {
    

    // console.log(element.image_480x270)
    // let arr=[]
    
    // arr.push(element)
    // console.log(arr[0])
   

    let div=document.createElement("div");
    div.id="box5_om"
    let image=document.createElement("img");
    image.src=element.image_240x135;

let h4=document.createElement("h4");

h4.innerText=element.title;
let name=document.createElement("p");
name.id="name_om"
name.innerText=element.visible_instructors[0].display_name
let rating=document.createElement("h4");
rating.id="rating"
rating.innerText=`${(Math.random() * 1 + 4).toFixed(1)}⭐⭐⭐⭐(${(Math.random() * 4000 + 10000).toFixed(0)})`

let price_box=document.createElement("div");
price_box.id="price_box"



let price=document.createElement("h4");
price.innerText=element.price;
let strikedprice=document.createElement("h4");
strikedprice.id="strikedprice"
strikedprice.innerText=`${element.price+0}`;
price_box.append(price,strikedprice)
// let div_x=document.createElement("div")



// div_x.append(heading);
// div2.append(image,h4,name,rating,price_box);

// document.querySelector("#heading_om").append(div_x)

let cartArr=[];
let wishlistArr=[];


let hoverDiv=document.createElement("div");
            hoverDiv.setAttribute("class","sideDiv");
            let div1=document.createElement("div");
            let button=document.createElement("button");
            button.textContent="Add to cart";
            // let tit=document.createElement("div");
            // tit.textContent=el.title;
            let div2=document.createElement("div");
            let imgw=document.createElement("img");
            imgw.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKqH86UpBOxNZxXFaxbAwJ9TDamP78_INiw&usqp=CAU";
            div1.append(button);
            div2.append(imgw)
            div1.onclick=()=>{
                // addToCart(el);
                cartArr.push(element);
                localStorage.setItem("cartItem",JSON.stringify(cartArr));
            }
            div2.onclick=()=>{
                wishlistArr.push(element);
                localStorage.setItem("wishListItem",JSON.stringify(wishlistArr));
            }
            hoverDiv.append(div1,div2)
            div.append(image,h4,name,rating,price_box,hoverDiv);
            div.onclick=()=>{
                localStorage.setItem("singleProduct",JSON.stringify(element));
                window.location.href="searchedPage.html"
            }

document.querySelector("#container_om5").append(div);

});
}