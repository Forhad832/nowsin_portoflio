var text = new Typed('#mytitle',{
    strings:["Graphics Designer","Banner Designer","Logo Designer","T-Shirt Designer"],
    loop:true,
    typeSpeed:100,
    });



const showHaradSkill = ()=>{
    const hardSkillContainer = document.getElementById('hardSkillContainer');
    services.map((skill)=>{
        const newDiv = document.createElement('div');
        newDiv.classList.add('shadow-2xl');
        newDiv.classList.add('bg-pink-500')
        newDiv.classList.add('p-5');
        newDiv.classList.add('rounded-lg');
        newDiv.innerHTML = `
        <h3 class="text-2xl font-medium mb-3 text-white">${skill.text}</h3>
        `;
        hardSkillContainer.appendChild(newDiv)
    })
};
showHaradSkill();


document.getElementById('bar').addEventListener('click', function(){
    const nav_content = document.getElementById('nav_content');
    nav_content.classList.toggle('opactity')
});





const Allbrand = [ ...new Set(works.map((item)=> item.category))];

console.log(Allbrand);
const Btn = () =>{
    const mainButton = document.getElementById('mainButton');
    Allbrand.map((btn)=>{
        const newBtn = document.createElement('div');
        newBtn.innerHTML = 
        `
        <button onclick="categoryButton('${btn}')" class="bg-pink-500 w-full px-5 py-2 rounded-lg" >${btn}</button>
        `;
        mainButton.appendChild(newBtn)
    })
};

function categoryButton(btn){
    console.log(btn);
    const newItems = categories.filter((work)=> work.category === btn);
    
    

    allWorkImage(newItems);
    document.getElementById('showAllBtn').style.display = 'none'
}

Btn()

const categories = [...new Set(works.map((item)=>{ return item}))]
// work javascript code start here
const allWorkImage = (items) =>{
   
    document.getElementById('allWork').innerHTML = 
    items.map((work)=>{
        return (
            `<div class='project'> 
            <img src="${work.image}" alt="project_image">
            </div>`
        );
        
    }).join('');
    
   
};


 document.getElementById('showAllBtn').addEventListener('click', function(){
 let project = document.querySelectorAll('.project');


    project.forEach((ite)=>{
        ite.classList.remove('project');
    })
    document.getElementById('showAllBtn').style.display = 'none'
   
 });
 allWorkImage(categories);
// const ShowCategoryWiseAllWorkImage = (project) =>{
   
//     const allwork = document.getElementById('allWork');
//     project.map((work)=>{
//         const workDiv = document.createElement('div');
//         workDiv.innerHTML = `
//           <img src="${work.image}" alt="project_image">
//         `;
//         allwork.appendChild(workDiv);
        
//     })
   
// };







//team section js here
const showTeamMember = ()=>{
    const teamContainer = document.getElementById('teamContainer');
    Member.map((member)=>{
        const newMemberDiv = document.createElement('div');
        newMemberDiv.innerHTML = `<div class="p-4 text-center border-2 py-12 rounded-lg border-pink-500">
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
    recent.map((work)=>{
        const newRecenet = document.createElement('div');
        newRecenet.innerHTML = 
        `
        <div class="border-2 border-pink-500 p-8">
        <img  class="w-full" src="${work.img}" alt="recetn-work">
        
        <button onclick="aboutMore(${work.id})">About More...</button>
        </div>
        `;
        recentWorkContainer.appendChild(newRecenet);
    })
};


function aboutMore(id){
    document.getElementById('popup').style.display = 'block';
    recent.map((item)=>{
       
        if(item.id === id){
           document.getElementById('img').src = item.img;
           document.getElementById('p_name').innerHTML = item.name;
           document.getElementById('p_text').innerHTML = item.text;
           document.getElementById('p_job').innerHTML = item.job;
           
        }
    })
};

// function add (){
//     const popcontainer = document.getElementById('popcontainer');

//     const div = `
    
//     <div id="popup" class="hidden absolute top-[50%] left-[50%] transform-[translate (-50%,-50%)] w-1/3 mx-auto text-center text-[#010313] bg-white shadow-lg p-4">
//                     <h4>project Name</h4>
//                     <h4>project Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos est quia fugiat consequuntur magnam, fugit placeat repudiandae eum perspiciatis!</h4>
//                     <button id="closebtn" class="bg-pink-500 py-1 font-medium text-white px-3">close</button>
//                 </div>
//     `;
//     popcontainer.appendChild(div);
// }
document.getElementById('closebtn').addEventListener('click', function(){
    document.getElementById('popup').style.display = 'none';
})
recentWorks();


const swipperSlider = () =>{
    document.getElementById('swipper_slider').innerHTML = 
    clients.map((client)=>{
        const {id,name,country,text,images} = client;
        return(
            
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