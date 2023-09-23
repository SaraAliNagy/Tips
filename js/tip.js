// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none" ;
document.getElementById("each").style.display = "none" ;

//click to call function
let x = document.getElementById("calculate") ;
x.addEventListener("click",calculateTip);

  //Calculate Tip
function calculateTip() 
{
    var billAmount = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var peopleamt = document.getElementById("peopleamt").value;

    //validate input to only numbers 
    if (isNaN (billAmount) ) 
    {
        alert("Please enter valid BILL AMOUNT (Number not text) ");
        return;
    }

    //validate input

    if(billAmount === "" || serviceQual == 0  )
    {
        alert("Please Enter A Valid Bill A mount And Selevt A Valid Service Level")
        return;
    }

    //Check to see if this input is empty or less than or equal to 1
    if (peopleamt === "" || (peopleamt <= 1) )
    {
        peopleamt = 1 ;
        document.getElementById("each").style.display = "none" ;
    }
    else
    {
        document.getElementById("each").style.display = "block";

    }

    //calculateTip (Mathmatical Operation)
    var totalTip = ((billAmount *  serviceQual) / peopleamt); //total == tip for each people
    
    //next line allows us to always have two digits after decimal point
    totalTip = totalTip.toFixed(2);
    //Display the tip
    document.getElementById("tip").innerHTML = totalTip ;
    document.getElementById("totalTip").style.display = "block" ;

}