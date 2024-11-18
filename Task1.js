let testScores = [43,56,67,87,98,77,69,84,91,76]

function update(testScores){
     return console.log(testScores.filter(check => check > 70));
}

update(testScores)


let studentScores = [85,92,78,88,95];

function addedScores(studentScores){
newScores = studentScores.map((num) => num + 5);
return console.log(newScores);
}


 listOfNumbers = [2,4,6,8,10]

function squareOfNumbers(li){
let squaredNummbers = listOfNumbers.map((square) => square * square);
return console.log(squaredNummbers);
}

listOfMembers = ["Emily", "Jack", "Sophie", "Daniel"]

listOfBooks = ["Rich Dad Poor Dad", "Psychology Of Money", "Richest Man In Babylon", "Think And Grow Rich"];

function distributeBooks (listOfBooks, listOfMembers){

 for (let iterate of listOfMembers ){
      let allocate = listOfBooks.shift();
      return console.log(`${iterate} ${allocate}`);
 }
}

 let time = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

 function getRightTime(time){
 let currentTime = time.filter(checks => checks.includes("PM"));
 return console.log(currentTime);
 }

 let expensesPerMonth = {
     "Groceries" : 150,
     "Dinning Out" : 100,
     "Transportation" : 50,
     "Entertainment" : 80 
} 

function summedExpenses(expensesPerMonth){ 
let sumOfExpenses = 0;
for(let iterate in expensesPerMonth){
     sumOfExpenses += expensesPerMonth[iterate]
     return console.log(sumOfExpenses);
}
}




























