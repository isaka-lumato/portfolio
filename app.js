const Header = document.querySelector('.header');
const burger = document.querySelector('.humbergur');
const cancelIcon = document.querySelector('.cancelIcon');
const HTML = document.querySelector('html');
burger.addEventListener('click', () => {
  Header.classList.add('mobMenu');
  HTML.classList.add('newHTML');
});
cancelIcon.addEventListener('click', () => {
  Header.classList.remove('mobMenu');
  HTML.classList.remove('newHTML');
});

const menuLink = document.querySelectorAll('.menuLink');
menuLink.forEach((link) => {
  link.addEventListener('click', () => {
    Header.classList.remove('mobMenu');
    HTML.classList.remove('newHTML');
  });
});

const popUpData = [{
  id: 1,
  Heading: 'TONIC',
  imageUrl: 'imagesdesktop/tonic2-1.png',
  paraText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languageList: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
  button1Text: 'see live',
  button2Text: 'see source',
},
{
  id: 2,
  Heading: 'TONIC',
  imageUrl: 'imagesdesktop/tonic2-2.png',
  paraText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languageList: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
  button1Text: 'see live',
  button2Text: 'see source',
},
{
  id: 3,
  Heading: 'TONIC',
  imageUrl: 'imagesdesktop/tonic2-3.png',
  paraText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languageList: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
  button1Text: 'see live',
  button2Text: 'see source',
},
{
  id: 4,
  Heading: 'TONIC',
  imageUrl: 'imagesdesktop/tonic2-4.png',
  paraText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languageList: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
  button1Text: 'see live',
  button2Text: 'see source',
},

];

const cardContainer = document.querySelector('.cardContainer');
popUpData.forEach((project) => {
  const section = document.createElement('section');
  section.className = 'tonic2';
  section.innerHTML = `
          <img src="images/tonic.png" alt="tonic1" class="mob">
          <img src="imagesdesktop/tonic2-1.png" alt="tonic1" class="desk">
          <div class="card1">
            <h2 class="tonic3">${project.Heading}</h2>
            <ul class="ul2">
              <li class="can">CANOPY</li>
              <li class="li2">Back End Dev</li>
              <li class="li2">2015</li>
            </ul>
            <p>A daily selection of privately
              personalized reads; no accounts or sign-ups
              required.</p>
            <ul class="ul3">
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li class="deskRuby">Ruby on rails</li>
            </ul>

            <a href="#" class="see myButton">See Project</a>
          </div>
       
         `;

  cardContainer.appendChild(section);
});

function popUp(project) {
  const body = document.querySelector('body');
  const section = document.createElement('section');
  section.className = 'popup-container';
  section.innerHTML = ` 
        <section class="popup-window">
        <div class="popup-header">
            <h2 class="tonic3 tonic-head">Tonic  <span class="material-icons cancelPop"> close </span></h2>
            <ul class="pop-list1">
              <li class="can">CANOPY</li>
              <li class="li2">Back End Dev</li>
            <li class="li2">2015</li>
           </ul>
        </div>
        <div class="popup-img">
            <img src=${project.imageUrl} alt="project1">
        </div>
        <div class="popup-body">
            <p>${project.paraText}</p>
            <div class="pop-buttons">
                <ul class="progrm-l">
                ${project.languageList.map((link) => ` <li class="pop-lang">${link}</li>`).join('')}               
                </ul>
                <div class="pop-hr"></div>
                <div class="see-popup">
                    <a href="#"><span>${project.button1Text}</span><img src="Icon - Export.svg" alt="close3"></a>
                     <a href="#"><span>${project.button2Text}</span><img src="Icon - Export.svg" alt="close3"></a>
                </div>
            </div>

        </div>
    </section>
    `;
  body.appendChild(section);
  const cancelPopbtn = document.querySelector('.cancelPop');
  cancelPopbtn.addEventListener('click', () => {
    const body = document.querySelector('body');
    const popContainer = document.querySelector('.popup-container');
    body.removeChild(popContainer);
    const html = document.querySelector('html');
    html.classList.remove('htmlPopUp');
  });
}
const seeBtn = document.querySelectorAll('.myButton');
let btnID = 1;
seeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.id = btnID;
    btnID += 1;
    const getProject = popUpData.filter((data) => data.id === btnID);
    popUp(getProject[0]);
    const html = document.querySelector('html');
    html.classList.add('htmlPopUp');
  });
});
