 let p1 = document.getElementById('pro1')
 let p2 = document.getElementById('pro2')
 let p3 = document.getElementById('pro3')

 let h11 = document.getElementById('h1')
 let h22 = document.getElementById('h2')
 let h33 = document.getElementById('h3')

 let projectHeader = document.getElementById('projHeader')
 let moreColor = document.getElementsByClassName('color')


 h11.addEventListener('mousedown', () => {
    if ( p1.style.display === 'none'){
        p1.style.display = 'block';
        projectHeader.style.marginBottom = '3rem'
    } else {
        p1.style.display = 'none';
    } })
 
 h22.addEventListener('click', () => {
    if ( p2.style.display === 'none'){
        p2.style.display = 'block';
        projectHeader.style.marginBottom = '3rem'
    } else {
        p2.style.display = 'none';
    } })
 
 h33.addEventListener('click', () => {
    if ( p3.style.display === 'none'){
        p3.style.display = 'block';
        projectHeader.style.marginBottom = '3rem'
    } else {
        p3.style.display = 'none';
    } })

    // function open1() {
//     p1.style.display = 'block';
//     projectHeader.style.marginBottom = '3rem'

// }
// function close1() {
//     p1.style.display = 'none';
// }

//  h11.addEventListener('click', close1)
///////////////////////////////////////////////////
//  function open2() {
//     p2.style.display = 'block';
//     projectHeader.style.marginBottom = '3rem'
// }
// function close2() {
//     p2.style.display = 'none';
// }
//  h22.addEventListener('click', open2)
//  h22.addEventListener('mousedown', close2)
//  //////////////////////////////////////////////////
//  function open3() {
//     p3.style.display = 'block';
//     projectHeader.style.marginBottom = '3rem'
// }
// function close3() {
//     p3.style.display = 'none';
// }
//  h33.addEventListener('click', open3)
//  h33.addEventListener('mousedown', close3)

//  function headerMarginGrow(){
//     projectHeader.style.marginBottom = '3rem'
//  }