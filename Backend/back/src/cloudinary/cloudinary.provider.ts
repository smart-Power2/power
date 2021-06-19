import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): void => {
    return v2.config({
      cloud_name: 'dgrvvwa4y',
      api_key: '765422499263335',
      api_secret: '-RV76pXvbwb5dZdMcJzvPmMyX1c',
    });
  },
};