function openChatGPT() {
    window.open("https://chat.openai.com", "_blank");
}

function toggleSettings() {
    const settingsPanel = document.getElementById("settings-panel");
    settingsPanel.classList.toggle("active");
}

// Change Website Color Scheme based on icon clicked
function changeColor(theme) {
    switch (theme) {
        case 'theme1':
            // Light theme
            document.body.style.backgroundColor = '#f0f0f0';
            document.body.style.color = '#333';
            break;
        case 'theme2':
            // Dark theme
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#333';
            break;
        case 'theme3':
            // Blue theme
            document.body.style.backgroundColor = '#3498db';
            document.body.style.color = '#333';
            break;
        default:
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
    }
}