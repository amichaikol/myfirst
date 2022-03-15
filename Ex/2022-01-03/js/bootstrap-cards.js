class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
    setNext(next){
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    setFirst(node){
        this.head = node;    }
    isEmpty(){
        if (this.head == null)
            return true;
        return false;
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    getFirst() {
        return this.head;
    }
    add(node){
        this.getLast().setNext(node);
    }
    print(){
        console.log("Current linked list");
        let lastNode = this.getFirst();
        if (lastNode) {
            console.log(lastNode.data);
            while (lastNode.next) {
                lastNode = lastNode.next
                console.log(lastNode.data);
            }
        }
    }
}

let coins = new LinkedList();

$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        student = {
            fname: $("#fname").val(),            
            lname: $("#lname").val(),
            info: $("#info").val(),
            mail: $("#studentEmail").val()
        };
        addStudent(student);
        showStudent(student);
    });
});

document.getElementById("test").addEventListener("load", coins);

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
                }

            },
            error: function(error){
                console.log(error)
            }
        })
    })
    
}

function addCoin(coin){
    if (coins.isEmpty()){
        coins.setFirst(new ListNode(coin));
    }else{
        coins.add(new ListNode(coin));
    }
    coins.print();
}

function showCoin(coin){

    $(".row").append("<div class='col-4 d-flex align-self-stretch'></div>");
    
    //Create the new card with its sub elements
    $(".col-4:last").append("<div class='card w-100'></div>");

    //create image section for card
    $(".card:last").append("<img class='card-img-top' src='images/sample.svg'/>");

    //creating body section with info on student to card
    $(".card:last").append("<div class='card-body text-center d-flex flex-column'></div>");


    $(".card-body:last").append(
        `<h5 class='card-title'>${coin.id} ${coin.symbol}</h5>`, 
        `<a class='btn btn-primary mt-auto'>VIEW PROFILE</a>`
        );
}


