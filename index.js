// skill section

const skillsContent = document.getElementsByClassName('skill_content'),
    skillsHeader = document.querySelectorAll('.skill_header') 
       

function toggleSkills() {
    let itemClass = this.parentNode.className
    for (i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skill_content skills_close'

    }

    if (itemClass === 'skill_content skills_close') {
        this.parentNode.className = 'skill_content skills_open'
    }
}

    skillsHeader.forEach((el) => {
        el.addEventListener('click',toggleSkills)
    })




    // qualification section

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })

        target.classList.add('qualification_active')
        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
        })
    })