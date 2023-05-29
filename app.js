const formEl = document.querySelector('form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);
    console.log(formData.get('weight'))
    console.log(formData.get('reps'))
})






















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

console.log(menu["Boiled Egg"]["Protein"])



/* 
"Calories": ,
"Protein": ,
"Carbohydrates": ,
"Fat": ,
"Fiber": ,
"Sugar": 
*/