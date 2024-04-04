// How would you consume a RESTful JSON API?
// fetch('https://api.example.com/data', {
//     method: 'GET', // or 'POST', 'PUT', 'PATCH', 'DELETE'
//     headers: {
//         'Content-Type': 'application/json',
//         // Authorization headers if needed
//     },
//     // Include body if necessary for POST, PUT requests
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));



// → How would you create a form to collect user data?

// <form id="userForm">
//     <label for="name">Name:</label>
//     <input type="text" id="name" name="name">
//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email">
//     <button type="submit">Submit</button>
// </form>


// document.getElementById('userForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);
//     console.log(data); // Process or send the data
// });





{/* // → How would you go about implementing search on a website? */}

{/* <input type="text" id="searchInput" onkeyup="searchFunction()" placeholder="Search for names...">


function searchFunction() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    // Assume you have a list of items to search through.
    document.querySelectorAll('.item').forEach(item => {
        if (item.textContent.toUpperCase().includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
} */}


