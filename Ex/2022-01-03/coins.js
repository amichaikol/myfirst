let coins = []
let clicked = []
function coinsSet(){
    $(document).ready(function(){
        $.ajax({
            // I have noticed that the url: "https://api.coingecko.com/api/v3/coins/list" gets me a different list then the example
            url: "https://api.coingecko.com/api/v3/coins/list",
            type: 'GET',
            success: function(result) {
                // console.log(result)
                let coll = document.getElementsByClassName("collapsible");
                let i = 0

                for (i=0; i<100; i++){
                    coins[i] = {
                        id: result[i].id,            
                        symbol: result[i].symbol,
                        name: result[i].name
                    };
                    clicked[i] = 0
                    $("#coinsgrid").append('<div class=" col-lg-3 col-md-6 col-sm-12 d-flex align-self-stretch"><div class="card w-100" ><h3 class="card-header">'+coins[i].symbol+'</h3><div class="card-body d-flex flex-column"><h5 class="card-title">'+coins[i].id+'</h5><div class="row"><button type="button" class="btn btn-primary col-5 collapsible ">More Info</button><div> id:"'+coins[i].name+'" style="display:none;" class="col-7"></div></div> </div></div></div>'); 
                    coll[i].addEventListener("click", function() {                       
                        if (clicked == 1){
                            clicked = 0;
                            $(document).ready(function(){
                                $.ajax({
                                    url: "https://api.coingecko.com/api/v3/coins/"+coins[i].id+"",
                                    type: 'GET',
                                    success: function(result) {
                                        console.log(result)
                                        let coininfo = {
                                            
                                        }

                                    },
                                    error: function(error){
                                        console.log(error)
                                    }})})
                        }
                        this.classList.toggle("active");
                        let content = this.nextElementSibling;
                        if (content.style.display === "block") {
                          content.style.display = "none";
                        } else {
                          content.style.display = "block";
                        }
                      });                                      

                }
            },
            error: function(error){
                console.log(error)
}})})}

$(document).ready(function(){
    $.ajax({
        url: "https://api.coingecko.com/api/v3/coins/bitcoin",
        type: 'GET',
        success: function(result) {
            console.log(result.image.small)
            $("#").append('<div class="col-7"><img src="'+result.image.small+'" alt="https://api.coingecko.com/api/v3/coins/'+coins[i].name+'"><p>'+result.market_data.current_price.usd+'$</p><p>'+result.market_data.current_price.eur+'€</p><p>'+result.market_data.current_price.ils+'₪</p></div>')          


        },
        error: function(error){
            console.log(error)
        }})})

