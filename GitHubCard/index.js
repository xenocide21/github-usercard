/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/xenocide21')
    .then(response => {
        console.log(response);
        document.querySelector('.cards').append(idCard(response));
    })
    .catch(err => {
        console.log('The data returned with an error.', err);
    });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
function idCard(info) {
    const card = document.createElement('div');
    const image = document.createElement('img');
    const cardDesc = document.createElement('div');
    const cardH1 = document.createElement('h1');
    const accountName = document.createElement('p');
    const accountId = document.createElement('p');
    const dateCreated = document.createElement('p');
    const dateUpdated = document.createElement('p');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const local = document.createElement('p');
    const repos = document.createElement('p');
    const reposUrl = document.createElement('a');
    const githubProfileURL = document.createElement('a');
    const githubIcon = document.createElement('a');



    card.appendChild(image);
    card.appendChild(cardDesc);

    cardDesc.appendChild(cardH1);
    cardDesc.appendChild(accountName);
    cardDesc.appendChild(accountId);
    //cardDesc.appendChild(dateCreated);
    cardDesc.appendChild(dateUpdated);
    cardDesc.appendChild(local);
    cardDesc.appendChild(followers);
    cardDesc.appendChild(following);
    cardDesc.appendChild(repos);
    //cardDesc.appendChild(reposUrl);
    //cardDesc.appendChild(githubProfileURL);
    cardDesc.appendChild(githubIcon);


    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github-square');
    card.classList.add('card');
    cardDesc.classList.add('card-info');
    cardH1.classList.add('name');
    accountId.classList.add('username');

    githubIcon.textContent = '';
    image.src = info.data.avatar_url;
    cardH1.textContent = info.data.name;
    accountId.textContent = info.data.login;
    local.textContent = info.data.location;
    dateCreated.textContent = `Date Created: ${info.data.created_at}`;
    dateUpdated.textContent = `Date Updated: ${info.data.updated_at}`;
    followers.textContent = `Followers: ${info.data.followers}`;
    following.textContent = `Following: ${info.data.following}`;
    repos.textContent = `Repos: ${info.data.public_repos}`;
    reposUrl.textContent = info.data.repos_url;
    //githubProfileURL.textContent = info.data.html_url;
    //githubProfileURL.textContent = ``;

    githubIcon.setAttribute('href', info.data.html_url);

    //document.querySelector('fab').style.fontSize='50px';

    githubIcon.style.fontSize='xx-large';
    githubIcon.style.textDecoration='none';
    githubIcon.style.color='#2cb5e8';

    // const qrCodeDiv = document.createElement('div');
    // const qrCode = document.createElement('script');
    //
    // qrCode.setAttribute('type', 'text/javascript');
    //
    // qrCodeDiv.setAttribute('id', 'qrcode');
    // qrCodeDiv.setAttribute('value', `${info.data.html_url}`);
    //
    //
    // card.appendChild(qrCodeDiv);
    // card.appendChild(qrCode);
    // var qrcode = new QRCode(document.getElementById('qrcode'));
    //
    // function makeCode () {
    //     var elText = document.getElementById('qrcode');
    //
    //     if (!elText.value) {
    //         alert("Input a text");
    //         elText.focus();
    //         return;
    //     }
    //
    //     qrcode.makeCode(elText.value);
    // }
    // makeCode();
    // $("#text").
    // on("blur", function () {
    //     makeCode();
    // }).
    // on("keydown", function (e) {
    //     if (e.keyCode == 13) {
    //         makeCode();
    //     }
    // });



    return card;
}



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [];

followersArray.push("https://api.github.com/users/tetondan");
followersArray.push("https://api.github.com/users/dustinmyers");
followersArray.push("https://api.github.com/users/justsml");
followersArray.push("https://api.github.com/users/luishrd");
followersArray.push("https://api.github.com/users/bigknell");

console.log(followersArray);

followersArray.forEach( (a) => {
    axios.get(a)
        .then(response => {
            document.querySelector(".cards").append(idCard(response));
        })
});


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
