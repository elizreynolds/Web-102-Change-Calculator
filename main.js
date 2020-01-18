// Write your JavaScript here
// remainder = given % due;
console.log('hi liz')

function calculateChange(amountGiven, amountDue) {
    console.log('calculateChange runs!!!')

    var amountReceived = document.getElementById("amount-received").value;
    var amountDue = document.getElementById("amount-due").value;
    var changeDue = amountReceived - amountDue;
    var dollarsDue = Math.floor(changeDue);
    var centsDue = ((changeDue - dollarsDue) * 100).toFixed(0);
    console.log('amountReceived: ', amountReceived, 'amountDue: ', amountDue)
    console.log('changeDue: ', changeDue)

    document.getElementById('dollars-output').innerText = dollarsDue;

   
        dollars =  Math.floor(centsDue/100);
        console.log('dollars: ', dollars)
        centsDue -= dollars * 100;
        console.log('centsDue: ', centsDue)

    
        quarters =  Math.floor(centsDue/25);
        centsDue -= quarters * 25;
        document.getElementById('quarters-output').innerText = quarters;
        

        dimes =  Math.floor(centsDue/10);
        centsDue -= dimes * 10;
        document.getElementById('dimes-output').innerText = dimes;
        
      
        nickels =  Math.floor(centsDue/5);
        centsDue -= nickels*5;
        document.getElementById('nickels-output').innerText= nickels;
        

        pennies =  Math.floor(centsDue/1);
        document.getElementById('pennies-output').innerText = pennies;
        
     
    }
    
    document.getElementById('calculate-change').addEventListener('click', calculateChange);
    








