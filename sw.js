/* V0.47 — cache resources only when requested, avoid 2.62 MB duplicate model downloads. */
const NAME='blood-circulation-3d-v47';
const CORE=['./','./index.html','./style.css','./vendor-config.js','./js/viewer.js','./js/flow-timeline.mjs','./js/camera-limits.mjs','./js/organ-shells.mjs','./js/organ-shapes.mjs','./js/organ-label-layout.mjs','./js/view-framing.mjs','./js/lesson-visibility.mjs','./js/classroom-input.mjs','./js/graph-engine.js','./models/mesh-levels.json','./models/verified-paths.json','./models/cardiopulmonary-stages.json','./models/systemic-left-arm-stages.json','./models/model-audit.json','./diagnostics.html','./ATTRIBUTION.md'];
self.addEventListener('install',evt=>evt.waitUntil(caches.open(NAME).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',evt=>evt.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('blood-circulation-3d-')&&k!==NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',evt=>{
  const request=evt.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);if(url.origin!==self.location.origin)return;
  if(request.mode==='navigate'){
    // Fresh HTML when online; cached HTML when offline. Avoid serving an old app after GitHub updates.
    evt.respondWith((async()=>{
      const cache=await caches.open(NAME);
      try{const res=await fetch(request);if(res.ok)await cache.put(request,res.clone());return res;}
      catch{return await cache.match(request)||await cache.match('./index.html')||Response.error();}
    })());
    return;
  }
  evt.respondWith((async()=>{
    const cache=await caches.open(NAME),hit=await cache.match(request);if(hit)return hit;
    const res=await fetch(request);if(res.ok)await cache.put(request,res.clone());return res;
  })());
});
