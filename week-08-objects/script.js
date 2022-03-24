// Array of objects representing a series and episode list.
// Modify this array to contain your own list.
const seriesandepisodeArray = [
  {label: 'Untitled Rumplestiltskin Series', episodes: 10},
  {label: 'Homework Half Hour', episodes: 32},
  {label: 'The Intergalactic League of Space Photographers', episodes: 1},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  SeriesArray.sort((a, b) => compare(a.label, b.label));

  loadTable();
  loadShortestEpisode();
}

// Adds a task to the array and reloads the page content.
function addNewTask() {
  const newSeriesLabel = document.getElementById('label-input').value;
  const newSeriesTime = document.getElementById('episode-input').value;
  const newSeries = {label: newSeriesLabel, time: newepisodeTime };
  seriesArray.push(newSeries);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Series'));
  headerRowElement.appendChild(createElement('th', 'Episode'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < seriesArray.length; i++) {
    const task = seriesArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', series.label));
    rowElement.appendChild(createElement('td', series.time));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest episode.
function loadShortestEpisode(){
  // Assume the first task is shortest
  let shortestTask = SeriesArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < seriesArray.length; i++) {
    const task = taskArray[i];
    // If this series is shorter than the previous shortest, it's now the shortest
    if(series.episode < shortestSeries.episode) {
      shortestSeries = series;
    }
  }
  document.getElementById('shortest-task').innerText = shortestepisode.series;
}

// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}
