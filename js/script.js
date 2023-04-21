const humburger = document.querySelector('.humburger');
const mylogo = document.querySelector('.my-logo');
const navbar = document.querySelector('.nav_bar');
const clsbtn = document.querySelector('.close-btn');
humburger.addEventListener('click', () => {
  humburger.classList.replace('humburger', 'non-visible');
  mylogo.classList.replace('my-logo', 'non-visible');
  navbar.classList.replace('nav_bar', 'nav_bar_mobile');
});

clsbtn.addEventListener('click', () => {
  navbar.classList.replace('nav_bar_mobile', 'nav_bar');
  humburger.classList.replace('non-visible', 'humburger');
  mylogo.classList.replace('non-visible', 'my-logo');
});

// dynamic page for feature speaker
const featuerspeaker = [{
  speakerName: 'Yachaie Blanker',
  speakerImage: './imgs/users/gg.jpg',
  speakerBiograph: {
    education: 'Computer Scince @ University of Gondar',
    description: 'Some versions of Microsoft Word also document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
},
{
  speakerName: 'Yachaie Blanker',
  speakerImage: './imgs/users/index.jpg',
  speakerBiograph: {
    education: 'Computer Scince @ University of Gondar',
    description: 'Some versions of Microsoft Word ment and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
},
{
  speakerName: 'Yachaie Blanker',
  speakerImage: './imgs/users/gg.jpg',
  speakerBiograph: {
    education: 'Computer Scince @ University of Gondar',
    description: 'Some versions of Microsoft t type it in your Word document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
},
];
const speakercontent = document.querySelector('.feature-speaker-content');
for (let i = 0; i < featuerspeaker.length; i++) {
  const userinfo = document.createElement('div');
  userinfo.className = 'user-info';
  speakercontent.appendChild(userinfo);

  const userImage = document.createElement('img');
  userImage.src = featuerspeaker[i].speakerImage;
  userImage.alt = 'User Imgaes';
  userImage.className = 'user-image';
  userinfo.appendChild(userImage);

  const userbiograph = document.createElement('div');
  userbiograph.className = 'user-biograph';
  userinfo.appendChild(userbiograph);

  const speakerName = document.createElement('span');
  speakerName.innerHTML = featuerspeaker[i].speakerName;
  userbiograph.appendChild(speakerName);

  const speakereducation = document.createElement('p');
  speakereducation.className = 'education';
  speakereducation.innerHTML = featuerspeaker[i].speakerBiograph.education;
  userbiograph.appendChild(speakereducation);

  const span = document.createElement('span');
  span.className = 'span';
  userbiograph.appendChild(span);

  const speakereInfo = document.createElement('p');
  speakereInfo.innerHTML = featuerspeaker[i].speakerBiograph.description;
  userbiograph.appendChild(speakereInfo);
}