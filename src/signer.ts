import * as crypto from 'crypto';
import * as stringify from 'json-stable-stringify';

export interface SignedObject {
  data: object;
  signature: string;
}

export function signJson(data: object, keyData: string | { key: string, passphrase: string }): SignedObject {
  const sign = crypto.createSign('RSA-SHA256');

  sign.write(stringify(data));
  sign.end();
  const signatureBuffer = sign.sign(keyData);
  const signature = signatureBuffer.toString('base64');

  return {
    data,
    signature
  };
}
