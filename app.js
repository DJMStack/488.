document.getElementById('LookBook').addEventListener('click', link);
document.getElementById('Collection').addEventListener('click', link);
document.getElementById('Sales').addEventListener('click', link);
document.getElementById('Shop').addEventListener('click', link);
document.getElementById('User').addEventListener('click', link);

var name = prompt("Enter you name to sign in");
document.getElementById('UserName').innerHTML = name;




if (x = ""){
alert("Please enter your First name to Login in");
var userName = prompt("Enter you name to sign in");

}else{
    var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
restOfName = restOfName.toLowerCase(); 
var capitalisedName = upperCaseFirstChar + restOfName;
alert("Hello " + capitalisedName);
}



function link(e){
    alert("This would go to another page");
};
