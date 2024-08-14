// Example of basic form validation
document.addEventListener('DOMContentLoaded', (event) => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log('Form Data:', data);

            // Example alert - remove or modify as needed
            alert('Form submitted!');

            // Prevent actual form submission for demo purposes
            event.preventDefault();
        });
    });
});
