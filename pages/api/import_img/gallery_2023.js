import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), '/public/img/2023/');
  const fileNames = fs.readdirSync(imagesDirectory);
  console.debug(fileNames);

  const images = fileNames.map(fileName => {
    return {
      src: `/img/2023/${fileName}`,
      name: fileName,
    };
  });

  res.status(200).json(images);
}