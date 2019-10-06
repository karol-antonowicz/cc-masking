// Codewars2 return masked string 
// js code which masks your secret 'cc' with # but last 4 digits. If your 'cc' is 4 symbols or less it will not do the masking.
function maskify(cc) {
cc.split(""); //creates an array of stuff you put in
var a = [];  //creates empty array

if (cc.length > 4) {
for (var i = 0; i < (cc.length - 4); i++) { // each i from your cc but last 4 digits 
a.push("#");                                // for each i but last 4 you gonna get a # pushed to the array
var masked = a.join("");                    // in masked are stored pushed ## for each symbol of cc but last 4 digits
}                                          
return masked + cc.slice(-4);              //if cc is no longer than 4 returns pushed ###.. + last 4 digs
} else {
return cc                                 //if cc is less than 4 symbols long returns cc
}

}
