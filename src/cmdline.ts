import * as commandLineArgs from 'command-line-args';
import * as commandLineUsage from 'command-line-usage';

const optionDefinitions = [
  { name: 'customer', alias: 'c', type: String, typeLabel: '[underline]{name}', description: 'The name of the customer for which the license is being issued' },
  { name: 'applicationName', alias: 'a', type: String, typeLabel: '[underline]{name}', description: 'The name of the application' },
  { name: 'applicationUri', alias: 'u', type: String, typeLabel: '[underline]{URI}', description: 'The URI of this application' },
  { name: 'adminsCount', alias: 'm', type: Number, typeLabel: '[underline]{number}', description: 'The maximum number of administrators', defaultValue: '1' },
  {
    name: 'globalAdminsCount',
    alias: 'g', type: Number, typeLabel: '[underline]{number}', description: 'The maximum number of global administrators', defaultValue: '1'
  },
  { name: 'validTo', alias: 'v', type: acceptDate, typeLabel: '[underline]{date}', description: 'The date of the license expiration' },
  { name: 'keyPath', alias: 'k', type: String, typeLabel: '[underline]{file}', description: 'Path to the private key used for signing' },
  {
    name: 'outputPath',
    alias: 'o', type: String, typeLabel: '[underline]{file}', description: 'Path where the license key (json) file should be created',
    defaultValue: 'license.json'
  },
  { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage' }
];

const sections = [
  {
    header: 'LetzNav Licensing CLI',
    content: 'Generates license keys for individual applications managed by letzNav.'
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  }
];
const usage = commandLineUsage(sections);

function acceptDate(dateString: string): Date {
  if (dateString) {
    return new Date(Date.parse(dateString));
  }
}

function checkOptions(options: any): string[] {
  const errors = [];

  if (!options.keyPath) {
    errors.push('Missing keyPath option');
  }
  if (!options.customer) {
    errors.push('Missing customer');
  }
  if (!options.applicationName) {
    errors.push('Missing application name');
  }
  if (!options.applicationUri) {
    errors.push('Missing application URI');
  }
  if (!options.validTo) {
    errors.push('Missing expiration date');
  }

  return errors;
}

export interface InputData {
  data: any;
  keyPath: string;
  outputPath: string;
}

export function getDataFromCommandLine(): InputData {
  const options = commandLineArgs(optionDefinitions);
  if (options.help) {
    console.info(usage);
    return null;
  }

  const optionErrors = checkOptions(options);
  if (optionErrors.length > 0) {
    console.error('WRONG OPTIONS:', optionErrors.join(', '));
    console.info(usage);
    throw new Error();
  }

  const now = new Date();

  const data = {
    customer: options.customer,
    applicationName: options.applicationName,
    applicationUri: options.applicationUri,
    created: now.toISOString(),
    validTo: options.validTo.toISOString(),
    adminsCount: options.adminsCount || 1,
    globalAdminsCount: options.globalAdminsCount || 1,
  };

  return {
    data,
    keyPath: options.keyPath,
    outputPath: options.outputPath || 'license.json'
  };
}
