"use strict";

const inputName = document.querySelector(".js-input-name");
const btnSearch = document.querySelector(".js-btn-search");

const ulRepos = document.querySelector(".js-ul-repos");

function onBtnSearchClick() {
  fetch(`https://api.github.com/orgs/${inputName.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return fetch(data.repos_url);
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (const repo of data) {
        ulRepos.innerHTML += `<li>${repo.name}</li>`;
      }
    });
}

btnSearch.addEventListener("click", onBtnSearchClick);
