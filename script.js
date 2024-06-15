document.getElementById('url-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const urlInput = document.getElementById('url-input').value.trim();
    if (!urlInput) {
        alert('Please enter a valid URL.');
        return;
    }

    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(urlInput)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch web information');
        }
        const data = await response.json();

        // Menampilkan hasil informasi dari API
        const webInfoContainer = document.getElementById('web-info');
        webInfoContainer.innerHTML = `
            <h3>${data.title}</h3>
            <p><strong>URL:</strong> ${data.url}</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <img src="${data.image.url}" alt="Web Screenshot" class="img-fluid">
        `;
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch web information. Please try again.');
    }
});