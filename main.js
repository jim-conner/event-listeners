const button = document.querySelector('#main-btn');
const button2 = document.querySelector('#other-btn');
const container = document.querySelector('#container')

// button.addEventListener('click', (event) => {
//   console.log(`YOU CLICKED ON ${event.target.id}!`);
//   // console.log(event);
// })

const whatIsTheId = (event) => {
  console.log(`YOU CLICKED ON ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
  }else {
    container.innerHTML ='You clicked the OTHER BUTTON'
  }
}

button.addEventListener('click', whatIsTheId);

// *********** create a new selector

//moved other-btn to top to stick with convention
button2.addEventListener('click', whatIsTheId);
