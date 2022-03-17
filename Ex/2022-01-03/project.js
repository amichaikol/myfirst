let coins = []
let clicked = []
let coll = document.getElementsByClassName("collapsible");
whattoremove = ''

function loadtime(){
    myTimeout = setTimeout(timeload, 500);
}
function timeload(){
    $(".progress").css("display","block");
}

function finishedload(){
    $(".progress").css("display","none");
    clearTimeout(myTimeout);
}

function coinsSet(){
    $(document).ready(function(){
        loadtime()
        $.ajax({
            // I have noticed that the url: "https://api.coingecko.com/api/v3/coins/list" gets me a different list then the example
            url: "https://api.coingecko.com/api/v3/coins",
            type: 'GET',
            success: function(result) {
                console.log(result)
                for (i=0; i<50; i++)
                creatCoins(result)  
                secondF()
                finishedload()                            
            },
            error: function(error){
                console.log(error)
}})})
function secondF(){
$(document).ready(function(){
    $.ajax({
        // I have noticed that the url: "https://api.coingecko.com/api/v3/coins/list" gets me a different list then the example
        url: "https://api.coingecko.com/api/v3/coins/list",
        type: 'GET',
        success: function(others) {
            console.log(others)
            for (i=50; i<100; i++)           
            creatCoins(others)
                                  
        },
        error: function(error){
            console.log(error)
}})})}
}

function creatCoins(creations){   
        coin = {
            id: creations[i].id,            
            symbol: creations[i].symbol,
            name: creations[i].name
        };
        coins.push(coin)
        clicked.push(0)
        $("#coinsgrid").append('<div class=" col-lg-4 col-md-4 col-sm-12 d-flex align-self-stretch"><div class="card w-100" ><h3 class="card-header">'+coins[i].symbol+'</h3><div class="card-body d-flex flex-column"><h5 class="card-title">'+coins[i].id+'</h5><div class="row"><button type="button" class="btn btn-primary col-5 collapsible ">More Info</button><div id:"'+coins[i].id+'" style="display:none;" class="col-7"></div></div> </div></div></div>'); 
        collapsing(i, coins)                                             
    }

function collapsing(i, coins){
coll[i].addEventListener("click", function() { 
    loadtime()
    console.log(coins[i].id)                    
    if (clicked[i] == 0){
        clicked[i] = 1
        $(document).ready(function(){
            $.ajax({
                url: "https://api.coingecko.com/api/v3/coins/"+coins[i].id+"",
                type: 'GET',
                
                success: function(news) {
                    console.log(news)                                     
                     // document.getElementById(coins[i].id).innerHTML = str
                    let trying = "#"+coins[i].id
                    data = {
                        image: news.image.small,
                        dollarPrice: news.market_data.current_price.usd+'$',
                        euroPrice: news.market_data.current_price.eur+'€',
                        shekelPrice: news.market_data.current_price.ils+'₪'
                    }
                    console.log(trying)
                    $(trying).append('<img src="'+news.image.small+'" alt="https://api.coingecko.com/api/v3/coins/'+coins[i].name+'"><p>'+news.market_data.current_price.usd+'$</p><p>'+news.market_data.current_price.eur+'€</p><p>'+news.market_data.current_price.ils+'₪</p>')                   
                },
                error: function(error){
                    console.log(error)
                }})})
    }else{
        clicked[i] = 0
        
        let myJ = JSON.stringify(data);                   
                    localStorage.setItem(coins[i].id, myJ);
                    time(coins[i].id)
    }
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }finishedload() 
  }); }

  function time(item){
      setTimeout(remove, 120000)
      console.log(item)
      whattoremove = item
  }

  function remove(){
    // localStorage.clear();
    localStorage.removeItem(whattoremove)
  }
  

//   function time(which, check, where){
//     if (check[where] == 0){
//         check[where] = 1;
//         clearTimeout(mytimeout);
//     }
// const myTimeout = setTimeout(remove, 5000);
// function remove(){
//     localStorage.removeItem(which);
// }
// }

// $(document).ready(function(){
//     $.ajax({
//         url: "https://api.coingecko.com/api/v3/coins/bitcoin",
//         type: 'GET',
//         success: function(result) {
//             console.log('image '+result.image.small+ ' dollars: '+result.market_data.current_price.usd+' euro: '+result.market_data.current_price.eur+' shekels: '+result.market_data.current_price.ils)
//             // $().append('<div class="col-7"><img src="'+result.image.small+'" alt="https://api.coingecko.com/api/v3/coins/'+coins[i].name+'"><p>'+result.market_data.current_price.usd+'$</p><p>'+result.market_data.current_price.eur+'€</p><p>'+result.market_data.current_price.ils+'₪</p></div>')          
// // document.getElementById(coins[i].name)='<div class="col-7"><img src="'+result.image.small+'" alt="https://api.coingecko.com/api/v3/coins/'+coins[i].name+'"><p>'+result.market_data.current_price.usd+'$</p><p>'+result.market_data.current_price.eur+'€</p><p>'+result.market_data.current_price.ils+'₪</p></div>'

//         },
//         error: function(error){
//             console.log(error)
//         }})})

