const td = document.querySelectorAll("td")
const refreshButton = document.querySelector("div1")
const addPrice =  document.querySelector("div2")

//define functions and classes
class Bitcoin {
 constructor() {
   /* Create properties using this and invoke methods that should be called automatically here */
   this.td = td;
   this.getPrices();
 }


 getPrices() {
   $.ajax({
     url: "https://bitpay.com/api/rates",
     dataType: "json",
     success: data => {
       this.prices = data,
         this.setPrices()
     },
     error: error => {
       console.log("There was an error getting from the API")
     }
   })
 }
 setPrices(nums) {
   // console.log("Running setPrices... I should first console.log nums to see if I'm using the resources properly")

   //get the prices on the screen
   for (let nums = 1; nums <= td.length; nums++) {
     if (nums === 1) {
       this.td[nums].innerHTML= this.prices[0].rate;
     } else {

       this.td[nums].innerHTML= this.prices[nums].rate;
     }
   }
 }

refresh()
   {
     location.reload();
     this.getPrices;
   //  console.log(refresh);
   }
 }

let bitcoin = new Bitcoin();
console.log(bitcoin);
//adding event listeners, calling functions, and creating instances of classes

refreshButton.addEventListener("click", e=>{
 refresh()
})

addPrice.addEventListener('click', e=>{
 window.prompt("Enter currancy code");
})
