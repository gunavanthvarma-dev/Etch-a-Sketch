let container = document.querySelector(".container");
for(let i=0;i<256;i++)
{
    let div = document.createElement('div');
    div.textContent = "div";
    div.classList.add("col");
    container.appendChild(div);
}

