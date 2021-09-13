let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let apidata = document.getElementById("apidata");
let hero = document.getElementById("hero");
let villian = document.getElementById("villian");
 var winh = document.getElementById("winh");
 var winv = document.getElementById("winv");
 var hc = document.getElementById("hc")
 var hd = document.getElementById("hd")
 var hi = document.getElementById("hi")
 var hp = document.getElementById("hp")
 var hs = document.getElementById("hs")
 var hst = document.getElementById("hst")
 var vc = document.getElementById("vc")
 var vd = document.getElementById("vd")
 var vi = document.getElementById("vi")
 var vp = document.getElementById("vp")
 var vs = document.getElementById("vs")
 var vst = document.getElementById("vst")
 var ch = document.getElementById("c1");
 var cv = document.getElementById("c2");
 var sho = document.getElementById("shown");

var hcount = 0;
var vcount = 0;


apidata.addEventListener("click",herodata);


function herodata()
{
    fetch("https://superhero-search.p.rapidapi.com/api/heroes", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "superhero-search.p.rapidapi.com",
		"x-rapidapi-key": "fcfe19d43bmshc0b4984c4cd1e74p192937jsnff729bd4b108"
	}
})
.then(response => {
	return response.json();
}).then((data) => {
	console.log(data);
     return data;
}).then((result) => {
    
    img1.src = result[1].images.sm;
	hero.innerText = `${result[1].name}`
   
     
	var hhc = result[1].powerstats.combat
	var hhd = result[1].powerstats.durability
	var hhi = result[1].powerstats.intelligence
	var hhp = result[1].powerstats.power
	var hhs = result[1].powerstats.speed
	var hhst = result[1].powerstats.strength 
    var  herostats = (hhc + hhd + hhi + hhs + hhp + hhst)/6; 
	hc.innerText = `${hhc}`;
	hd.innerText = `${hhd}`;
	hi.innerText = `${hhi}`;
	hp.innerText = `${hhp}`;
	hs.innerText = `${hhs}`;
	hst.innerText = `${hhst}`;
	 if(herostats > 45)
	 {
		 hcount = hcount + 1;
		 ch.innerText = `${hcount}`;
	 }
	 if(hcount >= 5)
	 {
		sho.classList.add("show");
		winh.innerText="hero wins";
		setInterval(()=>{
			window.open('main.html','_self');
		},2000);
			 
	 }


})
.catch(err => {
	console.error(err);
});
}

apidata.addEventListener("click", vildata)
function vildata()

   {
    fetch("https://superhero-search.p.rapidapi.com/api/villains", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "superhero-search.p.rapidapi.com",
		"x-rapidapi-key": "fcfe19d43bmshc0b4984c4cd1e74p192937jsnff729bd4b108"
	}
})
.then(response => {
	return response.json();
}).then((data) => {
	console.log(data);
   return data;
}).then((result) => {
 
    img2.src = result[1].images.sm;
	villian.innerText = `${result[1].name}`

	var vvc = result[1].powerstats.combat
	var vvd = result[1].powerstats.durability
	var vvi = result[1].powerstats.intelligence
	var vvp = result[1].powerstats.power
	var vvs = result[1].powerstats.speed
	var vvst = result[1].powerstats.strength 
    var  villstats = (vvc + vvd + vvi + vvs + vvp + vvst)/6; 
	vc.innerText = `${vvc}`;
	vd.innerText = `${vvd}`;
	vi.innerText = `${vvi}`;
	vp.innerText = `${vvp}`;
	vs.innerText = `${vvs}`;
	vst.innerText = `${vvst}`;
	 if(villstats > 45)
	 {
		 vcount = vcount + 1;
		 cv.innerText = `${vcount}`;
	 }
	 if(vcount >= 5)
	 {
		sho.classList.add("show");
		winv.innerText="Villian wins";
	setInterval(()=>{
		window.open('main.html','_self');
	},2000);
		 
	 }
    
})
.catch(err => {
	console.error(err);
});
}
