// const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

document.querySelector('#calcBtn').addEventListener('click', function(event) {
    const birthdays = document.getElementsByName('dateOfBirth');

    const [firstBirthday, secondBirthday] = birthdays;

    let firstDate = firstBirthday.value, secondDate = secondBirthday.value;

    if (firstDate.length === 0 || secondDate.length === 0) {
        console.error(`You did not enter the data.`);
    } else {
        console.log(firstDate + ' ' + secondDate);
    }

    let regExp = /^([0-2^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

    let checkFirstDate = regExp.test(firstDate), checkSecondDate = regExp.test(secondDate);

    console.log(checkFirstDate + ' ' + checkSecondDate);

    if (checkFirstDate && checkSecondDate) {
        alert('Success.');

        console.log(sumOfDigits(firstDate));
    } else {
        alert('Please, enter a valid data');
    }


});

document.querySelector('#resetBtn').addEventListener('click', function(event) {
    const birthdays = document.getElementsByName('dateOfBirth');

    const [firstBirthday, secondBirthday] = birthdays;

    firstBirthday.value = '', secondBirthday.value = '';
});

document.querySelector('#calcBtn2').addEventListener('click', function(event) {
    const name = document.getElementById('userName');

    if ( name.value.length === 0 ) {
        console.error(`%cYou didn't enter the data.`, "color: green");
    } else {
        console.log(name.value );
    }
});

document.querySelector('#resetBtn2').addEventListener('click', function(event) {
    document.getElementById('userName').value = '';
});

function sumOfDigits(dateOfBirth) {
    const filteredArray = dateOfBirth.split('').filter((element) => element !== '.' && element !== '/');
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

    return filteredArray;
}

