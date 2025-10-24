import{a as f,S as m,i as l}from"./assets/vendor-CYMld6vM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const h="52813503-cb7190d9096228e90c42c3654";function p(i){return f.get("https://pixabay.com/api/",{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{throw r})}const s=document.querySelector(".gallery"),n=document.querySelector(".loader");let c=null;function y(i){const r=i.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img
              src="${e.webformatURL}"
              alt="${e.tags}"
              loading="lazy"
              width="300"
            />
          </a>
          <ul class="info">
            <li><b>Likes:</b> ${e.likes}</li>
            <li><b>Views:</b> ${e.views}</li>
            <li><b>Comments:</b> ${e.comments}</li>
            <li><b>Downloads:</b> ${e.downloads}</li>
          </ul>
        </li>
      `).join("");return s?s.insertAdjacentHTML("beforeend",r):console.warn("Gallery element not found in DOM"),c?c.refresh():c=new m(".gallery a",{captionsData:"alt",captionDelay:250}),r}function g(){s&&s.innerHTML!==void 0&&(s.innerHTML="")}function b(){n&&(n.classList.remove("hidden"),n.setAttribute("aria-hidden","false"))}function L(){n&&(n.classList.add("hidden"),n.setAttribute("aria-hidden","true"))}const d=document.querySelector(".form");d?d.addEventListener("submit",w):console.error("Form element not found: .form");function w(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){l.error({title:"Error",message:"Please enter a search word!",position:"topRight"});return}g(),b(),p(r).then(e=>{if(!e||e.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e)}).catch(e=>{console.error(e),l.error({title:"Error",message:"Failed to fetch images. Try again!",position:"topRight"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
