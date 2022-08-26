let container = document.querySelector(".container");
for(let i=0;i<256;i++)
{
    let div = document.createElement('div');
    //div.textContent = "div";
    div.style.backgroundColor = 'bisque';
    div.classList.add("col");
    container.appendChild(div);
}

let sketch = document.querySelector('#sketch');
sketch.addEventListener('click',function(e)
{
    let draw = document.querySelectorAll('.col');
    draw.forEach(function(dra)
   {
    dra.addEventListener('mouseover',function (e)
    {
        e.target.style.backgroundColor = 'black';
    }); 

   });
});

let eraser = document.querySelector('#eraser')
eraser.addEventListener('click',function(e)
{
    let erase = document.querySelectorAll('.col');
    erase.forEach(function(era)
   {
    era.addEventListener('mouseover',function (e)
    {
        e.target.style.backgroundColor = 'bisque';
    }); 

   });
});

let clear = document.querySelector('#clear')
clear.addEventListener('click',function(e)
{
    let cle = document.querySelectorAll('.col');
    cle.forEach(function(cl)
   {
      cl.style.backgroundColor = 'bisque';
   });
});

let pixels = document.querySelector('#pixels');
pixels.addEventListener('click',function(e)
{
   
   let pxsize = parseInt(prompt("enter number of pixels per side:"));
   if(pxsize>100)
   {
    alert("Number of pixels per side should not exceed 100!!!Please try again");

   }
   else if(pxsize%2!=0)
   {
    alert("each side should have even number of pixels!!Please try again");
   }
   else
   {
     let griD = document.querySelector('.container');
     while(griD.firstChild)
     {
        griD.removeChild(griD.firstChild);
     }
     //let container = document.querySelector(".container");
     let boxes = 500/pxsize;
     document.getElementById("cont").style.setProperty('grid-template-columns','repeat('+pxsize+','+boxes+'px)');
     document.getElementById("cont").style.setProperty('grid-template-rows','repeat('+pxsize+','+boxes+'px)');


    for(let i=0;i<(pxsize*pxsize);i++)
     { 
       let div = document.createElement('div');
       div.style.backgroundColor = 'bisque';
       div.classList.add("col");
       griD.appendChild(div);
     }
     
   }
});

let rainbow = document.querySelector('#rainbow');


