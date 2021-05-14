document.querySelector('#calcBtn').addEventListener('click', function(event) {
    const birthdays = document.getElementsByName('dateOfBirth');

    const [firstBirthday, secondBirthday] = birthdays;

    if (firstBirthday.value.length === 0 || secondBirthday.value.length === 0) {
        console.error(`%cYou didn't enter the data.`, "color: green");
    } else {
        console.log(firstBirthday.value + ' ' + secondBirthday.value);
    }
});

document.querySelector('#resetBtn').addEventListener('click', function(event) {
    const birthdays = document.getElementsByName('dateOfBirth');

    const [firstBirthday, secondBirthday] = birthdays;

    firstBirthday.value = '', secondBirthday.value = '';
});

document.querySelector('#calcBtn2').addEventListener('click', function(event) {
    const name = document.getElementsByName('userName');

    console.log(name);
    if ( name.value.length === 0 ) {
        console.error(`%cYou didn't enter the data.`, "color: green");
    } else {
        console.log(name.value );
    }
});

document.querySelector('#resetBtn2').addEventListener('click', function(event) {
    document.getElementsByName('userName').value = '';
});

