
(function(){
var box=document.getElementById('c'),still=matchMedia('(prefers-reduced-motion: reduce)').matches;
var R=new THREE.WebGLRenderer({antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio||1,2));box.appendChild(R.domElement);
var S=new THREE.Scene(),G=new THREE.Group(),C=new THREE.PerspectiveCamera(42,1,.1,100);C.position.set(0,1.6,14);C.lookAt(0,-.9,0);S.add(G);
S.add(new THREE.AmbientLight(0x7a99dd,.7));var dl=new THREE.DirectionalLight(0xbfdcff,1.2);dl.position.set(3,6,7);S.add(dl);
var pl=new THREE.PointLight(0x4fb8ff,1.6,30);pl.position.set(-4,2,5);S.add(pl);
function edged(g,m,col,op){var o=new THREE.Mesh(g,m);o.add(new THREE.LineSegments(new THREE.EdgesGeometry(g,28),new THREE.LineBasicMaterial({color:col||0x5cd0ff,transparent:true,opacity:op||.55})));return o}
var navy=new THREE.MeshStandardMaterial({color:0x101e3d,metalness:.6,roughness:.35});
var glow=new THREE.MeshStandardMaterial({color:0x5cd0ff,emissive:0x2a9bd8,emissiveIntensity:.9});
/* controller */
var sh=new THREE.Shape();sh.moveTo(-1.4,1);sh.lineTo(1.4,1);sh.bezierCurveTo(2.4,1,3,.4,3.2,-.6);sh.bezierCurveTo(3.4,-1.6,3,-2,2.4,-1.9);sh.bezierCurveTo(1.6,-1.8,1.4,-.8,.9,-.7);sh.lineTo(-.9,-.7);sh.bezierCurveTo(-1.4,-.8,-1.6,-1.8,-2.4,-1.9);sh.bezierCurveTo(-3,-2,-3.4,-1.6,-3.2,-.6);sh.bezierCurveTo(-3,.4,-2.4,1,-1.4,1);
var cg=new THREE.ExtrudeGeometry(sh,{depth:.5,bevelEnabled:true,bevelSize:.14,bevelThickness:.14,bevelSegments:3,curveSegments:24});cg.center();
var pad=new THREE.Group(),body=edged(cg,navy,0x5cd0ff,.35);pad.add(body);
function cyl(r,h,x,y,z,m){var c=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,24),m||glow);c.rotation.x=Math.PI/2;c.position.set(x,y,z);pad.add(c);return c}
cyl(.38,.22,-.95,-.5,.5,navy);cyl(.38,.22,.95,-.5,.5,navy);cyl(.2,.1,-.95,-.5,.66);cyl(.2,.1,.95,-.5,.66);
[[2,.75],[2,-.05],[1.6,.35],[2.4,.35]].forEach(function(p,i){cyl(.17,.1,p[0],p[1]+.1,.46,i==1?new THREE.MeshStandardMaterial({color:0xf0a53c,emissive:0xb06a10}):glow)});
var dp=new THREE.Mesh(new THREE.BoxGeometry(.8,.24,.14),glow);dp.position.set(-2,.35,.46);pad.add(dp);var dp2=dp.clone();dp2.rotation.z=Math.PI/2;pad.add(dp2);
var tp=edged(new THREE.BoxGeometry(1.8,.7,.1),new THREE.MeshStandardMaterial({color:0x182a52,metalness:.3,roughness:.5}));tp.position.set(0,.45,.47);pad.add(tp);
var lb=new THREE.Mesh(new THREE.BoxGeometry(2.2,.06,.06),glow);lb.position.set(0,.98,.2);pad.add(lb);
pad.position.y=1.2;pad.rotation.x=-.35;G.add(pad);
/* voxel world */
var N=16,sz=.5,inst=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshStandardMaterial({roughness:.6,metalness:.2}),N*N),M=new THREE.Matrix4(),col=new THREE.Color();
function hgt(i,j,t){return 1+.55*Math.sin(i*.6+t*1.6)+.4*Math.cos(j*.55+t*1.3)}
function fill(t){for(var i=0;i<N;i++)for(var j=0;j<N;j++){var h=hgt(i,j,t);M.compose(new THREE.Vector3((i-N/2+.5)*sz,-3.9+h/2,(j-N/2+.5)*sz),new THREE.Quaternion(),new THREE.Vector3(sz*.92,h,sz*.92));inst.setMatrixAt(i*N+j,M);
col.setHSL(.56+h*.06,.65,.18+h*.35);inst.setColorAt(i*N+j,col)}inst.instanceMatrix.needsUpdate=true;inst.instanceColor.needsUpdate=true}
fill(0);for(var i=0;i<N;i++)for(var j=0;j<N;j++){col.setHSL(.56+hgt(i,j,0)*.06,.65,.18+hgt(i,j,0)*.35);inst.setColorAt(i*N+j,col)}G.add(inst);
var ring=new THREE.Group();ring.add(new THREE.Mesh(new THREE.TorusGeometry(4.4,.035,8,160),glow));
for(var n=0;n<8;n++){var a2=n/8*6.2832,nd=new THREE.Mesh(new THREE.SphereGeometry(.17,16,16),new THREE.MeshBasicMaterial({color:0xdff3ff}));nd.position.set(Math.cos(a2)*4.4,Math.sin(a2)*4.4,0);nd.add(new THREE.Mesh(new THREE.SphereGeometry(.4,16,16),new THREE.MeshBasicMaterial({color:0x5cd0ff,transparent:true,opacity:.26})));ring.add(nd)}
ring.position.y=.9;ring.rotation.x=1.2;G.add(ring);
/* rail + minecart */
var rp=[];for(var k=0;k<=96;k++){var a=k/96*6.2832;rp.push(new THREE.Vector3(Math.cos(a)*5.1,-1.5,Math.sin(a)*3.7))}
G.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(rp),new THREE.LineBasicMaterial({color:0x5cd0ff,transparent:true,opacity:.6})));
var cart=new THREE.Group(),am=new THREE.MeshStandardMaterial({color:0xf0a53c,emissive:0x6b3d08,metalness:.4,roughness:.5});
[[0,-.2,0,.9,.1,.6],[0,0,.3,.9,.4,.06],[0,0,-.3,.9,.4,.06],[.45,0,0,.06,.4,.6],[-.45,0,0,.06,.4,.6]].forEach(function(b){var m=edged(new THREE.BoxGeometry(b[3],b[4],b[5]),am,0xffd38a,.5);m.position.set(b[0],b[1],b[2]);cart.add(m)});
[[-.3,.25],[.3,.25],[-.3,-.25],[.3,-.25]].forEach(function(w){var c=new THREE.Mesh(new THREE.CylinderGeometry(.11,.11,.06,14),navy);c.rotation.x=Math.PI/2;c.position.set(w[0],-.32,w[1]*1.15);cart.add(c)});
G.add(cart);
/* rotating ring of nodes */
var tilt=new THREE.Group(),spin=new THREE.Group();tilt.rotation.set(1.05,0,.3);tilt.add(spin);G.add(tilt);
spin.add(new THREE.Mesh(new THREE.TorusGeometry(4.6,.03,10,180),new THREE.MeshBasicMaterial({color:0x9fd4ff,transparent:true,opacity:.8})));
for(var n=0;n<8;n++){var an=n/8*6.2832,nd=new THREE.Group();nd.position.set(Math.cos(an)*4.6,Math.sin(an)*4.6,0);
nd.add(new THREE.Mesh(new THREE.SphereGeometry(.2,16,16),new THREE.MeshBasicMaterial({color:0xe6f3ff})));
nd.add(new THREE.Mesh(new THREE.SphereGeometry(.44,16,16),new THREE.MeshBasicMaterial({color:0x5cd0ff,transparent:true,opacity:.22})));spin.add(nd)}
var mx=0,my=0;addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function size(){var w=box.clientWidth,h=box.clientHeight,a=w/h;R.setSize(w,h);C.aspect=a;C.updateProjectionMatrix();var wide=a>1.15;G.position.set(wide?3.6:0,wide?.2:1.8,0);G.scale.setScalar(wide?.7:.42)}
size();addEventListener('resize',size);
function draw(ms){var t=ms*.001;
pad.position.y=1.2+Math.sin(t*1.2)*.15;pad.rotation.y=Math.sin(t*.9)*Math.PI/2;pad.rotation.x=-.35;
spin.rotation.z=t*.45;fill(t*1.2);
var a=t*.6;cart.position.set(Math.cos(a)*5.1,-2.05,Math.sin(a)*3.7);cart.rotation.y=-a-Math.PI/2;
G.rotation.y=mx*.25;R.render(S,C);requestAnimationFrame(draw)}
requestAnimationFrame(draw);
})();
