

function compute()
{

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if (principal<=0){  // Validation principal inputbox
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    // Show results in span
    document.getElementById("result").innerHTML="<p>if you deposite <mark> " + principal + "</mark>,</p>" + "<p>at an interest rate of <mark>" + rate + "</mark>,</p>" + "<p>You will receive an amount of <mark>" +  interest + "</mark>,</p>" + "<p>in the year <mark>" + year + "</mark></p>";
    
}
     
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
