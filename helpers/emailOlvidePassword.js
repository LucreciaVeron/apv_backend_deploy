import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
    });

    //Enviar el email
    const {email, nombre, token} = datos;

    const info = await transporter.sendMail({
        from: "APV- Administrador de Pacientes de Veterinario",
        to: email,
        subject: "Reestablece tu Contraseña",
        text: "Reestablece tu Contraseña",
        html: `<p>Hola ${nombre}, has solicitado reestablecer tu contraseña.</p>

        <p>Sigue el siguiente enlace para generar una nueva contraseña:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a> </p>

        <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje.</p>
        `
    });
    console.log("Mensaje enviado: %s", info.messageId);
}

export default emailOlvidePassword;