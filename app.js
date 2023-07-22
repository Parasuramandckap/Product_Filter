
let fillerPro = [...products];

let pro = document.querySelector(".products-container")
let display = () =>{
    if(fillerPro.length<1){
        pro.innerHTML = `<h1>sorry item not found</h1>`
        return;
    }

    pro.innerHTML = fillerPro.map(item=>{
        const { id, title, image, price } = item;

        return `<article class="product" data-id="${id}">
        <img
          src="${image}"
          class="product-img img"
          alt=""
        />
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`;
    }).join("")
}
display()


let form = document.querySelector(".input-form")
let input = document.querySelector(".search-input")

form.addEventListener("keyup",()=>{
  let inputva = input.value ;

  fillerPro = products.filter(product=>{
    return product.title.toLowerCase().includes(inputva)
  })

  display()
})

let companies = document.querySelector(".companies")

let diplayBtn  = () =>{
  let btn = ["all",...new Set(products.map((pro)=> pro.company))]
  companies.innerHTML = btn.map(btn =>   { return `<button class='company-btn' data-id="${btn}">${btn}</button>`}).join("")
}
diplayBtn()


companies.addEventListener("click",(e)=>{
  let val = e.target.dataset.id;
  if(val === "all"){
    fillerPro = [...products]
  }
  else{
     fillerPro = products.filter(item=> item.company === val)
  }

  display()
})