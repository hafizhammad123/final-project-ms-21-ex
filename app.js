



const check=document.querySelector("#bbtn")
let api; axios.get('https://fakestoreapi.com/products?limit=30')





.then((res)=>{
   const p=document.querySelector("#main")
    api=res.data
    // console.log(api)

    
    for(let i = 0; i < api.length; i++){
    
  p.innerHTML+=`
  <div class="card-group">
    <div class="card">
      <center><img style="width: 150px;" src="${res.data[i].image}"
          class="card-img-top" alt="..."></center>
      <div class="card-body">
        <h6 class="card-title">${res.data[i].title}</h6>
        <p class="card-text">${res.data[i].description}</p>
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <p class="card-text">
        <h5>Price: <Del id="red"> 300</Del><ins id="green"> (${res.data[i].price})</ins> </h5><button onclick="cart(${i})" class="bbb">Add to Cart</button>
        </p>
      </div>
    </div>
`  

    }

})
.catch((err)=>{
    console.log(err)
})






const data = JSON.parse(localStorage.getItem('cartItems'));
let arr;
if(Array.isArray(data)){
    arr = [...data];
}else{
    arr = []
}
function cart(index){
    console.log('add to cart called' , index);
    arr.push(api[index]);
    console.log(arr);
}

function checkout (){
  window.location = 'checkout.html'
  localStorage.setItem('cartItems',JSON.stringify(arr))
}















function log(){
  localStorage.removeItem("email1");
  localStorage.removeItem("password");

  window.location.href = "login&sigup.html";
}