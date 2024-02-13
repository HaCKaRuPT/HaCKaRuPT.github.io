
const activePage = window.location.pathname;
console.log(`${activePage}`);
const navlinks = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    };
});

const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

const newButton = document.createElement('button');
newButton.textContent = 'Go to the top';
const res = document.querySelector('div#btn-top')
res.appendChild(newButton);


const button = document.querySelector('button');
button.addEventListener('click', goToTop);
