// window.addEventListener('scroll', (e) => {
//   document.querySelector('header').style.background = window.scrollY > 100 ? '#fff' : 'transparent';
// });

const work = () => {
  const html = (array) => {
    const div = document.createElement('a');
    div.href = array.href;
    // div.target = '_blank';
    div.classList.add('card');
    div.style.backgroundColor = array.background_color;
    div.innerHTML = `
          <img src="${array.thumbnail}" alt="" class="" />
          <div class="card__menu"></div>
          `;
    return div;
  };
  const array = [
    { thumbnail: './src/img/5.png', background_color: '#ff6683', href: './404.html' },
    { thumbnail: './src/img/3.jpg', background_color: '#ff5b35', href: './404.html' },
    { thumbnail: './src/img/4.png', background_color: '#a080df', href: './404.html' },
    { thumbnail: './src/img/2.png', background_color: '#80dfd4', href: './404.html' },
  ];
  array.forEach((element) => document.querySelector('.section__content--work').appendChild(html(element)));
};
work();

document.querySelector('#year').innerText = new Date().getFullYear();

// if (matchMedia('prefers-color-sheme: dark').matches) console.log('ok');

document.querySelector('.h__mail').addEventListener('click', (e) => {
  const notification = document.querySelector('.notification');
  let text;
  let bg;

  try {
    navigator.clipboard.writeText(e.target.innerText);
    text = 'Copied to clipboard';
    bg = 'greenyellow';
  } catch (error) {
    text = 'An error ocoured';
    bg = red;
  }
  notification.innerText = text;
  notification.style.backgroundColor = bg;
  notification.setAttribute('data-visible', true);

  setTimeout(() => notification.setAttribute('data-visible', false), 1500);
});
