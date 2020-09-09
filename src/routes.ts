import express from 'express';

import ConvertHtmlToPdf from './controllers/ConvertHtmlToPdf';

const routes = express.Router();

routes.post('/', ConvertHtmlToPdf.store);

export default routes;