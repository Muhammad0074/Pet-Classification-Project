document.getElementById('input-file').addEventListener('change', function(e) {
    const fileInput = document.getElementById('input-file');
    const file = fileInput.files[0];

    if (file) {
        const previewImg = document.getElementById('preview-img');
        const reader = new FileReader();
        
        reader.onload = function(e) {
            previewImg.src = e.target.result;
            previewImg.style.display = 'block'; 
        };
        reader.readAsDataURL(file); 
    }
});

document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('input-file');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a file first!');
        return;
    }

    const formData = new FormData(this);
    formData.append('file', file);

    fetch('/upload', { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => {
            const resultSection = document.getElementById('result-container');
            const resultText = document.getElementById('classification-result');
            const confidenceText = document.getElementById('classification-confidence');

            if (data.error) {
                resultText.textContent = `Error: ${data.error}`;
                confidenceText.textContent = '';
            } else {
                resultText.textContent = `This is a: ${data.result}`;
                confidenceText.textContent = `Confidence: ${(data.confidence * 100).toFixed(2)}%`;
            }

            resultSection.classList.add('visible');
        })
        .catch(error => {
            console.error('Error:', error);
            const resultSection = document.getElementById('result-container');
            const resultText = document.getElementById('classification-result');
            const confidenceText = document.getElementById('classification-confidence');
            resultText.textContent = 'An unexpected error occurred. Please try again.';
            confidenceText.textContent = '';
            resultSection.classList.add('visible');
        });
});
