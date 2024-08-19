import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), '/public/img/2024/');
  const fileNames = fs.readdirSync(imagesDirectory);

  const images = fileNames.map(fileName => {
    return {
      src: `/img/2024/${fileName}`,
      name: fileName,
    };
  });

  res.status(200).json(images);
}