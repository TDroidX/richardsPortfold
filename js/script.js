// Función del service
if ('serviceWorker' in navigator) {
    window.addEventListener('load',function(){
        navigator.serviceWorker.register('./serviceworker.js')
        .then(registro => {
            console.log("El service worker se registro de manera correcta");
        })
        .catch(e =>{
            console.warn("El service worker no se registro",e);
        })
    })
}

// Funcion escondite NavBar
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos> currentScrollPos){
        document.getElementById("navBar").style.top="0";
    }else{
        document.getElementById("navBar").style.top="-100px";
    }
    prevScrollpos = currentScrollPos
}
