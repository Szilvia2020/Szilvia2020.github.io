/*
osszeg=0
CIKLUS AMIG van még szám, ADDIG
    szam=köv.elem
    osszeg=osszeg+szam
CIKLUS VÉGE
*/

let numericArray=[1,3,2,5,4,7,6,9];
let sum=0;
for(let i=0;i < numericArray.length; i++){
    sum+=numericArray[i];
}
console.log("Összeg: ",sum);
/*
db=0
CIKLUS AMIG van még szám, ADDIG
    szam=köv. elem
    HA igaz a feltétel a számra, AKKOR
    db=db+1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let db=0;
for(let i=0; i< numericArray.length;i++){
    if(numericArray[i]%2==0){
        db++;
    }
}
console.log("Páros számok: ",db);
/*
legnagyobb=első elem
CIKLUS AMIG van még szám, ADDIG
    szam=köv. szam
    HA szam>legnagyobb AKKOR
        legnagyobb=szam
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let biggest=numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if(numericArray[i]>biggest){
        biggest=numericArray[i];
    }
}
console.log("A legnagyobb szám: ",biggest);
/*
talalat=HAMIS
CIKLUS AMIG van elem ÉS talalat=HAMIS
    szam=köv. elem
    HA igaz a feltétel a számra, AKKOR
    talalat=IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let contains=false;
for (let i = 0; i < numericArray.length && contains==false; i++) {
    if( numericArray[i]==5){
        contains=true;
    }
}
console.log("Tartalmazza-e az ötöt: ",contains);