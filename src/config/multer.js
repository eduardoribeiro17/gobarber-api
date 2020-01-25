import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, callBack) => {
      crypto.randomBytes(16, (error, res) => {
        if (error) return callBack(error);

        return callBack(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
