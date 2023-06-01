//0paFiG12C4iAISB8
//mongodb+srv://aanaim96:<0paFiG12C4iAISB8>@cluster0.kqkmrly.mongodb.net/
//C:\Users\aanai\Desktop\mongosh-1.9.1-win32-x64\bin
//mongodb://localhost:27017
//67.82.242.15/32
//mongodb+srv://uday:Idontknow5@fitness2.uwxekjf.mongodb.net/



const { MongoClient } = require(['mongodb'], function (mongodb) {

})
//require('mongodb').MongoClient;

async function main() {
    const url = "mongodb+srv://uday:Idontknow5@fitness2.uwxekjf.mongodb.net/"

    const client = new MongoClient(url);

    try {
        await client.connect();
        await listDatabases(client);
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close()
    }

}

main().catch(console.error);


const formEl = document.querySelector('form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);
    console.log(formData.get('weight'))
    console.log(formData.get('reps'))

})












// --------------------------------------






const menu = {
    "Banana": {
        "Calories": 105,
        "Protein": 1.3,
        "Carbohydrates": 27,
        "Fat": 0.4,
        "Fiber": 3.1,
        "Sugar": 14
    },
    "Boiled Egg": {
        "Calories": 78,
        "Protein": 6,
        "Carbohydrates": 0.6,
        "Fat": 5,
        "Fiber": 0,
        "Sugar": 0.6
    },

}

//console.log(menu["Boiled Egg"]["Protein"])



/* 
"Calories": ,
"Protein": ,
"Carbohydrates": ,
"Fat": ,
"Fiber": ,
"Sugar": 
*/