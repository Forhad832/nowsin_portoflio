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