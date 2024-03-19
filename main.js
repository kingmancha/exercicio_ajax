
// document .addEventListener( 'DOMContentLoaded', function() {
//         const nameElement = document.querySelector('#nane');
//         const usernameElement = document.querySelector('#usernanme');
//         const avatarElement = document.querySelector('#avatar');
//         const reposElement = docunent.querySelector('#repos');
//         const followersElement = document.querySelector('#followers');
//         const followingElement = document.querySelector('#folloning');
//         const linkElement = document .querySelector('#link');

//     fetch('https://api.github.com/users/kingmancha')
//         .then(function(res) {
//         return res.json();
//     })
//         .then(function(json) {
//                 nameElement.innerText = json.name;
//                 usernameElement.innerText = json.login;
//                 avatarElement.src = json.avatar_url;
//                 followingElement.innerText = json.following;
//                 followersElement.innerText = json.follovers;
//                 repos.innerText = json.public_repos;
//                 linkElement.href = json.html_url;
//     })
// })


document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.profile-name');
    const usernameElement = document.querySelector('.profile-username');
    const avatarElement = document.querySelector('.profile-avatar');
    const reposElement = document.querySelector('.numbers-item:nth-child(1)');
    const followersElement = document.querySelector('.numbers-item:nth-child(2)');
    const followingElement = document.querySelector('.numbers-item:nth-child(3)');
    const linkElement = document.querySelector('.profile-link');

    fetch('https://api.github.com/users/kingmancha')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.lastElementChild.innerText = json.following; 
            followersElement.lastElementChild.innerText = json.followers; 
            reposElement.lastElementChild.innerText = json.public_repos; 
            linkElement.href = json.html_url;
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
});
