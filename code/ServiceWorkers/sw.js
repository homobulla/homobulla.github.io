// this.addEventListener('install', function(event) {
//     event.waitUntil(
//         caches.open('v1').then(function(cache) {
//             return cache.addAll([
//                 '/Technical-tree/code/',
//                 '/Technical-tree/code/index.html',
//                 '/Technical-tree/code/app.js',
//                 '/Technical-tree/code/timg.jpg'
//             ])
//         })
//     )
// })
this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/Technical-tree/code/',
                '/Technical-tree/code/index.html',
                '/Technical-tree/code/app.js',
                '/Technical-tree/code/timg.jpg'
            ])
        })
    )
})
this.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request))
})
