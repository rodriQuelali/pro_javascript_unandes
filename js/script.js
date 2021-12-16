//console.log("holaaa");
const listaBase = [2,3,4,5,6,7,8,9];
const txtBases = document.getElementById('txtBase');
const txtBasesD = document.getElementById('txtBaseD');
const btn = document.querySelector('#conver');
const btninicio = document.querySelector('#inicio');
const tablaCuerpo = document.querySelector('#cuerpoTb');
listaBase.forEach((listaBases)=>{txtBases.innerHTML += `<option>${listaBases}</option>`})
listaBase.forEach((listaBases)=>{txtBasesD.innerHTML += `<option>${listaBases}</option>`})
// for (let i = 0; i < listaBase.length; i++) {
//     txtBases.innerHTML += `<option>${listaBase[i]}</option>`;
    
// }


btn.onclick = () =>{
    document.getElementById('operacion').style.display = "block"
    document.getElementById('infor').style.display = "none"
    //console.log("kkkk");
}

btninicio.onclick = () =>{
    document.getElementById('infor').style.display = "block";
    document.getElementById('operacion').style.display = "none";
}

//realizando las operaciones
const btnopreacion = document.querySelector('#operacion');
btnopreacion.addEventListener('submit', (e) => {
    e.preventDefault();
    let x = document.getElementById('txtN1').value;
    let b = document.getElementById('txtBase').value;
    let d = document.getElementById('txtBaseD').value;
    //operarFu(x, b);
    let aux = validacionN(x,b);
    if(aux === true){
        console.log("datos invalidos");
    }else{
        const op = operarFu(x,b,d);
        listarTabla(op);
        console.log(validacionN(x,b));
        //console.log(op);
    }
})

const listarTabla = (op) =>{
    tablaCuerpo.innerHTML += `<tr>
    <th Mscope="row">1</th>
    <td>${op.xx}</td>
    <td>${op.bb}</td>
    <td>${op.nn}</td>
    <td>${op.b_n}</td>
  </tr>`;

}
const operarFu = (x,b,d) =>{
    let p = 1;
    let n = 0;
    let y = x;
    while (y > 0) {
        let dig = parseInt( y % 10);
        //console.log(dig);
        //debugger;
        y = parseInt(y / 10);
        n = parseInt(n + dig * p);
        p = parseInt(p * b);
    }
    console.log(`${x} de la base ${b}, es: ${n}, en base 10`);
    let n_v = 0
    p = 1
    while (n > 0) {
        let dig = parseInt( n % d)
        n = parseInt(n / d);
        n_v = parseInt(n_v + dig * Math.pow(10, p))
        console.log(n_v);
        p = parseInt(p + 1)
    }
    //Math.pow(10, p);
    console.log(`${x} de la base ${b}, es: ${n_v}, en base 10`);
    return {xx:x,
            bb:b,
            b_n:d,
            nn:n_v};
}

const validacionN = (x, b) =>{
    let y = x;
    while (y > 0) {
        let dig = parseInt(y % 10);
        console.log(dig);
        y = parseInt(y / 10)
        if(dig >= b){
            return true;
        }
    }
    return false;

}

