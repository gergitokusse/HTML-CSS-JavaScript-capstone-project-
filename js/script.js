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
  speakerName: 'solom SoKa',
  speakerImage: './imgs/users/solomon.jfif',
  speakerBiograph: {
    education: 'Computer Scince @ University of Gondar',
    description: 'Some versions of Microsoft Word also document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
},
{
  speakerName: 'Aby Ahmed',
  speakerImage: './imgs/users/Abiy-Ahmed.jpg',
  speakerBiograph: {
    education: 'Computer Scince @ University of Gondar',
    description: 'Some versions of Microsoft Word ment and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
},
{
  speakerName: 'Atse Tewdrose',
  speakerImage: './imgs/users/atstewdrose.jfif',
  speakerBiograph: {
    education: 'Computer Scince @ University of Gondar',
    description: 'Some versions of Microsoft Word also document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
},
{
  speakerName: 'Dawite Gebeyehu',
  speakerImage: './imgs/users/dawit.jfif',
  speakerBiograph: {
    education: 'Computer Scince @ University of Gondar',
    description: 'Some versions of Microsoft Word ment and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
},
{
  speakerName: 'Abebe Kindie',
  speakerImage: './imgs/users/index.jpg',
  speakerBiograph: {
    education: 'Computer Scince @ University of Gondar',
    description: 'Some versions of Microsoft Word ment and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
},
{
  speakerName: 'Wendfraw Manaye',
  speakerImage: './imgs/users/gg.jpg',
  speakerBiograph: {
    education: 'Computer Scince @ University of Gondar',
    description: 'Some versions of Microsoft t type it in your Word document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
},
];
const speakercontent = document.querySelector('.feature-speaker-content');
let x = 0;
for (let i = 0; i < featuerspeaker.length; i++) {
  // to add view more in mobile verision
  if (x >= 2) {
    const viewmore = document.createElement('div');
    viewmore.className = 'user-info-view-more';
    viewmore.innerHTML = '<h4>MORE <span>⩒</span></h4>';
    speakercontent.appendChild(viewmore);
    x = -4;
  }
  x++;
  const userinfo = document.createElement('div');
  userinfo.className = 'user-info';
  if (i >= 2) {
    userinfo.classList.add('user-info-hide');
  }
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

// to view more the hidden content in mobile vew about speaker content
const viewMorecontent = document.querySelector('.user-info-view-more');
viewMorecontent.addEventListener('click', () => {
  viewMorecontent.classList.replace('user-info-view-more', 'non-visible');
  const hideMoreview = document.createElement('dav');
  hideMoreview.className = 'hide-more-view';
  hideMoreview.innerHTML = '<h4>Hide <span>⩑</span></h4>';
  speakercontent.appendChild(hideMoreview);

  const showuserinf = document.querySelectorAll('.user-info-hide');
  for (let f = 0; f < showuserinf.length; f++) {
    showuserinf[f].classList.replace('user-info-hide', 'visible');
  }
  // to hide listed view
  const hideListview = document.querySelector('.hide-more-view');
  hideListview.addEventListener('click', () => {
    hideListview.classList.replace('hide-more-view', 'non-visible');
    const hideuserinf = document.querySelectorAll('.visible');
    for (let f = 0; f < hideuserinf.length; f++) {
      hideuserinf[f].classList.replace('visible', 'user-info-hide');
    }
    viewMorecontent.classList.replace('non-visible', 'user-info-view-more');
  });
});