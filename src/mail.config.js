import dotenv from 'dotenv';

dotenv.config();

// console.log(
//   process.env.PORT,
//   process.env.EMAIL,
//   process.env.PASS,
//   process.env.EMAILPORT,
//   process.env.EMAILHOST
// );

export const configMailer = {
  port: parseInt(process.env.EMAILPORT),
  host: process.env.EMAILHOST,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
};
