import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

export function upload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidator?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {

  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidator
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
}

