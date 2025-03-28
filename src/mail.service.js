import { configMailer } from './mail.config';
import { callNodeMailer } from './mail.module';

export const transporter = callNodeMailer.createTransport(configMailer);

transporter.verify.then(() => {
  console.log('Ready for send emails');
});

export const bodyHtml = (name, email, message) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test Mail</title>
  </head>
  <style>
    @media (max-width: 768px) {
      .wrap-md-100 {
        display: block !important;
        width: 100% !important;
      }
    }
  </style>
  <body>
    <table
      width="768"
      border="0"
      cellspacing="0"
      cellpadding="0"
      align="center"
      class="wrap-md-100"
    >
      <tr>
        <td align="center">
          <h1 style="font-size: 28px">Has recibido un contacto por tu web</h1>
        </td>
      </tr>
      <tr>
        <td align="left">
          <p style="font-size: 20px">
            <b>Remitente:</b>
          </p>
          <p align="left" style="font-size: 20px">${name}</p>
          <p align="left" style="font-size: 20px">${email}</p>
          <p style="font-size: 20px">
            <b>Mensaje:</b>
          </p>
          <p align="left" style="font-size: 20px">${message}</p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
