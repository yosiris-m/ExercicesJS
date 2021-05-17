"use strict";

const userName = document.querySelector(".js-name");
const userImg = document.querySelector(".js-img");
const userNumRepos = document.querySelector(".js-num-repos");
const inputName = document.querySelector(".js-input-name");
const btnSearch = document.querySelector(".js-btn-search");

console.log(btnSearch);

function onBtnSearchClick() {
  console.log(inputName.value);

  fetch(`https://api.github.com/users/${inputName.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      userImg.src = data.avatar_url;
      userName.innerHTML = data.login;
      userNumRepos.innerHTML = data.public_repos;
    });
}

btnSearch.addEventListener("click", onBtnSearchClick);
