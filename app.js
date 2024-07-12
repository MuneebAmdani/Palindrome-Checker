function checkPalindrome(){
let name=document.getElementById("text").value;
let nameSplit=name.split("");
let nameReverse=nameSplit.reverse();
let nameJoin=nameReverse.join("");
if(name == nameJoin){
   document.getElementById("demo").innerHTML=alert('Yes,' + name + ' is a palindrome');
   console.log(document.getElementById("demo").innerHTML='Yes,' + name + ' is a palindrome');
}
else{
    document.getElementById("demo").innerHTML=alert('No,' + name + ' is not a palindrome')
    console.log(document.getElementById("demo").innerHTML='No,' + name + ' is not a palindrome');
}
}

   
