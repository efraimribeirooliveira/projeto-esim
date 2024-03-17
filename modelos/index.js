let burguer = document.getElementById('brg')
const sidebar = document.getElementById('sidebar')

function toggleMenu() {
    if (sidebar.style.left === '-270px') {
        sidebar.style.left = '0'
    } else {
        sidebar.style.left = '-270px'
    }
}

function fecharMenu() {
    if (sidebar.style.left === '0') {
        sidebar.style.left = '-270px'
    } else {
        sidebar.style.left = '-270px'
    }
    
}
