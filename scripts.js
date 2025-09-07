// Object
// create object with 10 elements
// const myObjectlist = {FirstName:"Chidera", SecondName:"Godwin", LastName:"Agbo", Dept:"C/ST", Level: "300L",PhoneNo:"08105007564", LGA:"UDI",State:"Enugu",Country:"Nigeria", Color:"Black"};
// console.log(myObjectlist);


// delete two elements
// delete myObjectlist.Color;
// console.log(myObjectlist);
// delete myObjectlist.Country;
// console.log(myObjectlist);


// add three elements
// myObjectlist.Village = "Ngwo";
// myObjectlist.height = "5'11ft";
// myObjectlist.Vertical = "30 ups";
// console.log(myObjectlist);


// print elements and length
// let list = {
//   FirstName: 'Chidera',
//   SecondName: 'Godwin',
//   LastName: 'Agbo',
//   Dept: 'C/ST',
//   Level: '300L',
//   PhoneNo: '08105007564',
//   LGA: 'UDI',
//   State: 'Enugu',
//   Village: 'Ngwo',
//   height: "5'11ft",
//   Vertical: '30 ups'
// };
// console.log("The Length is",Object.keys(list).length);

// Arrays
// create an array of 10 diff numbers
// arrayNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arrayNumbers);

// delete last two 
// arrayNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arrayNumbers.pop();
// console.log(arrayNumbers);

// arrayNumbers.pop();
// console.log(arrayNumbers);

// Change into an array of animals
// arrayNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arrayNumbers[0] = "Dog";
// arrayNumbers[1] = "Cat";
// arrayNumbers[2] = "Cow";
// arrayNumbers[3] = "Lion";
// arrayNumbers[4] = "Rat";
// arrayNumbers[5] = "Wolf";
// arrayNumbers[6] = "Fish";
// arrayNumbers[7] = "Rabbit";
// arrayNumbers[8] = "Pigeon";
// arrayNumbers[9] = "Hen";
// console.log(arrayNumbers);


//Condition with if, else if, else statement with creative reasoning conditions
//  let arraYNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


//  if, else if, else statement with creative reasoning conditions
//  if (arraYNumbers < 39){
//     console.log("Proceed");
//  } else if(arraYNumbers > 39){
//     console.log("Limit Exceeded");
//  }else{
//     console.log("Unable to input values");
//  }






//  user click on the login btn the close of the btn and spaces changes

function modifyLogin (){
    let spacesEmail = document.getElementById("Email");
    let spacesPassword = document.getElementById("password");
    let loginBtn = document.getElementById("logmein");
    

    loginBtn.style.backgroundColor = "Green";
    spacesEmail.style.border = "1px solid blue";
    spacesPassword.style.border ="1px solid blue";
    

    let btnValueEmail = spacesEmail.value;
    let btnValuePassword = spacesPassword.value;
    

    console.log("Email: " + btnValueEmail);
    console.log("Password: " + btnValuePassword);
}
