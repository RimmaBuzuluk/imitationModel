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
  
      console.log(news);

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
        this.processingTimePerNews = 3000; // Час обробки однієї новини (в мілісекундах)
        this.queue = []; // Черга новин
      }

      importantNews(news){
        const isImportant=news.category ==='Політика';

        if(isImportant){
            const existingPolitikaNewsIndex = this.queue.findIndex(item => item.news.category === 'Політика');
            console.log(existingPolitikaNewsIndex)

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
        console.log(this.queue)

        this.processQueue();
      }

    processQueue(){
        // const currentWord = this.queue.shift();
        // console.log("Перше слово: ", currentWord);
    }
  }