function somme_entiers (n) {
    if (n === 0) {
        return 0;
    } else {
        return (n + somme_entiers(n-1));
    }
}