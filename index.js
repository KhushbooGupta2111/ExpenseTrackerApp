import { initializeApp } from "firebase/app";
import {
    collection,
    getDoc,
    getDocs,
    getFirestore,
    addDoc,
    snapshotEqual,
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDTvIvFAwQe7GZpcWNB-hW16zjPTVN1RtE",
    authDomain: "expensetracker-cde48.firebaseapp.com",
    projectId: "expensetracker-cde48",
    storageBucket: "expensetracker-cde48.appspot.com",
    messagingSenderId: "376024763106",
    appId: "1:376024763106:web:e1c9369fe7c24d05296cbb",
    measurementId: "G-61L5LGEE9L"
};
initializeApp(firebaseConfig);
const db = getFirestore();
//console.log(db.collection.find());


var balance = 0;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var time = new Date().getTime()
var date = new Date().getDate()
var monthName = new Date().getMonth();
var month = months[monthName];
var year = new Date().getFullYear();

function handleIncome() {
    var income = parseInt(document.getElementById("incomeInput").value);
    balance += income;
    document.querySelector("h2").innerHTML = "Your Balance: " + balance;
    const incomePara = document.createElement("p");
    document.getElementById("record").prepend(incomePara);
    var text = document.getElementById("textInput").value;
    incomePara.innerText = `Credit Added: ${income} on ${date} ${month}, ${year}
 ${text}`;
}


function handleExpense() {
    var expense = parseInt(document.getElementById("incomeInput").value);
    balance -= expense;
    document.querySelector("h2").innerHTML = "Your Balance: " + balance;
    const expensePara = document.createElement("p");
    document.getElementById("record").prepend(expensePara);
    var text = document.getElementById("textInput").value;
    expensePara.innerText = `Credit Deducted: Rs.${expense} on ${date} ${month}, ${year}
${text}`;
}



// const collectionRefer = collection(db, 'transactions');


// db.collection('transactions').get().then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//         console.log(doc.data());
//     })
// })

const querySnapshot = await getDocs(collection(db, "transactions"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});




