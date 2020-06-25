document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#ypos-range").onchange = evt =>{
        y_pos(parseInt(evt.target.value));
    }
    document.querySelector("#xpos-range").onchange = evt =>{
        x_pos(parseInt(evt.target.value));
    }
    document.querySelector("#size-range").onchange = evt =>{
        size(parseFloat(evt.target.value));
    }
    document.querySelector("#opac-range").onchange = evt =>{
        opac(parseFloat(evt.target.value));
    }
    document.querySelector("#form-select").onchange = evt =>{
        change_form(evt.target.value);
    }
    document.querySelector("#hex-txt").onkeyup = evt =>{
        set_hex(evt.target.value);
    }
    document.querySelector("#r-slider").onchange = () =>{
        update_rgba();
    }
    document.querySelector("#g-slider").onchange = () =>{
        update_rgba();
    }
    document.querySelector("#b-slider").onchange = () =>{
        update_rgba();
    }
    document.querySelector("#a-slider").onchange = () =>{
        update_rgba();
    }
});

function getbox(){
    return document.querySelector("#box");
}

function y_pos(val){
    let box = getbox();
    box.style.top = `${val}px`;
}

function x_pos(val){
    let box = getbox();
    box.style.left = `${val}px`;
}

function size(val){
    let box = getbox();
    box.style.transform = `scale(${val})`;
}

function opac(val){
    let box = getbox();
    box.style.opacity = val;
}

function change_form(val){
    switch(val){
        case "cuadrado":{
            getbox().style.transform="none";
            getbox().style.borderRadius=0;
            break;
        }
        case "rombo":{
            getbox().style.transform="rotate(45deg)";
            getbox().style.borderRadius=0;
            break;
        }
        case "circulo":{
            getbox().style.transform="none";
            getbox().style.borderRadius="50%";
            break;
        }
    }
}

function set_hex(str){
    console.log("onset")
    if (str.length != 6)
        return;
    console.log("onchange");
    getbox().style.backgroundColor = `#${str}`;
}

function update_rgba(){
    console.log("onupdatergba")
    let box = getbox();
    let r = document.querySelector("#r-slider").value;
    let g = document.querySelector("#g-slider").value;
    let b = document.querySelector("#b-slider").value;
    let a = document.querySelector("#a-slider").value;

    box.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
}