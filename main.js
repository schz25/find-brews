
const form = document.querySelector('.form-data');
const city = document.querySelector('.city-name');

const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const mycity = document.querySelector('my-city');
const breweries = document.querySelector('brews');
const clearBtn = document.querySelector('.clear-btn');

const params = {
  cityName: '.city-name',
  brewName: 'brews',
};
const options = {
  method: 'POST',
  body: JSON.stringify( params )  
};
fetch( 'https://api.openbrewerydb.org/breweries?by_city', city )
  .then( response => response.json() )
  .then( response => {
      // response should list breweries based on the users city input
  } );

// form.addEventListener('submit', (e) => handleSubmit(e));
// clearBtn.addEventListener('click', (e) => reset(e));
// init();


// function handleSubmit(e) {
// 	e.preventDefault();
// 	setUpUser(city.value);
// }

// function setUpUser(cityName) {
// 	localStorage.setItem('cityName', cityName);
// 	loading.style.display = 'block';
// 	errors.textContent = '';
// 	clearBtn.style.display = 'block';
// 	//make initial call
// 	displayBrews(cityName);
// }
// async function displayBrews(city) {
// 	try {
// 		await axios
// 			.get('https://api.openbrewerydb.org/breweries?by_city', {
// 				params: {
// 					cityCode: city,
// 				}
        
// 			.then((response) => {
// 				//let response = figure out response

// 				loading.style.display = 'none';
// 				form.style.display = 'none';
// 				mycity.textContent = city;
//         results.style.display = 'block';
// 			// response results with brewery listings based on city

// 			})