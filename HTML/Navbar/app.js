const dot=document.querySelector('.Mobeldisplay');
const list=document.querySelector('.List');
const navLinks=document.querySelectorAll('.Navlinks')

const display =()=>{
    dot.addEventListener('click',()=>{
        list.classList.toggle('List-active');
        navLinks.forEach((link,index) =>{
            link.classList.add('Navlinks-active');
      });
    });

    
}

display();