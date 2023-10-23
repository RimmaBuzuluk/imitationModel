const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line', // Тип графіка (лінійний)
      data: {
        labels: labels,
        datasets: [{
          label: 'Надруковано статей',
          data: articlesPrintedData,
          borderColor: 'blue',
          fill: false,
        }, {
          label: 'Згенеровано статей',
          data: articlesGeneratedData,
          borderColor: 'red',
          fill: false,
        }],
      },
    });