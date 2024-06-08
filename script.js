document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            
            if (buttonText === 'AC') {
                display.textContent = '0';
            } else if (buttonText === 'DE') {
                display.textContent = display.textContent.slice(0, -1) || '0';
            } else if (buttonText === '=') {
                try {
                    display.textContent = eval(display.textContent);
                } catch {
                    display.textContent = 'Error';
                }
            } else {
                if (display.textContent === '0' || display.textContent === 'Error') {
                    display.textContent = buttonText;
                } else {
                    display.textContent += buttonText;
                }
            }
        });
    });
});
