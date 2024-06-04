document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display-input');
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            switch(value) {
                case 'C':
                    display.value = '';
                    break;
                case 'CE':
                    display.value = display.value.slice(0, -1);
                    break;
                case '=':
                    try {
                        display.value = eval(display.value);
                    } catch (error) {
                        display.value = 'Error';
                    }
                    break;
                default:
                    display.value += value;
                    break;
            }
        });
    });
});
