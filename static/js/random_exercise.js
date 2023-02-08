
// import the file instead and use webpack to bundle for better performance
// const exercise_options = require("single_exercises/available_for_review.json")
async function fetch_exercises_to_review() {
	const response = await fetch("single_exercise/available_for_review.json");
	const json = await response.json();
	return json;
}

async function randomExercise() {
	const exercise_options = await fetch_exercises_to_review();
	// redirect to random exercise
	location.href = exercise_options[Math.floor(Math.random()*exercise_options.length)];
}

document.getElementById("randomExercise").addEventListener("click", randomExercise);
