const descriptionOfCouple = [
    'Единица. Главное для такого союза – действовать вместе. Здесь выявляется внутренний потенциал друг друга. Такие отношения помогают общему развитию. Нельзя забывать, единица – это число лидера, поэтому могут быть недоразумения из-за деления власти в отношениях. Могут появиться ссоры и выяснения отношений, поэтому одному из партнёров просто необходимо научиться подчиняться другому, тогда и семейная жизнь, и бизнес будут более гармоничными.',
    'Двойка. Такая пара держится на материальной основе. Людям очень нравится общаться друг с другом, но они в основном это делают из-за прибыли, потому что вместе им везёт. Нельзя отрицать и того, что со временем может получиться семья с хорошим достатком. Здесь тоже всё будет стабильно. Но даже если Вы просто ведёте бизнес, Ваша фирма будет процветать. Надо помнить, что двойка является земной цифрой, поэтому ей не свойственны яркие чувства.',
    'Тройка. Основные составляющие этого союза – умение общаться и быть непостоянными. Скучно здесь не будет. Хочется заметить, что уместнее в данном случае будут дружеские отношения, так как в семье с этой цифрой возникает холодность. Даются друг другу обещания и не выполняются. Могут быть измены с обеих сторон. Это, пожалуй, самое сложное число для совместимости.',
    'Четвёрка. Организованность, размеренность, постоянство, комфорт – составляющие данного союза. Семья будет излучать тепло и благополучие. Теплота в отношениях делает их искренними. Чрезмерная энергия может мешать деловой жизни пары. Здесь главное – это духовное обогащение, получение новых впечатлений, но неспособность увеличения капитала.',
    'Пятёрка. Один из самых сексуальных союзов, где кипят страсти. Партнёры доставляют друг другу много приятных моментов. Всё основано только на любви. Но это пара эгоистов. Надо научиться не только слушать, но и слышать друг друга, тогда всё будет хорошо и в семье появятся счастливые дети. Избыток энергии может быть направлен на любую отрасль в бизнесе и достаточно успешно.',
    'Шестёрка. Взаимопомощь и партнёрство – вот главные звенья этой пары. Это тоже земное число, поэтому и отношения бывают длительными. Для ведения бизнеса просто идеальный вариант. В семье – спокойствие, дружба, очень редко – выяснение отношений. Чувства могут угаснуть, а поддержка друг друга останется.',
    'Семёрка. Основа этого союза – гармония. Партнёры умеют договариваться. Нельзя не заметить, что здесь могут забывать о выполнении договорных обязательств. Хотя скандалы практически не наблюдаются, помогает чувство такта, которое не доводит до разрыва отношения. Такие союзы довольно успешны. Совместно решаются все проблемы, как семейные, так и материальные.',
    'Восьмёрка. В этой паре наблюдается некоторая странность, даже можно сказать – нестандартность. Людей сильно тянет друг к другу. Один партнёр, благодаря такому влечению, может подталкивать другого, тем самым помогая ему реализоваться в бизнесе. Но здесь может появиться внутреннее неудовлетворение , если первый поймёт, что его в чём-либо использует из чувства корысти второй.',
    'Девятка. Самая философская пара. Если в материальном плане здесь всё будет благополучно – перед нами идеальная пара. Ну а при слабом финансовом положении отношения дают трещину. Поэтому здесь лучше дружить, а не создавать семейный союз, так как быт может поглотить обоих и развести в разные стороны. Если же всё-таки брак имеет место, то обязательно кто-то из партнёров должен брать на себя многие бытовые проблемы.'
];

const pathsToImages = [
    'firstCouple', 'secondCouple', 'thirdCouple', 'fourthCouple',
    'fifthCouple', 'sixthCouple', 'seventhCouple', 'eigthCouple', 'ninthCouple'
];

const groupOfLetters = [
    ['а', 'и', 'с', 'ъ'], ['б', 'й', 'т', 'ы'], ['в', 'к', 'у', 'ь'],
    ['г', 'л', 'ф', 'э'], ['д', 'м', 'х', 'ю'], ['е', 'н', 'ц', 'я'],
    ['ё', 'о', 'ч'], ['ж', 'п', 'ш'], ['з', 'р', 'щ']
];

document.querySelector('#calcBtn').addEventListener('click', function () {
    let regExp = /^([0-2^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    const birthdays = document.getElementsByName('dateOfBirth');

    const [firstBirthday, secondBirthday] = birthdays;

    let firstDate = firstBirthday.value,
        secondDate = secondBirthday.value;

    if (firstDate.length === 0 || secondDate.length === 0) {
        alert('All the fields should be filled.')
    }

    let checkFirstDate = regExp.test(firstDate),
        checkSecondDate = regExp.test(secondDate);

    if (checkFirstDate && checkSecondDate) {
        let digitsOfFirstBirthday = firstDate.split('').filter((element) => element !== '/'),
            digitsOfSecondBirthday = secondDate.split('').filter((element) => element !== '/');

        let firstSum = recursiveSum(digitsOfFirstBirthday),
            secondSum = recursiveSum(digitsOfSecondBirthday);

        let sum = firstSum + secondSum;

        // TODO: Create right paths to images and after place on the page with description.

        console.log(`Sum: ${sum}.`);
        console.log(descriptionOfCouple[sum - 1]);
        console.log(pathsToImages[sum - 1]);
    } else {
        alert('Please, enter a valid data');
    }

});

document.querySelector('#resetBtn').addEventListener('click', function () {
    const birthdays = document.getElementsByName('dateOfBirth');

    const [firstBirthday, secondBirthday] = birthdays;

    firstBirthday.value = '', secondBirthday.value = '';
});

document.querySelector('#calcBtn2').addEventListener('click', function () {
    const name = document.getElementById('userName');

    if (name.value.length === 0) {
        console.error(`%cYou didn't enter the data.`, "color: green");
    } else {
        console.log(name.value);
    }

    let lowerCaseName = (name.value.toLowerCase()).split('');

    console.log(lowerCaseName);

    let sum = 0;

    for (let index = 0; index < groupOfLetters.length; index++) {
        let subArray = groupOfLetters[index];

        for (let j = 0; j < lowerCaseName.length; j++) {
            let char = lowerCaseName[j];

            if (subArray.includes(char)) {
                sum = sum + (index + 1);
            }
        }
    }

    let arrayString = sum.toString().split(''),
        numberOfPair = recursiveSum(arrayString);

    // TODO: Create right paths to images and after place on the page with description.

    console.log("Your num: "  + numberOfPair);
    console.log(descriptionOfCouple[numberOfPair - 1]);
    console.log(pathsToImages[numberOfPair - 1]);
});

document.querySelector('#resetBtn2').addEventListener('click', function () {
    document.getElementById('userName').value = '';
});

// * This is an implementation of recursive function to find the sum of all digits 

function recursiveSum(string) {
    const numbers = string.map((element) => +element);
    let sum = numbers.reduce((total, current) => total + current, 0);

    if (sum.toString().length < 2) {
        return sum;
    } else {
        return recursiveSum(sum.toString().split(''));
    }
}

// * This is a hard-code implementation of function to find sum of all digits

function sumOfDigits(dateOfBirth) {
    const filteredArray = dateOfBirth.split('').filter((element) => element !== '/');
    const digits = filteredArray.map((element) => +element);

    let firstSum = digits.reduce((total, current) => total + current, 0);
    let lengthSum = firstSum.toString().length;

    if (lengthSum > 1) {
        let secondSum = firstSum.toString().split('').map((element) => +element).reduce((total, current) => total + current, 0);
        let secondLength = secondSum.toString().length;

        if (secondLength > 1) {
            let thirdSum = secondSum.toString().split('').map((element) => +element).reduce((total, current) => total + current, 0);
            let thirdLength = secondSum.toString().length;

            if (thirdLength > 1) {
                let fourthSum = thirdSum.toString().split('').map((element) => +element).reduce((total, current) => total + current, 0);

                return fourthSum;
            } else {
                return thirdSum;
            }

        } else {
            return secondSum;
        }

    } else {
        return firstSum;
    }
}