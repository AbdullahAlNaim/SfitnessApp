


const formEl = document.querySelector('form');

const { MongoClient } = require('mongodb')
//require('mongodb').MongoClient;

async function main() {
    const uri = "";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        //const datab = client.db("insertDB");

        //const database = client.db('mywebappdb');
        //const collection = database.collection('mycollection');

        const database = client.db('myexercises');
        const exercises = database.collection('exercises');

        const docs = {
            exercise_name: 'benchpress',
            weight: 134,
            reps: 6,
        }

        const doc2 = { exercise: 'benchpress', weight: 135, reps: 8 }

        const result = await exercises.insertOne(docs);

        console.log('Inserted document with _id:', result.insertedId);

        await listDatabases(client);
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close()
    }

}

formEl.addEventListener('submit', event => {
    event.preventDefault();
    console.log('pushed submit')
    const formData = new FormData(formEl);
    console.log(formData.get('weight'))
    console.log(formData.get('reps'))
    const docs = {
        exercise_name: formData.get('exercises'),
        weight: formData.get('weight'),
        reps: formData.get('reps'),
    }
    console.log(docs)
    main().catch(console.error);
})

main().catch(console.error);


// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.foreach(db => {
//         console.log(`- ${db.name}`);
//     })
// }

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// async function exer() {
// formEl.addEventListener('submit', event => {
//     event.preventDefault();

//     const formData = new FormData(formEl);
//     console.log(formData.get('weight'))
//     console.log(formData.get('reps'))
//     const doc = {
//         exercise: formData.get('weight'),
//         reps: formData.get('reps'),
//     }

//     })
// }





// const formEl = document.querySelector('form');

// formEl.addEventListener('submit', event => {
//     event.preventDefault();

//     const formData = new FormData(formEl);
//     console.log(formData.get('weight'))
//     console.log(formData.get('reps'))

// })












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
    }

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
