// Dados extraídos da tabela de planejamento Curitiba -> Recife
const dadosViagem = {
  categorias: ['Passagem de avião', 'Hospedagem', 'Alimentação', 'Transporte'],
  precosUnitarios: [1300.00, 200.00, 100.00, 50.00],
  quantidades: [1, 5, 5, 3],
  valoresFinais: [1300.00, 1000.00, 500.00, 150.00]
};

const coresCategorias = ['#3498db', '#9b59b6', '#2ecc71', '#e67e22'];

// 1. Gráfico de Rosca - Distribuição do Valor Final
const ctxDoughnut = document.getElementById('chartDoughnut').getContext('2d');
new Chart(ctxDoughnut, {
  type: 'doughnut',
  data: {
    labels: dadosViagem.categorias,
    datasets: [{
      label: 'Valor Final (R$)',
      data: dadosViagem.valoresFinais,
      backgroundColor: coresCategorias,
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: {
        callbacks: {
          label: (context) => ` R$ ${context.raw.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
        }
      }
    }
  }
});

// 2. Gráfico de Barras - Preço Unitário
const ctxBar = document.getElementById('chartBar').getContext('2d');
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: dadosViagem.categorias,
    datasets: [{
      label: 'Preço Unitário (R$)',
      data: dadosViagem.precosUnitarios,
      backgroundColor: '#34495e',
      borderRadius: 6
    }]
  },
  options: {
    indexAxis: 'y', // Barra Horizontal
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: {
          callback: (value) => `R$ ${value}`
        }
      }
    }
  }
});

// 3. Gráfico de Radar - Quantidade/Frequência
const ctxRadar = document.getElementById('chartRadar').getContext('2d');
new Chart(ctxRadar, {
  type: 'radar',
  data: {
    labels: dadosViagem.categorias,
    datasets: [{
      label: 'Quantidade / Frequência',
      data: dadosViagem.quantidades,
      backgroundColor: 'rgba(46, 204, 113, 0.2)',
      borderColor: '#2ecc71',
      pointBackgroundColor: '#2ecc71',
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        ticks: { stepSize: 1 }
      }
    }
  }
});

// 4. Gráfico Misto - Valor Final vs Preço Unitário
const ctxMixed = document.getElementById('chartMixed').getContext('2d');
new Chart(ctxMixed, {
  type: 'bar',
  data: {
    labels: dadosViagem.categorias,
    datasets: [
      {
        type: 'bar',
        label: 'Valor Final (R$)',
        data: dadosViagem.valoresFinais,
        backgroundColor: 'rgba(52, 152, 219, 0.7)',
        borderColor: '#3498db',
        borderWidth: 1
      },
      {
        type: 'line',
        label: 'Preço Unitário (R$)',
        data: dadosViagem.precosUnitarios,
        borderColor: '#e74c3c',
        backgroundColor: '#e74c3c',
        fill: false,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});
