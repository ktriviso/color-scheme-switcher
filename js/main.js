(function colorSwitcher () {


    const page = document.querySelector('body')
    const buttons = document.querySelectorAll('.switcher li a')

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            let color = this.getAttribute('data-color')
            page.style.backgroundColor = color
        })
    }
    //old code, too long winded

    // const red = document.querySelector('.red').addEventListener('click', changeRed)
    // const white = document.querySelector('.white').addEventListener('click', changeWhite)
    // const blue = document.querySelector('.blue').addEventListener('click', changeBlue)
    // const yellow = document.querySelector('.yellow').addEventListener('click', changeYellow)

    // function changeRed(){
    //     page.style.backgroundColor = 'red'
    // }
    // function changeWhite(){
    //     page.style.backgroundColor = 'white'
    // }
    // function changeBlue(){
    //     page.style.backgroundColor = 'blue'
    // }
    // function changeYellow(){
    //     page.style.backgroundColor = 'yellow'
    // }

})()
