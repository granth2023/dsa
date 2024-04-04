// How would you consume a RESTful JSON API?
fetch('https://api.example.com/data', {
    method: 'GET', // or 'POST', 'PUT', 'PATCH', 'DELETE'
    headers: {
        'Content-Type': 'application/json',
        // Authorization headers if needed
    },
    // Include body if necessary for POST, PUT requests
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));



// → How would you create a form to collect user data?
// → How would you go about implementing search on a website?