import * as fs from 'fs';

import { getDataFromCommandLine } from './cmdline';
import { signJson } from './signer';

function main(): void {
  const inputData = getDataFromCommandLine();
  if (!inputData) {
    return;
  }

  let key: Buffer;

  try {
    key = fs.readFileSync(inputData.keyPath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('The key has not been found');
    }
    throw err;
  }

  const signed = signJson(inputData.data, key.toString());
  fs.writeFileSync(inputData.outputPath, new Buffer(JSON.stringify(signed, null, 2), 'utf8'));

  console.log(JSON.stringify(signed, null, 2)); // tslint:disable-line:no-console
}

try {
  main();
  process.exit(0);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
