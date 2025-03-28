import ApiResponse from './ApiResponse.js';

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json(ApiResponse.error('Internal server error', err.message));
};
