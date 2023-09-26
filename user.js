// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   generateNews() {
//     const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
//     const randomTitle = `Новина ${Math.random()}`;
//     const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//     const news = {
//       title: randomTitle,
//       text: randomText,
//       category: randomCategory,
//     };

//     // Передаємо та обробляємо новину
//     server.processNews(news);
//   }
// }

// class Network {
//   constructor() {
//     this.newsBuffer = [];
//   }

//   transmitNews(news) {
//     this.newsBuffer.push(news);
//     console.log('News transmitted to network:', news);
//   }
// }

// class Server {
//   constructor() {
//     this.processingTimePerNews = 3000; // Час обробки однієї новини (в мілісекундах)
//     this.queue = []; // Черга новин
//   }

//   processNews(news) {
//     const isImportant = news.category === 'Політика';

//     if (isImportant) {
//       // Якщо новина важлива (категорія "політика"), додаємо вперед черги
//       this.queue.unshift({ news, isImportant });
//     } else {
//       // Якщо новина не важлива, додаємо в кінець черги
//       this.queue.push({ news, isImportant });
//     }

//     // Запустіть обробку черги
//     this.processQueue();
//   }

//   processQueue() {
//     if (this.queue.length > 0) {
//       const nextNews = this.queue.shift(); // Вийміть наступну новину з черги

//       // Симулюйте час обробки новини
//       setTimeout(() => {
//         console.log(`News processed: ${nextNews.news.title}, Important: ${nextNews.isImportant}`);
//         displayNews(nextNews.news);

//         // Повторіть обробку черги через 3 секунди
//         setTimeout(() => {
//           this.processQueue();
//         }, 3000);
//       }, this.processingTimePerNews);
//     }
//   }
// }

// const network = new Network();
// const server = new Server();
// const user = new User('John');

// function generateNews() {
//   user.generateNews();
// }

// function displayNews(news) {
//   // Додаємо нову статтю до списку
//   const newsList = document.getElementById('generatedNews');
//   const listItem = document.createElement('li');
//   listItem.textContent = `Новина: ${news.title}, Категорія: ${news.category}, Важлива: ${news.isImportant}`;
//   newsList.appendChild(listItem);
// }

// </script>

// </body>
// </html>
// Тепер новини будуть правильно додаватися до черги та відображатися після обробки.




// User
// class User {
// constructor(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// generateNews() {
//   const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
//   const randomTitle = `Новина ${Math.random()}`;
//   const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
//   const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//   const generatedNews = `
//     <h3>${randomTitle}</h3>
//     <p><strong>Категорія:</strong> ${randomCategory}</p>
//     <p>${randomText}</p>
//   `;

//   // Відображення згенерованої новини в блоку з id "generatedNews"
//   document.getElementById('generatedNews').innerHTML = generatedNews;
// }
// }

// <!DOCTYPE html>
// <html>
// <head>
// <title>Система обробки новин</title>
// </head>
// <body>

// <h1>Система обробки новин</h1>

// <!-- Форма для генерації новин -->
// <div>
// <h2>Створення новини</h2>
// <button onclick="generateNews()">Згенерувати новину</button>
// <ul id="generatedNews"></ul>
// </div>

// <script src="user.js">


// </script>

// </body>
// </html>


// index.html:13 Uncaught ReferenceError: generateNews is not defined
//   at HTMLButtonElement.onclick (index.html:13:36)
// ChatGPT
// The error occurs because the generateNews() function is a method of the User class, but you're trying to call it directly without creating an instance of the User class. To fix this, you need to create an instance of the User class and then call the generateNews() method on that instance.

// Here's the updated code:

// html
// Copy code
// <!DOCTYPE html>
// <html>
// <head>
// <title>Система обробки новин</title>
// </head>
// <body>

// <h1>Система обробки новин</h1>

// <!-- Форма для генерації новин -->
// <div>
// <h2>Створення новини</h2>
// <button onclick="generateNews()">Згенерувати новину</button>
// <ul id="generatedNews"></ul>
// </div>

// <script src="user.js"></script>

// <script>
// const user = new User('John', 'Doe');

// function generateNews() {
//   user.generateNews();
// }
// </script>

// </body>
// </html>
// In this updated code, we've included the user.js script, created an instance of the User class named user, and then called the generateNews() method on the user instance when the button is clicked.




// User
// <!DOCTYPE html>
// <html>
// <head>
// <title>Система обробки новин</title>
// </head>
// <body>

// <h1>Система обробки новин</h1>

// <!-- Форма для генерації новин -->
// <div>
// <h2>Створення новини</h2>
// <button onclick="generateNews()">Згенерувати новину</button>
// <ul id="generatedNews"></ul>
// </div>

// <script src="n.js">


// </script>

// </body>
// </html>

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   generateNews() {
//     const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
//     const randomTitle = `Новина ${Math.random()}`;
//     const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//     const news = {
//       title: randomTitle,
//       text: randomText,
//       category: randomCategory,
//     };

//     console.log(news)

//   }
// }

















// console.log("sllslsl")

// xjve yt ghfw.' &
// ChatGPT
// It seems like you want to generate news and log them when the button is clicked. Let's adjust your code to achieve this:

// Update your HTML to include the user.js script and call the generateNews() function from there:
// html
// Copy code
// <!DOCTYPE html>
// <html>
// <head>
// <title>Система обробки новин</title>
// </head>
// <body>

// <h1>Система обробки новин</h1>

// <!-- Форма для генерації новин -->
// <div>
// <h2>Створення новини</h2>
// <button onclick="generateNews()">Згенерувати новину</button>
// <ul id="generatedNews"></ul>
// </div>

// <script src="user.js"></script>

// <script>
// function generateNews() {
//   const user = new User('John', 'Doe');
//   user.generateNews();
// }
// </script>

// </body>
// </html>
// Update your user.js file (assuming it's in the same directory as your HTML file) to properly define the User class:
// javascript
// Copy code
// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   generateNews() {
//     const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
//     const randomTitle = `Новина ${Math.random()}`;
//     const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//     const news = {
//       title: randomTitle,
//       text: randomText,
//       category: randomCategory,
//     };

//     console.log(news);
//   }
// }

// console.log("sllslsl");
// Now, when you click the "Згенерувати новину" button, it will call the generateNews() function, creating a new User instance and generating news, which will be logged to the console. The console.log("sllslsl") statement will also log "sllslsl" to the console.




// User
// <!DOCTYPE html>
// <html>
// <head>
// <title>Система обробки новин</title>
// </head>
// <body>

// <h1>Система обробки новин</h1>

// <!-- Форма для генерації новин -->
// <div>
// <h2>Створення новини</h2>
// <button onclick="generateNews()">Згенерувати новину</button>
// <ul id="generatedNews"></ul>
// </div>

// <script >
// function generateNews() {
//   const user = new User('John', 'Doe');
//   user.generateNews();
// }

// </script>

// </body>
// </html>
// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   generateNews() {
//     const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
//     const randomTitle = `Новина ${Math.random()}`;
//     const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//     const news = {
//       title: randomTitle,
//       text: randomText,
//       category: randomCategory,
//     };

//     console.log(news)

//   }
// }

















// console.log("sllslsl")
// ChatGPT
// Your HTML and JavaScript code look good. When you click the "Згенерувати новину" button, it will call the generateNews() function, which creates a new User instance and generates news. The generated news will be logged to the console, and "sllslsl" will also be logged.

// To see the output in the browser console, you should open the developer tools in your web browser (usually by pressing F12 or right-clicking on the page and selecting "Inspect"), and then go to the "Console" tab. When you click the button, you should see the generated news and "sllslsl" logged in the console.




// User


// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   generateNews() {
//     const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
//     const randomTitle = `Новина ${Math.random()}`;
//     const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//     const news = {
//       title: randomTitle,
//       text: randomText,
//       category: randomCategory,
//     };

//     console.log(news)

//   }
// }

// <!DOCTYPE html>
// <html>
// <head>
// <title>Система обробки новин</title>
// </head>
// <body>

// <h1>Система обробки новин</h1>

// <!-- Форма для генерації новин -->
// <div>
// <h2>Створення новини</h2>
// <button onclick="generateNews()">Згенерувати новину</button>
// <ul id="generatedNews"></ul>
// </div>

// <script >
// function generateNews() {
//   const user = new User('John', 'Doe');
//   user.generateNews();
// }

// </script>

// </body>
// </html>


// Uncaught ReferenceError: User is not defined
//   at generateNews (index.html:19:18)
//   at HTMLButtonElement.onclick (index.html:13:36)


// що не працює?
// ChatGPT
// The error you're encountering, "Uncaught ReferenceError: User is not defined," indicates that the User class is not recognized or defined in the current scope.

// In your provided code, you have the User class defined in the same file as your HTML, but it's not being recognized when you try to call it in the generateNews function.

// To fix this, you need to ensure that the User class is defined before you try to use it. One common approach is to place your JavaScript code in a separate file and then include it in your HTML file using the <script> tag.

// Here's an example of how you can do this:

// user.js: Create a separate JavaScript file (e.g., user.js) and define the User class in it.
// javascript
// Copy code
// class User {
// constructor(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// generateNews() {
//   const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
//   const randomTitle = `Новина ${Math.random()}`;
//   const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
//   const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//   const news = {
//     title: randomTitle,
//     text: randomText,
//     category: randomCategory,
//   };

//   console.log(news);
// }
// }
// index.html: In your HTML file, include the JavaScript file using the <script> tag, and then call the generateNews function.
// html
// Copy code
// <!DOCTYPE html>
// <html>
// <head>
// <title>Система обробки новин</title>
// </head>
// <body>

// <h1>Система обробки новин</h1>

// <!-- Форма для генерації новин -->
// <div>
// <h2>Створення новини</h2>
// <button onclick="generateNews()">Згенерувати новину</button>
// <ul id="generatedNews"></ul>
// </div>

// <script src="user.js"></script>
// <script>
// function generateNews() {
//   const user = new User('John', 'Doe');
//   user.generateNews();
// }
// </script>

// </body>
// </html>
// Ensure that the user.js file is in the same directory as your HTML file or adjust the path in the <script> tag accordingly.

// This separation will resolve the issue of the User class not being recognized.




// User
// <!DOCTYPE html>
// <html>
// <head>
// <title>Система обробки новин</title>
// </head>
// <body>

// <h1>Система обробки новин</h1>

// <!-- Форма для генерації новин -->
// <div>
// <h2>Створення новини</h2>
// <button onclick="generateNews()">Згенерувати новину</button>
// <ul id="generatedNews"></ul>
// </div>

// <script src="n.js"></script>
// <script>
// const network = new Network();
// const server = new Server();
// const user = new User('John');

// function generateNews() {
//   user.generateNews();
// }
// </script>

// </body>
// </html>

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   generateNews() {
//     const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
//     const randomTitle = `Новина ${Math.random()}`;
//     const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//     const news = {
//       title: randomTitle,
//       text: randomText,
//       category: randomCategory,
//     };

//     console.log(news);
//   }
// }

// /////////////////////////////////////////////////////////////
// class Network {
//   constructor() {
//     this.newsBuffer = [];
//   }

//   transmitNews(news) {
//     this.newsBuffer.push(news);
//     console.log('News transmitted to network:', news);
//   }
// }

// ////////////////////////////////////////

// class Server {
//   constructor() {
//       this.processingTimePerNews = 3000; // Час обробки однієї новини (в мілісекундах)
//       this.queue = []; // Черга новин
//     }

//     importantNews(news){
//       const isImportant=news.category ==='Політика';

//       if(isImportant){
//           console.log("true")
//       }
//       else{
//           console.log("false")
//       }

//     }
// }

// почему не работает network и server?
// ChatGPT
// In the provided code, there are a few issues that need to be addressed to ensure that network and server work correctly:

// Order of script inclusion: Ensure that the order of script inclusion is correct. n.js should be included before the script that uses Network and Server classes.

// Instantiation: Make sure to instantiate Network and Server before using them.

// Usage of importantNews: It seems like the importantNews method is defined in the Server class but not being called. If you intend to use it, ensure you call it appropriately.

// Here's a modified version of the code to address these issues:

// html
// Copy code
// <!DOCTYPE html>
// <html>
// <head>
// <title>Система обробки новин</title>
// </head>
// <body>

// <h1>Система обробки новин</h1>

// <!-- Форма для генерації новин -->
// <div>
// <h2>Створення новини</h2>
// <button onclick="generateNews()">Згенерувати новину</button>
// <ul id="generatedNews"></ul>
// </div>

// <script src="n.js"></script>
// <script>
// const network = new Network();
// const server = new Server();
// const user = new User('John');

// function generateNews() {
//   const news = user.generateNews();
//   network.transmitNews(news);
//   server.importantNews(news);
// }
// </script>

// </body>
// </html>
// In this modified version, when you click the "Згенерувати новину" button, it calls generateNews, which in turn calls user.generateNews() to generate news. It then transmits the news using network.transmitNews and checks if the news is important using server.importantNews. Ensure that importantNews method does what you intend to check for importance of news.




// User
// <!DOCTYPE html>
// <html>
// <head>
// <title>Система обробки новин</title>
// </head>
// <body>

// <h1>Система обробки новин</h1>

// <!-- Форма для генерації новин -->
// <div>
// <h2>Створення новини</h2>
// <button onclick="generateNews()">Згенерувати новину</button>
// <ul id="generatedNews"></ul>
// </div>

// <script src="n.js"></script>
// <script>
// const network = new Network();
// const user = new User('John');

// function generateNews() {
//   const news = user.generateNews();
//   network.transmitNews(news);
// }
// </script>
// </body>
// </html>



// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   generateNews() {
//     const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
//     const randomTitle = `Новина ${Math.random()}`;
//     const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//     const news = {
//       title: randomTitle,
//       text: randomText,
//       category: randomCategory,
//     };

//     console.log(news);
//   }
// }

// /////////////////////////////////////////////////////////////
// class Network {
//   constructor() {
//     this.newsBuffer = [];
//   }

//   transmitNews(news) {
//     this.newsBuffer.push(news);
//     console.log('News transmitted to network:', news);
//   }
// }

// почему в network не принимает информацию про news 
// ChatGPT
// The issue is that the generateNews function in the User class is not returning the generated news object. To fix this, modify the generateNews function to return the generated news object.

// Here's the updated User class:

// javascript
// Copy code
// class User {
// constructor(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// generateNews() {
//   const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
//   const randomTitle = `Новина ${Math.random()}`;
//   const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
//   const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//   const news = {
//     title: randomTitle,
//     text: randomText,
//     category: randomCategory,
//   };

//   console.log(news);

//   return news; // Return the generated news
// }
// }
// By adding return news; at the end of the generateNews function, it will now return the generated news object, allowing the generateNews function in your HTML to receive and transmit the news properly.





