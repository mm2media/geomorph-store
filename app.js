const C={ 'fault-line':{n:'Fault Line',d:"Black structure breaks open to reveal gold. These are bold pieces about what's hidden inside.",img:'p20'},
morph:{n:'Morph',d:'One story told across ring, cuff and earrings, moving from geometric to fully organic.',img:'p15'},
kinetic:{n:'Kinetic',d:'Pieces that spin, flex and move with you.',img:'p0'},
rings:{n:'Rings',d:'Signets, stackers and sculptural statements.',img:'p17'},earrings:{n:'Earrings',d:'Studs, drops and climbers, printed as light as air.',img:'p21'},
bracelets:{n:'Bracelets',d:'Cuffs and bangles grown from lattices and waves.',img:'p28'},pendants:{n:'Pendants',d:'Lattice forms that hang like captured light.',img:'p33'},
all:{n:'Shop all',d:'Every Geomorph piece, printed to order.',img:'p3'}};
const P=[
['fracture-studs','Fracture Studs',20,'earrings',['fault-line'],98,'Faceted black shells crack open to reveal a fine gold lattice glowing inside.','Matte black + silk gold PLA'],
['fault-core-ring','Fault Core Ring',101,'rings',['fault-line'],160,'A faceted black shell cracks open to reveal a gold honeycomb core.','Matte black + silk gold'],
['melting-hex-drops','Melting Hex Drops',102,'earrings',['fault-line'],120,'Crisp black hex frames melt into liquid gold drops.','Matte black + silk gold'],
['gold-rib-wave-cuff','Gold Rib Wave Cuff',103,'bracelets',['fault-line'],215,'Flowing black wave ribs traced with fine gold inlay.','Matte black + gold inlay'],
['gyroid-crystal-pendant','Gyroid Crystal Pendant',104,'pendants',['fault-line'],165,'A faceted black crystal giving way to an open gold lattice.','Black + gold, 18" chain'],
['helix-fin-cuff','Helix Fin Cuff',3,'bracelets',['fault-line'],210,'Twisted black and gold fins spiral around the wrist like a turbine frozen mid-turn.','Matte black + gold PETG'],
['delaunay-shell-ring','Delaunay Shell Ring',18,'rings',['fault-line'],150,'A domed signet traced in a fine triangulated gold web over deep black.','Black resin, gold inlay'],
['crater-ring','Crater Ring',27,'rings',['fault-line'],140,'Moon-grey band with gold-lined craters that grow as they circle the finger.','Stone grey + gold'],
['honeycomb-hoops','Honeycomb Hoops',12,'earrings',['fault-line'],118,'Oversized black hoops with gold-edged hex cells, sold with matching mini studs.','Matte black + gold'],
['obsidian-lattice-pendant','Obsidian Lattice Pendant',30,'pendants',['fault-line'],155,'A faceted black gem that dissolves into an open honeycomb, edged in gold.','Black + gold, 18" chain'],
['wave-hex-cuff','Wave Hex Cuff',22,'bracelets',['fault-line','morph'],185,'A sharp faceted black band split by a flowing gold wave: geometry giving way to water.','Black + silk gold'],
['morph-set','The Morph Set',15,'sets',['morph','fault-line'],295,'Ring, cuff and earrings that tell one story, from crisp facets to fully organic curves.','Black + gold, 3 pieces'],
['melting-cube-ring','Melting Cube Ring',17,'rings',['morph'],135,'A perfect gold cube that drips into a liquid band beneath it.','Silk gold'],
['pebble-gem-rings','Pebble-to-Gem Rings',4,'rings',['morph'],88,'Smooth river stones that break into low-poly facets. Stone grey or pearl.','Matte stone / pearl'],
['twist-ribbon-drops','Twist Ribbon Drops',21,'earrings',['morph','kinetic'],110,'Long ribbons of fine gold lines twisting like folded light, swaying as you move.','Silk gold'],
['tidal-signet','Tidal Signet',29,'rings',['morph'],115,'A hexagonal signet carved with ripple contours, like sand after the tide.','White + ocean blue'],
['dune-spike-duo','Dune & Spike Duo',36,'rings',['morph'],95,'Two rings, one story: a soft copper dune and a crisp white spiked crown.','Copper + white, pair'],
['vertebra-chain','Vertebra Chain Bracelet',0,'bracelets',['kinetic'],148,'Faceted links that flex like a spine, printed in place as one piece.','Champagne gold'],
['orbital-ring','Orbital Ring',19,'rings',['kinetic'],160,'A faceted cobalt planet caged in sweeping gold orbits.','Gold + cobalt'],
['lissajous-loops','Lissajous Loops',24,'earrings',['kinetic'],92,'An asymmetric pair of smooth knotted curves in iridescent purple and teal.','Iridescent silk'],
['gradient-lattice-bangle','Gradient Lattice Bangle',31,'bracelets',['kinetic'],105,'A triangulated bangle that flexes, fading from white to cobalt.','Flexible TPU'],
['mobius-mesh-bangle','Möbius Mesh Bangle',35,'bracelets',['kinetic'],115,'A twisted honeycomb loop with one continuous surface, blue melting into white.','Flexible TPU'],
['spiral-signet','Spiral Lattice Signet',2,'rings',[],165,'A gold signet whose face swirls into a hypnotic string-art spiral over an open lattice.','Gold on emerald'],
['geode-ring','Geode Ring',9,'rings',[],145,'Rough volcanic rock that opens to a cavity of violet crystal.','Charcoal + amethyst'],
['growth-ring-stack','Growth-Ring Stack',8,'rings',[],120,'Five wavy stacking bands in black, gold and copper, like rings in a tree.','Set of 5'],
['coral-climber','Fractal Coral Climber',5,'earrings',[],96,'Branching gold that grows along the curve of the ear.','Silk gold, single'],
['voronoi-hex-drops','Voronoi Hex Drops',10,'earrings',[],78,'Hexagonal frames filled with organic Voronoi cells. White or gold.','White / gold'],
['superformula-studs','Superformula Studs',23,'earrings',[],64,'Stars, blooms and shells generated from a single formula. Pick your shape.','White + gold, pair'],
['reaction-diffusion-cuff','Reaction-Diffusion Cuff',14,'bracelets',[],190,'A coral-like maze grown by simulation; no two prints come out the same.','Silk copper'],
['attractor-cuff','Attractor Cuff',28,'bracelets',[],175,'Holes swell around two focal points and shrink to dots, pearl white with a gold inside.','Pearl + gold'],
['mycelium-cuff','Mycelium Cuff & Rings',37,'bracelets',[],230,'Emerald and gold root-webs branch across a sculptural cuff with matching rings.','Emerald + gold'],
['voronoi-bloom-pendant','Voronoi Bloom Pendant',6,'pendants',[],132,'A rose-gold heart filled with a soft Voronoi flower.','Rose gold + white'],
['spore-pendant','Spore Lattice Pendant',33,'pendants',[],125,'A moss-green gyroid sphere that opens at the base as if releasing spores.','Moss green'],
].map(([id,n,i,cat,cols,price,d,mat])=>({id,n,img:'img/p'+i+'.jpg',det:'img/d'+i+'.jpg',cat,cols,price,d,mat}));
const $=s=>document.querySelector(s),app=$('#app'),money=n=>'$'+n.toLocaleString();
const SIZES={rings:['5','6','7','8','9','10'],bracelets:['S','M','L'],sets:['S','M','L'],earrings:['One size'],pendants:['16"','18"','20"']};
let cart=JSON.parse(localStorage.getItem('gm-cart')||'[]');
const card=p=>`<a class="card fade" href="#/p/${p.id}"><div class="im"><img loading="lazy" src="${p.img}" alt="${p.n}">${p.cols[0]?`<span class="tag">${C[p.cols[0]].n}</span>`:''}</div><h4>${p.n}</h4><div class="price">${money(p.price)}<small>sample</small></div></a>`;
function home(){const f=['fracture-studs','melting-cube-ring','orbital-ring','wave-hex-cuff','crater-ring','lissajous-loops','attractor-cuff','delaunay-shell-ring'].map(id=>P.find(p=>p.id==id));
app.innerHTML=`<section class="hero"><img src="img/banner.jpg" srcset="img/banner-sm.jpg 1200w, img/banner.jpg 2400w" sizes="100vw" alt="Geomorph Fault Line ring, cuff and earrings"><div class="in fade"><div class="eyebrow">Parametric jewelry · 3D printed</div><h1>Geometry,<br>grown.</h1><p>Jewelry shaped by algorithms and inspired by nature, where crisp facets melt into living forms. Every piece is printed to order.</p><a class="btn" href="#/c/all">Shop the collection</a></div></section>
<section class="sec"><div class="sec-h"><h2>The collections</h2></div><div class="cols">${['fault-line','morph','kinetic'].map(k=>`<a class="col" href="#/c/${k}"><img loading="lazy" src="img/${C[k].img}.jpg" alt=""><div class="t"><div class="eyebrow">Collection</div><h3>${C[k].n}</h3><p>${C[k].d}</p></div></a>`).join('')}</div></section>
<div class="cats">${['rings','earrings','bracelets'].map(k=>`<a href="#/c/${k}"><span>Shop</span>${C[k].n}</a>`).join('')}</div>
<section class="sec"><div class="sec-h"><h2>Featured pieces</h2><a href="#/c/all">View all →</a></div><div class="grid">${f.map(card).join('')}</div></section>
<section class="sec story"><img loading="lazy" src="img/p22.jpg" alt=""><div><div class="eyebrow">How it's made</div><h2>Written in code.<br>Finished by hand.</h2><p>Each design starts as an algorithm: lattices, growth patterns and wave fields, tuned until the math feels alive. Then it's printed layer by layer, to order, and finished in the studio. Nothing sits in a warehouse.</p><a class="btn" style="margin-top:26px" href="#/c/fault-line">Explore Fault Line</a></div></section>`}
function coll(k,q){const c=C[k]||C.all;let list=P.filter(p=>k=='all'||p.cat==k||p.cols.includes(k));const f=q.get('type')||'all',s=q.get('sort')||'featured';
if(f!='all')list=list.filter(p=>p.cat==f);if(s=='low')list=[...list].sort((a,b)=>a.price-b.price);if(s=='high')list=[...list].sort((a,b)=>b.price-a.price);
const types=['all',...new Set(P.filter(p=>k=='all'||p.cat==k||p.cols.includes(k)).map(p=>p.cat))];
app.innerHTML=`<div class="chead fade"><div class="eyebrow">${['fault-line','morph','kinetic'].includes(k)?'Collection':'Shop'}</div><h1>${c.n}</h1><p>${c.d}</p></div>
<div class="bar">${types.length>2?types.map(t=>`<a class="chip ${t==f?'on':''}" href="#/c/${k}?type=${t}&sort=${s}">${t=='all'?'All':C[t]?C[t].n:'Sets'}</a>`).join(''):''}
<select onchange="location.hash='#/c/${k}?type=${f}&sort='+this.value"><option value="featured">Featured</option><option value="low" ${s=='low'?'selected':''}>Price: low to high</option><option value="high" ${s=='high'?'selected':''}>Price: high to low</option></select></div>
<section class="sec" style="padding-top:20px"><p class="muted" style="margin-bottom:20px">${list.length} pieces · sample prices</p><div class="grid">${list.map(card).join('')}</div></section>`}
function pdp(id){const p=P.find(x=>x.id==id);if(!p)return home();const sz=SIZES[p.cat];let sel=sz.length==1?sz[0]:null,qty=1;
const rel=P.filter(x=>x.id!=p.id&&(x.cat==p.cat||x.cols.some(c=>p.cols.includes(c)))).slice(0,4);const gal=[p.img,p.det];if(p.cols[0])gal.push('img/'+C[p.cols[0]].img+'.jpg');
app.innerHTML=`<div class="pdp fade"><div class="gal"><div class="main"><img id="mainimg" src="${p.img}" alt="${p.n}"></div><div class="thumbs">${gal.map((g,i)=>`<button class="${i?'':'on'}" data-g="${g}"><img src="${g}" alt=""></button>`).join('')}</div></div>
<div class="info"><div class="crumb"><a href="#/c/${p.cat}">${C[p.cat]?C[p.cat].n:'Sets'}</a>${p.cols.map(c=>` · <a href="#/c/${c}">${C[c].n}</a>`).join('')}</div><h1>${p.n}</h1><div class="price">${money(p.price)}<span class="samp">Sample price</span></div><p class="desc">${p.d}</p>
<div class="lbl">${p.cat=='rings'?'Ring size (US)':p.cat=='pendants'?'Chain length':'Size'}</div><div class="sizes">${sz.map(s=>`<button class="${s==sel?'on':''}" data-s="${s}">${s}</button>`).join('')}</div>
<div class="lbl">Quantity</div><div class="qty"><button id="qm">−</button><span id="qv">1</span><button id="qp">+</button></div>
<button class="btn gold full" id="add">${sel?'Add to bag':'Select a size'}</button>
<div class="spec"><div><span>Material</span>${p.mat}</div><div><span>Made</span>Printed to order · ships in 5–7 days</div><div><span>Design</span>Parametric, by Geomorph</div></div></div></div>
${rel.length?`<section class="sec" style="padding-top:0"><div class="sec-h"><h2>You may also like</h2></div><div class="grid">${rel.map(card).join('')}</div></section>`:''}`;
app.querySelectorAll('.thumbs button').forEach(b=>b.onclick=()=>{$('#mainimg').src=b.dataset.g;app.querySelectorAll('.thumbs button').forEach(x=>x.classList.toggle('on',x==b))});
app.querySelectorAll('.sizes button').forEach(b=>b.onclick=()=>{sel=b.dataset.s;app.querySelectorAll('.sizes button').forEach(x=>x.classList.toggle('on',x==b));$('#add').textContent='Add to bag'});
$('#qm').onclick=()=>{qty=Math.max(1,qty-1);$('#qv').textContent=qty};$('#qp').onclick=()=>{qty++;$('#qv').textContent=qty};
$('#add').onclick=()=>{if(!sel)return toast('Please select a size');add(p.id,sel,qty);openCart()}}
function add(id,size,q){const l=cart.find(x=>x.id==id&&x.size==size);l?l.q+=q:cart.push({id,size,q});save()}
function save(){localStorage.setItem('gm-cart',JSON.stringify(cart));renderCart()}
function renderCart(){const n=cart.reduce((a,l)=>a+l.q,0);$('#count').textContent=n;let sub=0;
$('#lines').innerHTML=cart.length?cart.map((l,i)=>{const p=P.find(x=>x.id==l.id);sub+=p.price*l.q;return`<div class="line"><img src="${p.img}" alt=""><div><h5>${p.n}</h5><div class="m">${/^\d+$/.test(l.size)?"Size "+l.size:l.size} · ${money(p.price)}</div><div class="qty" style="margin-top:8px"><button onclick="chg(${i},-1)">−</button><span>${l.q}</span><button onclick="chg(${i},1)">+</button></div></div><div style="text-align:right">${money(p.price*l.q)}<br><button class="rm" onclick="chg(${i},-999)">Remove</button></div></div>`}).join(''):`<div class="empty"><p class="serif" style="font-size:24px;color:var(--tx)">Your bag is empty</p><a class="btn" style="margin-top:20px" href="#/c/all" onclick="closeCart()">Shop now</a></div>`;
$('#sub').textContent=money(sub)}
function chg(i,d){cart[i].q+=d;if(cart[i].q<1)cart.splice(i,1);save()}
function openCart(){document.body.classList.add('cart-open')}function closeCart(){document.body.classList.remove('cart-open')}
function checkout(b){b.textContent='Test store, checkout disabled';b.disabled=true;toast('Test store, checkout disabled');setTimeout(()=>{b.textContent='Checkout';b.disabled=false},2500)}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),2200)}
function route(){document.body.classList.remove('nav-open','cart-open');const h=location.hash.slice(1)||'/',[path,qs]=h.split('?'),q=new URLSearchParams(qs),s=path.split('/');
s[1]=='c'?coll(s[2],q):s[1]=='p'?pdp(s[2]):home();document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+path));if(!qs)scrollTo(0,0)}
addEventListener('hashchange',route);route();renderCart();
