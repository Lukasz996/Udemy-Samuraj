const userName = "Bolesław";
const userAge = 22;
const bossFamilly = false;

if ((userName != "" && typeof userName ==="string") || bossFamilly) {
	console.log("Witaj, " + userName +"!");
	if (userAge <= 17) {
		console.log("Masz " + userAge + " lat, nie możesz wejść");
	} else {
		console.log("Masz " + userAge + ", zapraszamy!");
	}
} else {
	console.log("Nie możesz wejść, nie wiem jak się nazywasz!");
}
