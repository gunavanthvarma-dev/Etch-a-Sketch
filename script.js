let container = document.querySelector(".container");
for(let i=0;i<256;i++)
{
    let div = document.createElement('div');
    //div.textContent = "div";
    div.style.backgroundColor = 'bisque';
    div.classList.add("col");
    container.appendChild(div);
}


let draw = document.querySelectorAll('.col');
draw.forEach(function(dra)
{
    dra.addEventListener('mouseover',function (e)
    {
        e.target.style.backgroundColor = 'black';
    }); 
    
});

/*draw.addEventListener('mouseleave',function (e)
{
    e.target.style.background = 'black';
});*/
