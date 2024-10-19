document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Previene el envío normal del formulario

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                alert('Formulario enviado con éxito.');
                form.reset(); // Reinicia el formulario
            } else {
                alert('Error al enviar el formulario.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar el formulario.');
        }
    });
});
