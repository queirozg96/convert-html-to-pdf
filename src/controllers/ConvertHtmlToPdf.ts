import { Request, Response } from 'express';
import pdf from 'html-pdf';
import fs from 'fs';

class ConvertHtmlToPdf {
  async store (request: Request, response: Response) {
    const { html,name } = request.body;

    pdf.create(html).toFile(`tmp/${name}.pdf` , async (err, res) => {
      const data = fs.readFileSync(`tmp/${name}.pdf`);
      fs.unlinkSync(`tmp/${name}.pdf`);
      response.contentType('application/pdf');
      response.send(data);
    });
  }
}

export default new ConvertHtmlToPdf();