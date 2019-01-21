var shell = ["s","p","d","f"];
function filling(electrons) {
    var designation = "";
    var noble = 0;
    var diag = 1;
    var subshells = [];
    while(noble < electrons) {
        for(var tw = 0; tw < 2 && noble < electrons; tw++) {
            for(var part = diag; part > 0 && noble < electrons; part--) {
                subshells.push([2*diag+tw-part,shell[part-1],part*4-2]);
                noble += part*4-2;
            }
        }
        diag++;
    }
    for(var i = 0; i < subshells.length-1; i++) {
        designation += subshells[i][0]+subshells[i][1]+"("+subshells[i][2]+")"
    }
    designation += subshells[subshells.length-1][0]+subshells[subshells.length-1][1]+"("+(subshells[subshells.length-1][2]-noble+electrons)+")"
    return(designation);
}
//console.log(filling(5));
for(var i =  2; i < process.argv.length; i++) {
    console.log(process.argv[i] + ": " + filling(parseInt(process.argv[i])));
}