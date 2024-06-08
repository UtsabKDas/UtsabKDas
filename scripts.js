window.onload = function() {
    // Read CSV file and populate video list
    fetch('videos.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n').slice(1); // Exclude header row
        const videoList = document.getElementById('videoList');
        rows.forEach(row => {
            const [title, url] = row.split(',');
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = url.trim();
            link.textContent = title.trim();
            listItem.appendChild(link);
            videoList.appendChild(listItem);
        });
    })
    .catch(error => console.error(error));
}
