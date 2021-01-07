let tab = ["a","b","c"]
test(tab,0);
// fonction recursive parcourir tableau
function test(mon_tableau,i){
    console.time();
    if(mon_tableau.length > i){
        console.log(mon_tableau[i])
        i++;
        test(mon_tableau,i);
    } else{
        console.log(i);
        console.timeEnd();
    }
}
for (let index = 0; index < tab.length; index++) {
    console.time();
    console.log(index);  
}
console.timeEnd();