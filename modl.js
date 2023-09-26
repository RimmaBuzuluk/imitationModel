class User {
    constructor(name) {
      this.name = name;
    }
  
    generateNews() {
      const allCategories=['policy', 'economics', 'sport', 'technologies', 'entertainment'];

      const yourTitle= "";
      const yourText = "";
      const yourCategories=""


      return{
        title:yourTitle,
        text:yourText,
        category:yourCategories
      }
    }
  }
  
  class Network {
    constructor() {
      this.newsBuffer = [];
    }
  
    transmitNews(news) {
      this.newsBuffer.push(news);
    }
  }
  
  class Server {
    constructor() {
      this.colorfulNewsBuffer = [];
      this.blackAndWhiteNewsBuffer = [];
    }
  
    processNews() {
      // Обробка новин та розподіл їх за категоріями тут
    }
  }
  