

const articlesPrintedData = 0; // Початкове значення - 0 статей надруковано
  const articlesGeneratedData = 0; // Початкове значення - 0 статей згенеровано
  const labels = ['0с']; // Початкова мітка

  let generate = articlesGeneratedData;
  let allNews=0 //кількість всіх згенерованих статей
  let blueLine=0//значення синій гілці

  // Функція для оновлення графіка
  function updateChart() {
    myChart.data.datasets[0].data.push(generate);
    myChart.data.datasets[1].data.push(blueLine);
    const currentTime = new Date();
    labels.push(currentTime.getSeconds() + 'с');
    // console.log(allNews)
    if (allNews > 0) {
      allNews=allNews-1
      blueLine = 1;
    } else {
      blueLine = 0;
    }

    myChart.update();
  }

  // Функція для обнулення `generate` кожні 4 секунди
  function resetGenerate() {
    generate = 0;
  }

  // Оновлення графіка кожні 4 секунди
  setInterval(updateChart, 4000);

  // Обнулення `generate` кожні 4 секунди
  setInterval(resetGenerate, 4000);

  function generateNews() {
    const news = user.generateNews();
    network.transmitNews(news);
    server.importantNews(news);
    generate += 1;
    allNews=allNews+1
    // console.log(allNews)
  }

  const ctx = document.getElementById('myChart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'line', // Тип графіка (лінійний)
    data: {
      labels: labels,
      datasets: [ {
        label: 'Згенеровано статей',
        data: [generate],
        borderColor: 'red',
        fill: false,
      },{
        label: 'Опубліковано статей',
        data: [blueLine],
        borderColor: 'blue',
        fill: false,
      }],
    },
  });