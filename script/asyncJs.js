// // let gitAPiToken = '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'
// // var myHeaders = new Headers();
// // myHeaders.append("Authorization", "Bearer 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");
// // var requestOptions = {
// //   method: 'GET',
// //   headers: myHeaders,
// //   redirect: 'follow'
// // };
// // get github user using gitApiToken
// // setting up main page to show or hid based on screen size





///aksjdfaksdjkfajksdfjaksdjfkasdjfkasdkfsakdfjks









var myApiKey = 'E19eYiCV0AQhSZuiySSelZTTqnY93wDM';
var apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&q=taco&limit=2`

var mainElement = getElementById("main");


window.matchMedia('(max-height: 800px)').addListener(function(mediaQuery) {
  mediaQuery.matches ? main.classList.remove("main-mobile") :  main.classList.add("main-mobile");
});

function getElementById (value){
  return document.getElementById(value);
}
function renderContent(content) {
  mainElement.innerHTML += content;

}

let search = document.getElementById('gifer');

search.addEventListener('keyup', renderGif);


function renderGif(e){
  mainElement.innerHTML = '';
  var value = e.target.value
  console.log(value)
  var apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&q=${value}&limit=15`
  fetch(apiUrl)
  .then(function (resp) { return resp.json()})
  .then(results => renderResult(results))
}




function  renderResult(result) {
  var data = result.data;
  for(var i=0; i< data.length; i++){
    renderContent(`<img src= ${data[i].images.original.url}>`)
  }
}

//askdfkadjfkdjsfdjfkdjdkjf



// get value from input field and add to url to get data from giphy api
// crete a beutiful input field with serch placehosder 
// add a button to search
// add a button to clear the input field
// add a button to clear the main element
// var searchInputs = document.getElementById("searchGif");
// searchInputs.addEventListener('keyup',  function(e) {
//   console.log(e)
//   searchValue = e.target.value;
//   searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=E19eYiCV0AQhSZuiySSelZTTqnY93wDM&q=${searchValue}&limit=25&offset=0&rating=G&lang=en`;
//   mainElement.innerHTML = '';
//   getData(searchUrl);

// });
 
// function getData(params) {
//   fetch(params)
//    .then(response => response.json())
//    .then(data => {
//       data = data.data;
//       displayResults(data);
//    })
//    .catch(error => console.log('error', error));  
// }

// function displayResults(data) {
//   for(var i = 0; i<=data.length; i++){
//     renderContent(`<div>
//       <h3> ${data[i].title} </h3>
//       <img src=${data[i].images.original.url}>
//     </div>`)
//   }
// }

// let url = 'https://api.giphy.com/v1/gifs/search?api_key=E19eYiCV0AQhSZuiySSelZTTqnY93wDM&q=red+panda&offset=0&rating=G&lang=en';


// fetch(url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(
//     function (results) {
//       let data = results.data
//       console.log(data);

//     }
//   )



  // E19eYiCV0AQhSZuiySSelZTTqnY93wDM
//title 
// 

























// let url = `https://api.github.com/users/qasimtalkin`;
// let url2 = `https://api.github.com/users/EnzoTragnone`;
// let url3 = `https://api.github.com/users/rfabreu`;

// let urlArr = [url, url2, url3];
// // Single Thread Demo'

// function renderData(dataJson) {
//   // dataJson = JSON.parse(data);
//   main.innerHTML += `<img src=${dataJson.avatar_url} alt="GIT HUB AVATAR"/>`;
//   main.innerHTML += `<h3>Name : ${dataJson.name}</h3>`;
//   main.innerHTML += `<div> GitUserName : ${dataJson.login}</div>`
//   main.innerHTML += `<h2> <a href=${dataJson.html_url}>Git Repo</a> </h2>`;
//   main.innerHTML += `<br>`;
// }
// function renderError(error) {
//   main.innerHTML = '<p>Something went wrong</p>';
//   main.innerHTML += `error : ${error}`;
// }

// console.log('Single Thread Demo Log 1');
// console.log('Single Thread Demo Log 2');
// console.log('Single Thread Demo Log 3');
// setTimeout(logStuff, 1000);
// console.log('Single Thread Demo Log 4');
// console.log('Single Thread Demo Log 5');
// function logStuff() {
//   console.log('Stuff');
// }


// Fetches data from the server 


// let getMyData = function(doThisOnceCompeleted) {

//   let request = new XMLHttpRequest();
//   request.addEventListener('readystatechange', function() {
//     if (request.readyState===4 && request.status===200){
//       doThisOnceCompeleted(undefined, request.response)
//     } else if(request.readyState===4) {
//       doThisOnceCompeleted('error', undefined)
//     }
//   });
//   request.open('GET', url);
//   request.send();
// }
// getMyData( function (error, data){
//     if (error) {
//       main.innerHTML += '<p>Something went wrong</p>';
//     } else {
//       dataJson = JSON.parse(data);
//       main.innerHTML += `<img src=${dataJson.avatar_url} alt="GIT HUB AVATAR"/>`;
//       main.innerHTML += `<h3>Name : ${dataJson.name}</h3>`;
//       main.innerHTML += `<div> GitUserName : ${dataJson.login}</div>`
//       main.innerHTML += `<a href=${dataJson.repos_url}>Git Rep</a>`
//  }
// });

// Fetches data from the server using promise

// let getMyData = (urlParam) => { 
//   return new Promise(function(resolve, reject) {
//     let request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', function() {
//       if (request.readyState===4 && request.status===200){
//         resolve(request.response)
//       } else if(request.readyState===4) {
//         reject('error')
//       }
//     });
//     request.open('GET', urlParam);
//     request.setRequestHeader("Authorization", `Bearer ${gitAPiToken}`);
//     request.send();
//   });
// }

// getMyData(url).then(function(data){
//   renderData(data);
//   return getMyData(url2);
// }).then(function (data) {
//   renderData(data);
//   return getMyData(url3)})
// .then((data)=>renderData(data))
// .catch(function(error) {
//   renderError(error); 
// });



// fetch

// let getMyData2 = fetch(url, requestOptions).then(function(data){
//   return data.json();}).then(function(data){
//     renderData(data);
//     return fetch(url2, requestOptions);
//   }).then(function(data){
//     return data.json();
//   }).then(function(data){
//     renderData(data); 
//     return fetch(url3, requestOptions); 
//   }).then(function(data){
//     return data.json();
//   } ).then(function(data){
//     renderData(data);
//   }).catch(function(error) {
//     renderError(error); 
//   });

//Async/Await
// let getMyData = async () => { 
//     let request = await fetch(url, requestOptions) ;
//     let data = await request.json();
//     renderData(data)
// }
// getMyData();
