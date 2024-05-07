// const userName = "Bolesław";
// const userAge = 22;
// const bossFamilly = false;

// if ((userName != "" && typeof userName ==="string") || bossFamilly) {
// 	console.log("Witaj, " + userName +"!");
// 	if (userAge <= 17) {
// 		console.log("Masz " + userAge + " lat, nie możesz wejść");
// 	} else {
// 		console.log("Masz " + userAge + ", zapraszamy!");
// 	}
// } else {
// 	console.log("Nie możesz wejść, nie wiem jak się nazywasz!");
// }

// const playerName = "Kratos";
// console.log(`Witaj ${playerName ? playerName + "!" : "nieznajomy"}`);

// const game = ([time, points, name] = [123.123, 15, "Uti"]);

// const animals = ["dog", "cat", "canary", "mouse"];
// // animals.splice(0, 3);

// const namesUsers = ["Zenon", "Anna", "Jacek", "Lukasz", "Gabriel"];
// namesUsers.sort()
// console.log(namesUsers);

// namesUsers.splice(1, 2);
// console.log(namesUsers);

// const numbers = [5, 10, 15];

// if (numbers[0] + numbers[2] > numbers[1]) {
// 	console.log(
// 		"Suma pierwszego i ostatniego elementu jest większa niż drugi element"
// 	);
// } else {
// 	console.log(
// 		"Suma pierwszego i ostatniego elementu nie jest większa niż drugi element"
// 	);
// }

// const firstArray = [1, 2, 3];
// const secondArray = [4, 5];

// if (firstArray.length > secondArray.length) {
// 	console.log("Pierwsza tablica jest dłuższa");
// } else if (secondArray.length > firstArray.length) {
// 	console.log("Druga tablica jest dłuższa");
// } else {
// 	console.log("Tablice są takie same");
// }

// const fruits_v1 = ["pear", "banana", "orange"];
// const fruits_v2 = ["apple", "banana", "orange"];

// if (fruits_v1[0] === "apple") {
// 	console.log("Pierwszy element tablicy to 'apple'");
// } else {
// 	console.log("Pierwszy element tablicy to nie 'apple");
// }
// if (fruits_v2[0] === "apple") {
// 	console.log("Pierwszy element tablicy to 'apple'");
// } else {
// 	console.log("Pierwszy element tablicy to nie 'apple");
// }

// for (let i = 0; i < 5; i++) {
// 	console.log("wyświetlenie " + i);
// }

// let number = 0;
// while (number < 5) {
// 	number++;
// 	console.log(number);
// }

// let money = 50;
// while (money >= 8) {
// 	console.log("Mam jeszcze " + money + " złotych. To pijemy!");
// 	money -= 8;
// }
// alert(`za ${money} złote, już piwka nie kupie!`);

// let gasoline = 10;
// let km = 0;

// while (gasoline--) {
// 	km += 18;
// 	console.log(
// 		"Przejechaliśmy " +
// 			km +
// 			" kilometrów. Zostało nam jeszcze " +
// 			gasoline +
// 			" litrów benzyny"
// 	);
// }

const usersAge = [19, 18, 15, 45, 34, 33, 25];
for (let i = 0; i < usersAge.length; i++) {
	console.log(`wiek użytkownika numer ${i} to ${usersAge[i]}`);
}
