function addData(chart, data) {
    chart.data.datasets.forEach((dataset) => {
        data.forEach((data)=>{
            dataset.data.push(data)
        });
    });
    chart.update();
}


function criarGrafico(){
    const ctx = document.getElementById("grafico");
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Proteínas', 'Carboidratos', 'Gorduras'],
            datasets: [{
                label: 'Macro Nutrientes em gramas',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(37, 194, 105, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(37, 194, 105, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Macro Nutrientes em gramas',
                    color: '#000000',
                    font: {
                        size: 20,
                        family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                    }
                }
            }   
        }
    });
    
}