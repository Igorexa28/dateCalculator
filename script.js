// const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

document.querySelector('#calcBtn').addEventListener('click', function() {
    let regExp = /^([0-2^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    const birthdays = document.getElementsByName('dateOfBirth');

    const [firstBirthday, secondBirthday] = birthdays;

    let firstDate = firstBirthday.value, secondDate = secondBirthday.value;

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

        console.log(`Sum: ${sum}.`);
    } else {
        alert('Please, enter a valid data');
    }


});

document.querySelector('#resetBtn').addEventListener('click', function() {
    const birthdays = document.getElementsByName('dateOfBirth');

    const [firstBirthday, secondBirthday] = birthdays;

    firstBirthday.value = '', secondBirthday.value = '';
});

document.querySelector('#calcBtn2').addEventListener('click', function() {
    const name = document.getElementById('userName');

    if ( name.value.length === 0 ) {
        console.error(`%cYou didn't enter the data.`, "color: green");
    } else {
        console.log(name.value );
    }
});

document.querySelector('#resetBtn2').addEventListener('click', function() {
    document.getElementById('userName').value = '';
});

// * This is an implementation of recursive function to find the sum of all digits 

function recursiveSum(string) {
    const numbers = string.map((element) => +element);
    let sum = numbers.reduce( (total, current) => total + current, 0);

    if (sum.toString().length < 2) {
        return sum;
    } else {
        return recursiveSum(sum.toString().split(''));
    }
}

// * This is a hard-code implementation of function to find sum of all digits

function sumOfDigits(dateOfBirth) {
    const filteredArray = dateOfBirth.split('').filter((element) => element !== '/');
    const digits = filteredArray.map( (element) => +element );

    let firstSum = digits.reduce( (total, current) => total + current, 0);
    let lengthSum = firstSum.toString().length;

    if (lengthSum > 1) {
        let secondSum = firstSum.toString().split('').map((element) => +element).reduce( (total, current) => total + current, 0 );
        let secondLength = secondSum.toString().length;

        if (secondLength > 1) {
            let thirdSum = secondSum.toString().split('').map((element) => +element).reduce( (total, current) => total + current, 0);
            let thirdLength = secondSum.toString().length;

            if (thirdLength > 1) {
                let fourthSum = thirdSum.toString().split('').map((element) => +element).reduce( (total, current) => total + current, 0);

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

