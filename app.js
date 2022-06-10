const reviews = [
    {
        id:1,
        name:'Diana Smith',
        job: 'DevOps Engineer',
        img: 'image/img0.webp',
        text: ' Hello, I am Diana. I work at microsot azure and cloud services. I am a backend engineer with 14years of experience. I recommend this site for all the services you want. Yeeeeehaawwwww!!'
    },
    {
        id:2,
        name:'Adam Groff',
        job: 'Cloud Engineer',
        img: 'image/img1.webp',
        text: ' Hello, I am Adam Groff. I work at microsot azure and cloud services. I am a cloud engineer with 14years of experience. I recommend this site for all the services you want. Wheeeeeeew!!'
    },
    {
        id:3,
        name:'Happy Chase',
        job: 'Full Stack Software Dev',
        img: 'image/img2.webp',
        text: ' Hello, I am Happy Chase. I work at microsot azure and cloud services. I am a cloud engineer with 14years of experience. I recommend this site for all the services you want. Yooooooo!!'
    },
    {
        id:4,
        name:'David Blaine',
        job: 'React Developer',
        img: 'image/img4.png',
        text: ' Hello, I am David Blaine. I work at microsot azure and cloud services. I am a cloud engineer with 14years of experience. I recommend this site for all the services you want. I aint doing that...'
    }
];

//selecting items
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('#left');
const nextBtn = document.querySelector('#right');
const randomBtn = document.querySelector('.random-btn');

//set staring item

let currentItem = 0;

//load initial item

window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
})

//show person based on item

function showPerson(person) {
    const item =reviews[person];
    img.src = reviews[currentItem].img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//next
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})