


const fullName = document.querySelector('#fullName');
const logEmail = document.querySelector('#logEmail');
const logPass = document.querySelector('#logPass');
const logBtn = document.querySelector('#logBtn');
const logMsg = document.querySelector('#logMsg');
const regName = document.querySelector('#regName');
const regDate = document.querySelector('#regDate');
const regEmail = document.querySelector('#regEmail');
const regPass = document.querySelector('#regPass');
const regBtn = document.querySelector('#regBtn');
const regMsg = document.querySelector('#regMsg');




const users = [
    {
        id:1,
        fullName:'Orxan',
        date: '17.11.2005',
        phone: '0507894199',
        email:'orxan@email.com',
        password:123

    } , 
    {
        id:2,
        fullName:'Rustam',
        date: '17.11.1977',
        phone: '0773909044',
        email:'r@email.com',
        password:1235
    }
];




logBtn.addEventListener('click', () => {
    if (logEmail.value != '' && logPass.value != '') {
        const checkEmail = users.find(user => user.email == logEmail.value)
        console.log(checkEmail);
        if (checkEmail) {
            if (checkEmail.password == logPass.value) {
                 logMsg.innerHTML = 'Log in is succesfull'
                fullName.innerHTML = checkEmail.fullName
            } else {
                logMsg.innerHTML = 'Wrong Password'
            }
        } else {
            logMsg.innerHTML = 'Wrong Email or Password'
        }
    } else {
        logMsg.innerHTML = 'Fill the bars'
    }
})



