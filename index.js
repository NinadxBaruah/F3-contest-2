// Define the API endpoints
const API1_ENDPOINT = "https://dummyjson.com/posts";
const API2_ENDPOINT = "https://dummyjson.com/products";
const API3_ENDPOINT = "https://dummyjson.com/todos";

// Function to fetch data from API1 endpoint
function promiseAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(API1_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
          // Display data in table
          const div1 = document.querySelector(".api-class-1");
          console.log(data);
          data.posts.forEach((item) => {
            const divApi1 = document.createElement("div");
            divApi1.setAttribute("class", "api1");
            divApi1.innerHTML = `<h1>Titel:${item.title}</h1>
            <h3>Id:${item.id}</h3>
            <p>Post:${item.body}</p>
            <p>UserId:${item.userId}</p>
            `;
            div1.appendChild(divApi1);
          });
          // Resolve promise
          resolve(true);
        });
    }, 1000);
  });
}

// Function to fetch data from API2 endpoint

// Function to fetch data from API2 endpoint
function promiseAPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(API2_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
          // Display data in table
          console.log(data);
          const div2 = document.querySelector(".api-class-2");
          data.products.forEach((item) => {
            const divApi2 = document.createElement("div");
            divApi2.setAttribute("class", "api2");
            divApi2.innerHTML = `<h1>Brand:${item.brand}</h1>

            <img src="${item.images[0]}">















            <h3>Id:${item.id}</h3>
            <h4>Description:${item.description}</h4>
            <h5>Price:${item.price}</h5>
            <h5>Raiting${item.rating}</h5>
            <h5>In Stock:${item.stock}</h5>
            `;
            div2.appendChild(divApi2);
          });
          // Resolve promise
          resolve(true);
        });
    }, 2000);
  });
}

// Function to fetch data from API3 endpoint
function promiseAPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(API3_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
          // Display data in table
          console.log(data);
          const div3 = document.querySelector(".api-class-3");
          data.todos.forEach((item) => {
            const divApi3 = document.createElement("div");
            divApi3.setAttribute("class", "api3");
            divApi3.innerHTML = `<h5>Id:${item.id}</h5>
             <h3>Todo</h3>
             <p>${item.todo}</p>
             <h5>Completed:${item.completed}</h5>
             <h5>userId:${item.userId}</h5>`;
            div3.appendChild(divApi3);
          });
          // Resolve promise
          resolve(true);
        });
    }, 3000);
  });
}

// Wait for button click to start promise chain
const fetchBtn = document.getElementById("fetch-data-btn");
fetchBtn.addEventListener("click", () => {
  promiseAPI1()
    .then((result) => {
      if (result) {
        return promiseAPI2();
      }
    })
    .then((result) => {
      if (result) {
        return promiseAPI3();
      }
    });
});
