document.addEventListener('DOMContentLoaded', function () {
    const dropArea = document.getElementById('dropArea');
    const fileInput = document.getElementById('jsonFile');
    const uploadBtn = document.getElementById('uploadBtn');
    const messageDiv = document.getElementById('uploadMessage');

    // Button click opens file dialog
    uploadBtn.addEventListener('click', () => fileInput.click());

    // Handle file selection via button
    fileInput.addEventListener('change', function () {
        handleFile(fileInput.files[0]);
    });

    // Drag and drop events
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropArea.style.borderColor = '#333';
            dropArea.style.background = '#f7f7f7';
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropArea.style.borderColor = '#A0A0A0';
            dropArea.style.background = '#fff';
        });
    });

    dropArea.addEventListener('drop', function (e) {
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFile(files[0]);
        }
    });

    function handleFile(file) {
        if (!file) {
            messageDiv.textContent = "Please select a .json file.";
            return;
        }
        if (file.type !== "application/json" && !file.name.endsWith('.json')) {
            messageDiv.textContent = "Only .json files are allowed.";
            return;
        }
        const reader = new FileReader();
        reader.onload = function (event) {
            try {
                JSON.parse(event.target.result);
                messageDiv.textContent = "File uploaded and parsed successfully!";
            } catch (err) {
                messageDiv.textContent = "Invalid JSON file.";
            }
        };
        reader.readAsText(file);
    }

    document.getElementById('continueBtn').addEventListener('click', function () {
        document.getElementById('dropArea').style.display = 'none';
        document.getElementById('loadingBox').style.display = 'block';
    });
});