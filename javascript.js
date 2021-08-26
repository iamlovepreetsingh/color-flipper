let changeBtn = document.querySelector('.change-btn'),
    footer = document.querySelector('#footer'),
    colorInput = document.querySelector("#color-input"),
    checkbox = document.querySelector("#checkbox");

changeBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    let colorName = colorInput.value;
    if(checkbox.checked){
        footer.style.color = "#fff";
        changeBtn.style.color = "#fff";
    }else{
        footer.style.color = "#000";
        changeBtn.style.color = "#000";
    }
    changeBtn.style.background = colorName;
    footer.style.background = colorName;
})
