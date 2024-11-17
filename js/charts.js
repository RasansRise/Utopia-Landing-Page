const data = [70, 40, 90, 60, 120, 80]; // Example data points

function createChart() {
  const chart = document.getElementById('chart');
  chart.innerHTML = ''; // Clear the previous chart content

  for (let i = 0; i < data.length; i++) {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = data[i] + '%';
    chart.appendChild(bar);
  }
}

createChart(); // Initial chart creation

// Example: Add interactivity to change the chart data dynamically
document.addEventListener('click', () => {
  // Randomize the data for demonstration purposes
  data.forEach((_, i) => {
    data[i] = Math.floor(Math.random() * 100) + 1;
  });

  createChart(); // Re-create the chart with updated data
});
