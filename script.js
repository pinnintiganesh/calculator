

let ans="";

let r=document.querySelector(".result");

function calculate(x)
{

    if(ans=="")
    {
        ans+=x; 
       
        r.value+=ans;
        
    }
    else 
    {
        ans+=x;
        r.value+=x;

    }
    
}
function operation(x)
{
    if(ans=="")
    {
        alert('Please enter the operands');
    }
    else{
    ans+=x
    r.value+=x;
    }
   
}
function result () 
{
//     console.log(ans);
//   console.log(eval(ans));
  
  r.value=eval(ans);
  
}
