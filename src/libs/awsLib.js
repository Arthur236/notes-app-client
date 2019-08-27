import { Storage } from 'aws-amplify';

// eslint-disable-next-line import/prefer-default-export
export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

export async function s3Delete(filename) {
  await Storage.vault.remove(filename);
}
