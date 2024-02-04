self.addEventListener("install",e=>{
    e.waitUntill(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","./img/play_store_512.png"]);
        })
    );
});

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request)
        })
    )
})