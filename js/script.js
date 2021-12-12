//console.log("holaaa");

const btn = document.querySelector('#conver');
const btninicio = document.querySelector('#inicio');
btn.onclick = () =>{
    document.getElementById('operacion').style.display = "block"
    document.getElementById('infor').style.display = "none"
    //console.log("kkkk");
}

btninicio.onclick = () =>{
    document.getElementById('infor').style.display = "block";
    document.getElementById('operacion').style.display = "none";
}