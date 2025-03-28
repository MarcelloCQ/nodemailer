import { Router } from 'express';
import { sendMail } from './mail.service.js';
import ApiResponse from './ApiResponse.js';

export const routes = Router();

routes.post('/form-contact', async (req, res) => {
  try {
    await sendMail(req.body);

    res.status(200).json(ApiResponse.success('Email sent', {}));
  } catch (error) {
    res.status(500).json(ApiResponse.error('Failed to send', error.message));
  }
});
