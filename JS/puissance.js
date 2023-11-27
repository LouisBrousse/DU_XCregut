function puissance (nombre, exposant) {
if (exposant = 0){
    return 1;
} else {
    return nombre*puissance(nombre, exposant-1)
}
