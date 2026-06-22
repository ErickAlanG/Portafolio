export function inicializarMail() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "tm_e0bqZTH-w11AE5",
            });
};

export function mandarEmail() {
    const form = document.getElementById('contact-form');
    
    // Validación por si el elemento no existe en el DOM en ese momento
    if (!form) {
        console.error("No se encontró el formulario con el ID 'contact-form'");
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Es buena práctica asegurar la inicialización justo antes por si acaso
        inicializarMail(); 

        // Revisa que 'contact_service' y 'contact_form' sean tus IDs reales del dashboard
        emailjs.sendForm('service_2185pfw', 'template_fpfapcy', this)
            .then(() => {
                console.log('SUCCESS!');
                form.reset(); // Opcional: limpia el formulario al enviar con éxito
            })
            .catch((error) => {
                // Imprime el error completo en la consola para saber exactamente qué falló
                console.error('FAILED...', error); 
            });
    });
}