class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  generateNews() {
    const categories = ['Політика', 'Економіка', 'Спорт', 'Технології'];
    const randomTitle = `Новина ${Math.random()}`;
    const randomText = `Це текст новини з категорії ${categories[Math.floor(Math.random() * categories.length)]}`;
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    const news = {
      title: randomTitle,
      text: randomText,
      category: randomCategory,
    };

    // console.log(news);

    return news;
  }
}

/////////////////////////////////////////////////////////////
class Network {
  constructor() {
    this.newsBuffer = [];
  }

  transmitNews(news) {
    this.newsBuffer.push(news);
  //   console.log('News transmitted to network:', news);
  }
}

////////////////////////////////////////

class Server {
  constructor() {
      this.processingTimePerNews = 4000; // Час обробки однієї новини (в мілісекундах)
      this.queue = []; // Черга новин
      this.newsArrivalTimes = []; // Зберігати часи приходу новин
    }

    importantNews(news){
      const isImportant=news.category ==='Політика';
      this.newsArrivalTimes.push(new Date());
      if(isImportant){
          const existingPolitikaNewsIndex = this.queue.findIndex(item => item.news.category === 'Політика');
          // console.log(existingPolitikaNewsIndex)
          
          if (existingPolitikaNewsIndex !== -1) {
              // If a news with category 'Політика' exists, insert the new news before it
              this.queue.splice(existingPolitikaNewsIndex+1, 0, { news, isImportant });
            } else {
              // If no news with category 'Політика' exists, add the new news to the beginning of the queue
              this.queue.unshift({ news, isImportant });
            }
      }
      else{
          this.queue.push({news, isImportant})
      }
      

      this.processQueue();
    }
    

  async processQueue() {
      if (this.processing) {
        return; // Если обработка уже идет, выходим
      }

      this.processing = true;

      while (this.queue.length > 0) {
        // Додаємо нову статтю до списку
        
        const firstElement = this.queue.shift();
        const arrivalTime = this.newsArrivalTimes.shift(); // Отримати час прибуття новини
        const processingStartTime = new Date(); // Час початку обробки
        // console.log(`Новина "${firstElement.news.title}" прибула до системи о ${arrivalTime} та була оброблена о ${processingStartTime}`);
        console.log(`Час який оброблялась новина ${(processingStartTime - arrivalTime) / 1000}с`)
        
        const newsList = document.getElementById('generatedNews');
        const listItem = document.createElement('li');
        listItem.textContent = `Новина: ${firstElement.news.title}, Категорія: ${firstElement.news.category}, Важлива: ${firstElement.isImportant}`;
        newsList.appendChild(listItem); 
        // console.log('Processing element', firstElement);
        await new Promise(resolve => setTimeout(resolve, this.processingTimePerNews));
      }

      this.processing = false;
      // console.log('Черга пуста');
    }

  
}