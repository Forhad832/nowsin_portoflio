var text = new Typed('#mytitle', {
	strings: ["Graphics Designer", "Banner Designer", "Logo Designer", "T-Shirt Designer"],
	loop: true,
	typeSpeed: 100,
});



const showHaradSkill = () => {
	const hardSkillContainer = document.getElementById('hardSkillContainer');
	services.map((skill) => {
		const newDiv = document.createElement('div');
		newDiv.classList.add('shadow-2xl');
		newDiv.classList.add('bg-pink-500')
		newDiv.classList.add('p-5');
		newDiv.classList.add('rounded-lg');
		newDiv.innerHTML = `
        <h3 class="text-lg lg:text-2xl font-medium mb-3 text-white">${skill.text}</h3>
        `;
		hardSkillContainer.appendChild(newDiv)
	})
};
showHaradSkill();


document.getElementById('bar').addEventListener('click', function() {
	const nav_content = document.getElementById('nav_content');
	nav_content.classList.toggle('opactity')
});





const Allbrand = [...new Set(works.map((item) => item.category))];

console.log(Allbrand);
const Btn = () => {
	const mainButton = document.getElementById('mainButton');
	Allbrand.map((btn) => {
		const newBtn = document.createElement('div');
		newBtn.innerHTML =
			`
        <button onclick="categoryButton('${btn}')" class="bg-[#150f2d] w-full px-5 py-2 rounded-lg" >${btn}</button>
        `;
		mainButton.appendChild(newBtn)
	})
};

function categoryButton(btn) {
	console.log(btn);
	const newItems = categories.filter((work) => work.category === btn);



	allWorkImage(newItems);
	document.getElementById('showAllBtn').style.display = 'none'
}

Btn()

const categories = [...new Set(works.map((item) => {
	return item
}))]
// work javascript code start here
const allWorkImage = (items) => {

	document.getElementById('allWork').innerHTML =
		items.map((work) => {
			return (
				`<div class='project overflow-hidden'> 
            <img class='hover:scale-150 transition hover:duration-700 ease-in-out ' src="${work.image}" alt="project_image">
            </div>`
			);

		}).join('');


};


document.getElementById('showAllBtn').addEventListener('click', function() {
	let project = document.querySelectorAll('.project');


	project.forEach((ite) => {
		ite.classList.remove('project');
	})
	document.getElementById('showAllBtn').style.display = 'none'

});
allWorkImage(categories);




//team section js here
const showTeamMember = () => {
	const teamContainer = document.getElementById('teamContainer');
	Member.map((member) => {
		const newMemberDiv = document.createElement('div');
		newMemberDiv.innerHTML = `<div  class="p-4 transition-all hover:-translate-y-6 ease-in-out duration-300 text-center border-2 py-12 rounded-lg border-pink-500">
        <img class='w-32 mx-auto border-2 border-pink-500 mb-3 h-32 rounded-full' src=${member.image} alt="teamMembe_pictures">
        <h3 class="text-xl tracking-wider font-medium mb-3">${member.name}</h3>
        <p  class="text-sm tracking-widest font-normal text-gray-400">${member.job}</p>
    </div>
        
        `;
		teamContainer.appendChild(newMemberDiv)
	})
}
showTeamMember();


const recentWorks = () => {
	const recentWorkContainer = document.getElementById('recentWorkContainer');

	recent.map((work) => {
		const newRecenet = document.createElement('div');
		newRecenet.innerHTML =
			`
        <div class="p-8 relative h-full w-full ">
        <img  class="w-full" src="${work.img}" alt="recetn-work">
        
        <button id="btn" class='absolute bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-neutral-300 px-4 py-2   border-2 border-[#150f2d] top-[50%] left-[50%]  text-[#150f2d] flex items-center justify-center hover:border-0 hover:text-white rounded-md' onclick="aboutMore(${work.id})">About More...</button>
        </div>
        `;
		recentWorkContainer.appendChild(newRecenet);
	})
};


function aboutMore(id) {

	document.getElementById('popup').style.display = 'block';

	recent.map((item) => {

		if (item.id === id) {
			document.getElementById('img').src = item.img;
			document.getElementById('p_name').innerHTML = item.project;
			document.getElementById('p_text').innerHTML = item.text;
			document.getElementById('p_author').innerHTML = item.author;

		}
	})
};


document.getElementById('closebtn').addEventListener('click', function() {
	document.getElementById('popup').style.display = 'none';
})
recentWorks();


const swipperSlider = () => {
	document.getElementById('swipper_slider').innerHTML =
		clients.map((client) => {
			const {
				name,
				country,
				text,
				images
			} = client;
			return (

				`
            <div class="swiper-slide p-5">
            <div class="flex items-center mb-5 gap-5">
                <div>
                    <img class="w-12 h-12 rounded-full" src="${images}" alt="">
                </div>
                <div>
                    <h4 lang="text-lg font-medium">${name}</h4>
                    <p class="text-sm">${country}</p>
                </div>
            </div>
            <p>${text}</p>
          </div>
            `
			)
		}).join(' ')
};
swipperSlider()