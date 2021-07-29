const $menuIcon = document.getElementById('menu-icon')
const $menuDropdown = document.getElementById('menu-dropdown')
const $dropdownOpen = document.querySelectorAll('[data-open]')
// const $dropdownItems = document.getElementsByClassName('dropdown-items')

$menuIcon.addEventListener('click',()=> {
    $menuDropdown.classList.toggle('menu-dropdown--show')
    $menuIcon.classList.toggle('fa-times')    
})

for (const el of $dropdownOpen){
    el.addEventListener('click',function() {        
        const $dropId = this.dataset.open
        document.getElementById($dropId).classList.toggle('dropdown-items--show')
        this.childNodes[1].classList.toggle('fa-angle-up')
    })
}