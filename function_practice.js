//Purpose:return higher number
//Signature:(int, int)
//Examples: greaterNum (7,9)  --> 9
            //greaterNum (5,4)  --> 5
            //greaterNum (123, 67) --> 123

//Skeleton:greaterNum (,)
//to do: determine greater number between two integers
//to do: return the higher int

function greaterNum(int1, int2) {
  // return Math.max(7,9);
  if (int1 > int2) {
    return int1;
  }
  else return int2;
}

//purpose: returns a different string for each language code, default to english
//signature: (string)
//examples: en --> "Hello, World"
            //es --> "hola, mundo"
            //fr --> "Bonjour, monde"
//Skeleton: helloWorld (string)
          //to do: have the string "hello world" for the argument
          // to do: return the given language
          // to do: english is default is it does not equal the given languages

// var es;
// var en;
// var fr;

function helloWorld(){
var answer = prompt("Hello there, what language do you speak?");


if ("en"===answer){
  alert("Hello World!");
}

else if ("es"===answer){
  alert("Hola Mundo!");
}

else if ("fr"===answer){
  alert("Bonjour Monde!");
}

else {
  alert("Hello World");
}

}
