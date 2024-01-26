// first exercise to be chosen with random number and paired with random rep number between 15-21
const exerciseSet1 = ["squats", "squat jumps", "push ups", "box jumps", "mountain climbers", "jumping jacks", "sit ups", "step ups"]

// second exercise with rep range 5-14
const exerciseSet2 = ["kettlebell swings", "goblet squats", "rows (any type, weighted)", "dumbbell curls", "RDLs", "ab wheel rollouts", "lunges"]

// third exercise with rep range 1-4
const exerciseSet3 = ["sandbag over bar", "keg to shoulder", "sandbag to shoulder", "CDB press"]

// workout formats 
const workoutFormats = ["3 rounds", "5 rounds", "As many rounds as possible in 10 minutes"]

// choose a random exercise from exerciseSet1 (array) - takes in an array, randomly cooses one, randomly chooses a rep count
const exerciseChooser1 = array =>{
    if (array.length === 0) {
        return null;
    }
 let repCount = Math.floor(Math.random() * 6 + 15); //generates rep count between 15-21
 let randomNumber = Math.floor(Math.random() * array.length); //generates random number to assign to array items
   
  return console.log(`${repCount} reps ${array[randomNumber]}`); // takes RandomNumber and switches it to array[i]

}

const exerciseChooser2 = array2 =>{ //exerciseSet2  reps between 5-14
    if (array2.length === 0) {
        return null;
    }
 let repCount2 = Math.floor(Math.random() * 9 + 5); //generates rep count between 15-21
 let randomNumber2 = Math.floor(Math.random() * array2.length); //generates random number to assign to array items
   
  return console.log(`${repCount2} reps ${array2[randomNumber2]}`); // takes RandomNumber and switches it to array[i]

}

const exerciseChooser3 = array3 =>{ //exerciseSet3 reps between 1-4
    if (array3.length === 0) {
        return null;
    }
 let repCount3 = Math.floor(Math.random() * 3 + 1); //generates rep count between 15-21
 let randomNumber3 = Math.floor(Math.random() * array3.length); //generates random number to assign to array items
   
  return console.log(`${repCount3} reps ${array3[randomNumber3]}`); // takes RandomNumber and switches it to array[i]

}


const workoutFormat = (array4) => {
    if (array4.length === 0) {
        return null;
    }
 let randomNumber4 = Math.floor(Math.random() * array4.length) // generates random number to assign to array
 return console.log(`${array4[randomNumber4]}`);
}

console.log("Your conditioning finisher of the day is:")
workoutFormat(workoutFormats)
exerciseChooser1(exerciseSet1);
exerciseChooser2(exerciseSet2);
exerciseChooser3(exerciseSet3);

