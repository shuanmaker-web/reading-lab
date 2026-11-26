const V='rt-v33';const FILES=['./','./index.html','./manifest.json','./seed.js','./demo.js','./confuse.js','./refs.json','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  const q=e.request;if(q.method!=='GET')return;
  const same=new URL(q.url).origin===location.origin;
  const net=same?fetch(q.url,{cache:'no-cache'}):fetch(q);
  e.respondWith(net.then(r=>{if(r.ok){const c=r.clone();caches.open(V).then(x=>x.put(q,c));}return r;}).catch(()=>caches.match(q,{ignoreSearch:true})));
});
