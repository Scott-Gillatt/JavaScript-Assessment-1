//1. Using dot and bracket notation modify the existing object values to replace the information with your own


me.name = "Scott Gillatt";
me['age'] = 28;
me['hair color'] = "brown";
console.log(me);
//2. Iterate over the object to console.log the propery or key names. 
var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
console.log(Object.keys(me));

for (var key in me) {
    if (me.hasOwnProperty(key)) {
        console.log(key + " " + me[key]);
        
    }
}