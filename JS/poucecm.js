"use script";
function poucecm (longueur, unite) {
    // calculer la longueur en pouce et en cm (lg-p, lg-cm : out)
    
    let lgp;
    let lgcm;
    switch (unite) {
    
    case 'p':
        lgp = longueur;
        lgcm = longueur*2.54;
        break;
    
    case 'm':
       longueur = longueur * 100; // True;

    case 'cm':
        lgp = longueur/2.54;
        lgcm = longueur;
        break;
    }
    // affecter les longueurs   
    console.log(`${lgp}p = ${lgcm}cm`);
    return {lgcm : lgcm, lgp : lgp};
}



console.log(poucecm(25, 'p'))
console.log(poucecm(5, 'cm'))
console.log(poucecm(2, 'm'))