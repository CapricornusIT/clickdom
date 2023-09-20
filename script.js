const thColor = document.querySelectorAll('th')
for (let i = 0; i < thColor.length; i++) {
    thColor[i].style.background = 'grey'
}

const trColor = document.querySelectorAll('.color');
for (let i = 0; i < trColor.length; i++) {
    trColor[i].addEventListener('mouseover', function(){
        this.style.background = 'orange'
    })
    trColor[i].addEventListener('click', function(){
        this.style.background = 'green'
    })
    trColor[i].addEventListener('mouseout', function(){
        this.style.background = 'none'
    })
}

// const tdText = document.querySelector('.color')
// const span = document.querySelector('span')
// for (let i = 0; i < tdText.length; index++) {
//     tdText[i].addEventListener('click', function(){
//         span.textContent = 
//     })
// }

// const ul = document.querySelectorAll('ul>li>span')

// document.querySelector('.table').onclick = function (event) {
//     let result = [...event.target.parentNode.children]
//     let text = getResult(result)
//     tabletdText(text)
// }

// function getResult(tdText) {
//     return tdText.map(item => item.textContent)
// }

// function tabletdText(text) {
//     text.forEach((item, index) => ul[index].textContent = item);
// }

