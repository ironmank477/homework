const userYearBirth = +prompt('What is your year on birth?');
const userCity = prompt('What city do your live in in?');
const userSport = prompt('What is your favorite sport?');
const now = new Date();
const userAge = now.getFullYear() - userYearBirth;


if (userCity === "Kyiv") {
    alert(`Your age, ${userAge}\n
           You live in the capital of Ukraine\n
            ${userSport}\n`);
} else if (userCity === "London") {
    alert(`Your age, ${userAge}\n
           You live in the capital of United Kingdom\n
            ${userSport}\n`);
} else if (userCity === "Washington") {
    alert(`Your age, ${userAge}\n
           You live in the capital of USA\n
            ${userSport}\n`);
} else {
    alert(`Your age, ${userAge}\n
You live in the city ${userCity}\n
${userSport}\n`);
}



// World Champion football Lionel Messi
// World Champion boxing Alexander Usik
// World Champion tennis Jannik Sinner
