//Theme Tab
const body = document.querySelector('body');
const tabs = document.querySelectorAll('[role="tab"]');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        changeTheme(e, index);
    });
})


function changeTheme(e, index) {
    const targettab = e.target;
    var i = index + 1;
    let themeClassName = `clr-theme-0${i} bg-main`;
    body.classList = themeClassName;

    tabs.forEach((tab) => {
        tab.style.opacity = '0';
    })
    targettab.style.opacity = '1';
}





//Keys Animation
const numberKeys = document.querySelectorAll('.s-key:not([role="delete"])');
const resetKeys = document.querySelectorAll('[role="delete"], [role="reset"]');
const equalKey = document.querySelectorAll('[role="equal"]');

const keysArray = [numberKeys, resetKeys, equalKey];


keysArray.forEach((element, index) => {
    element.forEach((key) => {

        key.addEventListener('click', (e) => {
            animateBoxShadow(e, index)
            calculation(e, index)
        })
    })
})


const keyAnimation = '250ms linear 1 forwards';
function animateBoxShadow(e, index) {
    const key = e.target;

    if (index == 0) {
        key.style.animation = `animateBoxShadowKeyGen ${keyAnimation}`;
    }
    else if (index == 1) {
        key.style.animation = `animateBoxShadowKeyReset ${keyAnimation}`;
    }
    else if (index == 2) {
        key.style.animation = `animateBoxShadowKeyEqual ${keyAnimation}`;
    }

    setTimeout(() => { key.style.animation = ''; }, 250);
}



//calculations
const display = document.querySelector('.display');

function calculation(e, index) {
    const tab = e.target;
    var value;
    var result;

    if (index == 0) {
        value = tab.value;
        if (display.innerHTML == '0') {
            display.innerHTML = '';
        }
        display.insertAdjacentText( 'beforeend', `${value}`);
    }
    else if (index == 1) {
        var role = tab.getAttribute('role');
        if (role == 'reset') {
            display.innerHTML = '0';
        }
        else if (role == 'delete') {
            value = display.innerHTML;
            value = value.slice(0, -1);
            display.innerHTML = value == '' ? '0' : value;
        }
    }
    else if (index == 2) {
        result = display.innerHTML;
        if (result.charAt(0) == '/' || 
            result.charAt(0) == '*' || 
            result.charAt(0) == 'e') 
        {
            display.innerHTML = 'error';
        }
        else {
            result = eval(display.innerHTML);
            display.innerHTML = result;
        }
    }
}

//-------------------------------------------------------//
