export const configMailer = {
  port: process.env.EMAILPORT,
  host: process.env.EMAILHOST,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
};
