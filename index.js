function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
 }

 function hideSideBar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'none'
 }

 document.querySelectorAll(".sidebar a").forEach(link=>{
    link.addEventListener("click",hideSideBar)
})