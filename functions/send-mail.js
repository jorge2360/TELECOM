const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const { name, email } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: 'Gmail',  // Cambia a tu servicio de correo preferido
        auth: {
            user: 'segundacuenta23600@gmail.com',  // Reemplaza con tu correo
            pass: 'Jorge2362000.'         // Reemplaza con tu contraseña
        }
    });

    const mailOptions = {
        from: 'segundacuenta23600@gmail.com',
        to: email,
        subject: 'Gracias por completar el formulario',
        text: `Hola ${name},\nGracias por participar.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Correo enviado con éxito.' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al enviar el correo.' }),
        };
    }
};
