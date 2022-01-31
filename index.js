var balance = 0;
function handleIncome()
{
var income = parseInt(document.getElementById("incomeInput").value);
balance += income;
document.querySelector("h2").innerHTML = "Your Balance: " + balance;
const incomePara = document.createElement("p");
document.getElementById("record").prepend(incomePara);
incomePara.innerText = `Income: ${income}`;
}
function handleExpense()
{
var expense = parseInt(document.getElementById("incomeInput").value);
balance -= expense;
document.querySelector("h2").innerHTML = "Your Balance: " + balance;
const expensePara = document.createElement("p");
document.getElementById("record").prepend(expensePara);
expensePara.innerText = `Expense: ${expense}`;
}
/*function appendIncome()
{

        const incomePara = document.getElementById("record").createElement(p);
        const input = document.getElementById("record").createTextNode(expense);
        incomePara.appendChild(input);
    
}
 
function appendExpense()
{
    const expensePara = document.getElementById("record").createElement(p);
    const input = document.getElementById("record").createTextNode(income);
    expensePara.appendChild(input) 

}*/


