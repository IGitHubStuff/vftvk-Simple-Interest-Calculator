// this function runs when button is pressed
function compute()
{


    // Value of amount text field obtained
    var principal = document.getElementById("principal").value;

    // Variable changed into an integer
    var principalInt = parseInt(principal);

    // Positive number check
    if (principalInt === 0 || principalInt < 0 || document.getElementById("principal").value.length == 0) {

        alert("Please enter a positive number in amount");

        // focus set on amount
        document.getElementById("principal").focus();

    } else {

        //Value for the rate slider obtained
        var rate = document.getElementById("rate").value;

        // Value for the years field obtained
        var years = document.getElementById("years").value;

        // Interest calculated
        var interest = principal * years * rate /100;

        // Year Calculated
        var year = new Date().getFullYear()+parseInt(years);

        // innerHTML value of the result element, highligthing for better visuals
        document.getElementById("result").innerHTML="If you deposit "+"<span class='highlight'>"+principal+"</span>"+","+"\<br\>at an interest rate of "+"<span class='highlight'>"+rate+"</span>"+"<span class='highlight'>"+"%"+"</span>"+".<br\>You will receive an amount of "+"<span class='highlight'>"+interest+"</span>"+","+"\<br\>in the year "+"<span class='highlight'>"+year+"</span>"+"\<br\>";
    
    }

}


//rate_val value updated when the slider is moved
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}