(()=>{"use strict";((e,t=1e3)=>{const n=document.querySelector(".content"),s=n.querySelector(".movie-list"),a=n.querySelector(".title"),o=n.querySelector(".characters"),i=document.querySelector(".button-movie-list");let l;const r=(e="error")=>{"notMovieList"===e?(i.style.display="none",s.innerHTML=""):(i.style.display="none",a.innerHTML="Guide is not available",s.innerHTML="",o.innerHTML="We apologize for the temporary inconvenience you have faced.")},c=()=>{"none"!==i.style.display&&i.addEventListener("click",(()=>{s.style.display="none"===s.style.display?"":"none"})),n.addEventListener("click",(e=>{if(e.target.matches(".movies li")){const i=e.target.textContent;l!==i&&(l=i,(e=>{const t=t=>t.textContent===e?(t.classList.add("active"),!0):(t.classList.remove("active"),!1);a.innerHTML="Movie character cards"+("All"===e?"":`: <span class="title-movie">${e}</span>`),s.querySelectorAll("li").forEach((e=>{t(e)})),o.querySelectorAll(".heroes").forEach((n=>{let s="All"===e;n.querySelectorAll("li").forEach((e=>{t(e)&&(s=!0)})),s?n.classList.remove("close"):n.classList.add("close")}))})(i)),(e=>{e.preventDefault();const s=window.scrollY,o=a.getBoundingClientRect().top;(({draw:e,duration:t=1e3,timingplane:n="linear"})=>{const s={linear:e=>e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeOutQuart:e=>1-Math.pow(1-e,5),aseOutExpo:e=>1===e?1:1-Math.pow(2,-10*e)};n in s||(n="linear");const a=Math.max(Math.round(t/16.7),1);let o=0;requestAnimationFrame((function t(){let i=0===o?0:o>a-1?1:s[n](o/a);e(i),o<a&&(o++,requestAnimationFrame(t))}))})({duration:t,timingplane:"easeOutCubic",draw(e){0===e&&(n.style.pointerEvents="none"),window.scrollTo(0,s+o*e),1===e&&(n.style.pointerEvents="")}})})(e)}}))};document.addEventListener("DOMContentLoaded",(()=>{var t;(t=e,fetch(t).then((e=>e.json()))).then((e=>((e=>{const t=[],n={};e.forEach((e=>{"movies"in e&&e.movies.forEach((e=>n[e]=e))}));for(let e in n)t.push(e);t.length?(e=>{const t=document.createElement("h2"),n=document.createElement("ul"),a=document.createElement("li");let o="";n.classList.add("movies"),a.textContent="All",a.classList.add("all","active"),n.append(a),e.sort().forEach((e=>{const t=document.createElement("li");let s=e.slice(0,1).toUpperCase();s!==o&&(t.classList.add("letter-begin"),o=s),t.textContent=e,n.append(t)})),t.classList.add("title"),t.textContent="Movie list",s.append(t),s.append(n),l="All"})(t):r("notMovieList")})(e),(e=>{let t="";e.forEach((e=>{t+=(e=>{let t="name"in e?e.name:"name not specified",n=`\n              <div class="heroes">\n                <h3 class="name" >${t}</h3>                        \n                  <span class="real-name">${"realName"in e&&e.realName!==t?e.realName:""}</span>\n                  <img src="${"photo"in e?e.photo:""}" alt="no photo" class="image" />`;for(let t in e)"name,realName,photo,movies".includes(t)||(n+=`\n                      <div class="heroes-description">\n                        <span class="property">${"birthDay"===t?"birthday":"deathDay"===t?"death day":t}</span>\n                        <span class="value">${e[t]}</span>\n                      </div>`);return"movies"in e&&(n+='\n                  <span class="heroes-movies">movies with this character</span>\n                  <div class="heroes-description">\n                    <ul class="movies">',e.movies.sort().forEach((e=>{n+=`\n                      <li class="movies">${e}</li>`})),n+="\n                    </ul>\n                  </div> "),n+"</div>"})(e)})),o.innerHTML=t})(e),c(),e))).catch((e=>(r(),e)))}))})("./db/dbHeroes.json",500)})();