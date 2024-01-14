// Tea.js 라이브러리
const Tea = {
  createBarChart: function (data, labels, containerId) {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    
    const maxValue = Math.max(...data);
    const barWidth = 40;
    const spacing = 20;
    const chartHeight = canvas.height - 50;
    
    ctx.fillStyle = 'blue';
    
    for (let i = 0; i < data.length; i++) {
      const x = i * (barWidth + spacing);
      const barHeight = (data[i] / maxValue) * chartHeight;
      ctx.fillRect(x, chartHeight - barHeight, barWidth, barHeight);
      
      // 라벨 표시
      ctx.fillStyle = 'black';
      ctx.fillText(labels[i], x + barWidth / 2, chartHeight + 20);
    }
    
    const chartContainer = document.getElementById(containerId);
    chartContainer.appendChild(canvas);
  },
  
  createTable: function (data, containerId) {
    const table = document.createElement('table');
    table.className = 'tea-table';
    
    for (let i = 0; i < data.length; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < data[i].length; j++) {
        const cell = document.createElement(i === 0 ? 'th' : 'td');
        cell.textContent = data[i][j];
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    
    const tableContainer = document.getElementById(containerId);
    tableContainer.appendChild(table);
  }
};
