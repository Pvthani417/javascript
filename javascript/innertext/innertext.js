let b=document.getElementById("spnid");


function sample()
{
    let a=document.getElementById("pwd").value;
    let info;
    if(a.length>5 && a.length<8)
    {
        info="strong";
        b.style.color="green";
    }
    else if(a.length<5 && a.length>3)
    {
        info="weak";
        b.style.color="red";
    }
    else if(a.length>8 && a.length<15)
    {
        info="good";
        b.style.color="blue";
    }
    else if(a.length>15 && a.length<20)
    {
        info="bad";
        b.style.color="pink";
    }
    
    b.innerText=info;
   
    } 
    
