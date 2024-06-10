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

// const usersAge = [19, 18, 15, 45, 34, 33, 25];
// for (let i = 0; i < usersAge.length; i++) {
// 	console.log(`wiek użytkownika numer ${i + 1} to ${usersAge[i]}`);
// }

// const userDateBirth = [2000, 1992, 1932, 1980];
// const currentYear = 2018;

// for (let i = 0; i < userDateBirth.length; i++) {
// 	const userAge = currentYear - userDateBirth[i];
// 	console.log(`wiek użytkownika numer ${i + 1} to ${userAge}`);
// }

// const guest = [
// 	"piłkarz",
// 	" kucharz",
// 	" pisarz",
// 	"magazynier",
// 	"piosenkarz",
// 	"programista",
// 	"informatyk",
// 	"polityk",
// ];

// for (let i = 0; i < guest.length; i++) {
// 	if (guest[i] === "programista") {
// 		console.log("Nie ma juz miejsc Panie " + guest[i] + " przepraszamy!");
// 	} else if (guest[i] === "pisarz") {
// 		console.log("Nie podawać alkoholu " + guest[i] + " jutro mecz!");
// 	} else if (guest[i] === "magazynier") {
// 		console.log("Schować wszystkie paczki bo wszystko ułoży!");
// 	} else {
// 		console.log(`Witamy Panie ${guest[i]}, zapraszamy!`);
// 	}
// }

// let sum = 0;

// for (let i = 0; i <= 100; i++) {
// 	if (i % 2 === 0) {
// 		sum += i;
// 	}
// }
// console.log("Suma wszystkich liczb nieparzystych wynosi", sum);

// let h = 50;

// for (let i = 0; i <= h; i++) {
// 	let stars = "";

// 	for (let j = 0; j <= i; j++) {
// 		stars += "*";
// 	}
// 	console.log(stars);
// }

// let counter = 0;
// let number = 1;

// while (number <= 50) {
// 	if (number % 3 === 0) {
// 		counter++;
// 	}
// 	number++;
// }
// console.log(
// 	"ilość liczb podzielnych przez 3 w przedziale od 1 do 50 wynosi:",
// 	counter
// );

// function message(x, y, z) {
// 	return x + y * z;
// }

// const showMeText = (text) => {
//     console.log(text);
// }

// showMeText("elo!")

// const divideBy = function (number) {
// 	console.log(number / 2);
// };

// const result = divideBy(10);

// let number = 0;
// const add = function () {
// 	number++;
// 	// console.log(number);
// };

// const divideBy3 = function (number) {
// 	return number / 3;
// };

// const result2 = divideBy3(9);

// const divideBy5 = function (number) {
// 	result = number / 5;
// 	console.log(result);
// 	return result;
// };

// const showMyName = function () {
// 	console.log("Bartek");
// };

// const showUserName = function (userName) {
// 	console.log(userName);
// };

// showUserName("Franek");

// function showInfoAboutUser(age, name, sex) {
// 	if (arguments.length === 0) {
// 		console.log("Nie mam żadnych informacji o tym użytkowniku");
// 	} else if (arguments.length === 1) {
// 		console.log(`Użytkownik ma ${age} lat.`);
// 	} else if (arguments.length === 2) {
// 		console.log(`Użytkownik ma ${age} lat i ma na imię ${name}.`);
// 	} else if (arguments.length === 3) {
// 		console.log(`Użytkownik ma ${age} lat i ma na imię ${name} i jest ${sex}`);
// 	}
// }

// function showUsers(owner, ...others) {
// 	console.log(
// 		`Na imprezie był ${owner} ${others.length ? "oraz " + others + "." : "."}`
// 	);
// }
// showUsers("Maciek", "Janek");
// ==================================================================================================
// function calculateAverage(numbers) {
// 	let sum = 0;
// 	for (let i = 0; i < numbers.length; i++) {
// 		sum += numbers[i];
// 	}
// 	let average = sum / numbers.length;
// 	return average;
// }

// let result = calculateAverage([1, 2, 3, 4, 5]);
// console.log(result);

// function filterEvenNumbers(numbers) {
// 	let evenNumbers = [];
// 	for (let i = 0; i < numbers.length; i++) {
// 		let number = numbers[i];
// 		if (number % 2 === 0) {
// 			evenNumbers.push(number);
// 		}
// 	}
// 	return evenNumbers;
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// const countOccurrences = function(array, element) {
//     let count = 0;

//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === element) {
//         count++;
//       }
//     }

//     return count;
//   }

//   console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana"));

// let global = "global";

// if (true) {
// 	let example1 = "example1";
// 	console.log(example1);

// 	if (true) {
// 		example1 = "example2";
// 		console.log(example1);
// 	}
// 	console.log(example1);
// 	console.log(global);
// }
// console.log(global);
