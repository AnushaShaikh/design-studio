let box = document.getElementById('box');
let bg = document.getElementById('bg');
let color = document.getElementById('color');
let heading = document.getElementById('heading');
let paragraph = document.getElementById('paragraph');
let image = document.getElementById('image');
let borderradius = document.getElementById('borderradius');
let  height= document.getElementById('height');
let width = document.getElementById('width');




let img = document.querySelector('img');
let h1 = document.querySelector('h1');
let p= document.querySelector('p');


function bgcolor(){
box.style.background = bg.value
}

function fontcolor(){
box.style.color= color.value
}

function imageurl(){
img.src = image.value
}

function headinginp(){
    h1.innerHTML = heading.value
}

 function parainp(){
 p.innerHTML = paragraph.value
 }

 function br(){
   box.style.borderRadius=borderradius.value
 }
            
 function widthinp(){
    box.style.width=width.value
  }

  function heightinp(){
    box.style.height=height.value
  }


