const nav = document.querySelector('nav');
let indicator = document.querySelector('.indicator');
let review = document.querySelector('.cards');




const arrow = document.getElementById('arrow');
arrow.addEventListener('click' , () => {
    scrollTo({
        top:0 ,
        behavior:"smooth"
    })
    event.preventDefault()
})
window.onscroll = function() {
    let scroll1 = scrollY;
    
    if (scroll1 > 10) {
        nav.style= `background: rgba( 58, 205, 255, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4.5px );
-webkit-backdrop-filter: blur( 4.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );`;
        nav.style.position= 'fixed';
        nav.style.width= '80%';
        nav.style.top= '0';
        nav.style.padding= '12px 200px';
        nav.style.borderRadius= '25px';
        nav.style.margin= '15px 10%';
        arrow.style.transform= 'translateX(3%)'
   
        


    } else if(scroll1 <= 10) {
        nav.style.background= 'none';
        arrow.style.transform= 'translateX(1000%)'
        nav.style.position= 'relative';
        nav.style= `
            display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 25px;
    z-index: 999;`;
    
    }
    let DocumentHeight = document.body.offsetHeight;
    let viewportHeight = window.innerHeight;


    let percentageScrolled = scrollY / (viewportHeight -  DocumentHeight ) * 100 ;
    indicator.style.width= Math.abs(percentageScrolled) + '%' ;    
    let x = (-scrollY) + 'px';

    review.style= `
    transform: translateX(${ x  } );`;

}




  

const slide = document.querySelector(".logos");


while (slide.children.length < 20 ) {
    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
}

const teacher = document.querySelector(".teacher-cards");


while (teacher.children.length < 6 ) {
    var copy = document.querySelector(".tcard1").cloneNode(true);
    teacher.appendChild(copy);
}

var copy = document.querySelector(".n0").cloneNode(true);
document.querySelector(".cards").appendChild(copy);
var copy = document.querySelector(".n1").cloneNode(true);
document.querySelector(".cards").appendChild(copy);
var copy = document.querySelector(".n2").cloneNode(true);
document.querySelector(".cards").appendChild(copy);
var copy = document.querySelector(".n3").cloneNode(true);
document.querySelector(".cards").appendChild(copy);
var copy = document.querySelector(".n4").cloneNode(true);
document.querySelector(".cards").appendChild(copy);
