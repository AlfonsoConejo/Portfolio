const experiences = [
    {
        title: 'ITAIH',
        description: 'Database administrator and Delphi programmer of an in-house correspondence system.',
        period: 'October 2021 - February 2022',
        photo: './images/Itaih.png'
    },
    {
        title: 'Mural Táctil',
        description: 'UI/UX Designer of a medical appointment and calendar website.', 
        period: 'October 2022 - December 2022',
        photo: './images/MuralTactil.jpg'
    }
];

const projects = [
    {
        title: 'Photo Gallery',
        description: 'Gallery of images of natural wonders across Latin America with responsive interface.',
        photo: './images/gallery.png'
    },
    {
        title: 'Calculator',
        description: 'Basic calcultar developed with JS (Currently in progress).', 
        photo: './images/calculator2.jpg'
    }
];

const cardsDiv = document.getElementById('experience');
const projectsDiv = document.getElementById('projects');

experiences.forEach((experience) => {
    const card = document.createElement('div');
    const template = `

    <div class="logo">
        <div class="card-image">
            <img draggable="false" src="${experience.photo}">
        </div>
    </div>
    <div class="description">
        <h2>${experience.title}</h2>
        <p class="job-description">${experience.description}</p>
        <p class="period"> Period: ${experience.period}</p>
    </div>
   `;

   card.innerHTML = template;
   card.classList.add("card");
   cardsDiv.append(card);
});

projects.forEach((project) => {
    const card = document.createElement('div');
    const template = `

    <div class="logo">
        <div class="card-image">
            <img draggable="false" src="${project.photo}">
        </div>
    </div>
    <div class="description">
        <h2>${project.title}</h2>
        <p class="job-description">${project.description}</p>
    </div>
   `;

   card.innerHTML = template;
   card.classList.add("card");
   projectsDiv.append(card);
});

