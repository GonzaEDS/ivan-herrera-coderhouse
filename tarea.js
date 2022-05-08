let password = prompt("Ingresa una contraseña:")
let password1= prompt("Reingresa la contaseña:")


while(password.length<8){
    alert("La contraseña es demasiado debil, debe contener al menos 8 carecteres")
    password = prompt("Ingresa una contraseña:")
    password1= prompt("Reingresa la contaseña:")
}if(password!==password1){
    alert("Las contraseñas no coiciden")
    password = prompt("Ingresa una contraseña:")
    password1= prompt("Reingresa la contaseña:")
}