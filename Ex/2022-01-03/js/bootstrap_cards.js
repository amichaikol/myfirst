// $(document).ready(function(){
//     $("form").submit(function(event){
//         console.log("form submitted");
//         event.preventDefault();
//         student = {
//             fname: $("#fname").val(),            
//             lname: $("#lname").val(),
//             mail: $("#studentEmail").val    ()
//         };
//         console.log(student);
//         addStudent(student);
//     });
// });

function coinsSet(){
    $(document).ready(function(){
        $.ajax({
            url: "https://api.coingecko.com/api/v3/coins/list",
            type: 'GET',
            success: function(result) {
                console.log(result)
                for (i=0; i<100; i++){
                    coin = {
                        id: result[i].id,            
                        symbol: result[i].symbol
                    };
                    addCoin(coin);
                    showCoin(coin);
                }},
            error: function(error){
                console.log(error)
            }})})}

function addCoin(coin){
    console.log("addcoin", coin);
    //Find the grid row with querySelectorAll
    let rows = document.querySelectorAll(".row");
    console.log(rows.length);
    //Ignore last row as this is the button row, use the one before it
    let theRow = rows[rows.length - 1];
    //Get columns of the row before last row
    let columns = theRow.querySelectorAll(".col-4");
    console.log(columns.length);
    //Get cards element in the selected row
    let cards = theRow.querySelectorAll(".card");
    console.log(cards.length);    
    //find the first column with no card
    let theCol = columns[cards.length];
    //Create the new card with its sub elements
    let newCrad = document.createElement("div");
    newCrad.classList.add("card");
    let newimage = document.createElement("img");
    newimage.src = "images/sample.svg";
    newimage.classList.add("card-img-top");
    newCrad.appendChild(newimage);
    theCol.appendChild(newCrad);
    document.getElementById("coinlist").appendChild(theCol);
}