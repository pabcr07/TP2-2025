function handleClick(){
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    let IMC = peso / altura ** 2
    alert(IMC)
}