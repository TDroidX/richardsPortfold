
const CACHE_NAME = "PWA_RICHARDS_PORTFOLIO";

urlsToCache = [
    './',
    './assets/certificates/Blockchain_191.pdf',
    './assets/certificates/Diploma_Santander.pdf',
    './assets/certificates/IA_191.pdf',
    './assets/certificates/Jose_Ricardo_Pizaña_de_Santiago_azle.pdf',
    './assets/certificates/Jose_Ricardo_Pizaña_de_Santiago.pdf',
    './assets/cv/Curriculum_Ricardo_Pizaña.pdf',
    './icons/adaptacion.png',
    './icons/analitico.png',
    './icons/autodidacta.svg',
    './icons/colaborar.png',
    './icons/github.png',
    './icons/gmail.png',
    './icons/instagram.png',
    './icons/logotipo-de-linkedin.png',
    './icons/menu.png',
    './icons/resiliencia.png',
    './icons/whatsapp.png',
    './images/icons/icon-72x72.png',
    './images/icons/icon-96x96.png',
    './images/icons/icon-128x128.png',
    './images/icons/icon-144x144.png',
    './images/icons/icon-152x152.png',
    './images/icons/icon-192x192.png',
    './images/icons/icon-384x384.png',
    './images/icons/icon-512x512.png',
    './img/api.jpg',
    './img/app.jpg',
    './img/cursos.jpg',
    './img/foto1.jpg',
    './css/style.css',
    './js/script.js',
    './manifest.json'
];

//Funcion de instalacion
//almacena el nombre y los archivos que van a ir guardados en cache

self.addEventListener('install', e =>{
    e.waitUntil( //le decimos que detenga el evento hasta que se ejecute lo siguiente
        caches.open(CACHE_NAME)
        .then(cache =>{
            return cache.addAll(urlsToCache)
            .then(() => self.skipWaiting)
        })

    )
})

self.addEventListener('activate', e =>{
    const listaBlancaCache = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(nombresCache => {
            return Promise.all(
                nombresCache.map(nombresCache =>{
                    if(listaBlancaCache.indexOf(nombresCache) === -1){
                        return caches.delete(nombresCache)
                    }
                })
            )
        })
        //activamos la cache actualizada
        .then(()=> self.clients.claim())
    )

})


self.addEventListener('fetch', e =>{
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            if(res)
            {
                return res
            }
            return fetch(e.request)
        })
    )
})