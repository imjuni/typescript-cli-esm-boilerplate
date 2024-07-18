import { Container } from '#modules/container.js';
import { consola as log } from 'consola';
import fastSafeStringify from 'fast-safe-stringify';
import { isError } from 'my-easy-fp';
import qs from 'qs';
import { install as sourceMapSupportInstall } from 'source-map-support';
import yargs from 'yargs';
import { urlna } from 'url-naong';

sourceMapSupportInstall();

const parser = yargs(process.argv.slice(2));
parser.option('-p', { describe: 'test' });

async function handler() {
  const url = urlna('https://pokeapi.co', '/api/v2/pokemon/:name', { name: 'ditto' });
  const c = new Container('typescript cli boilerplate');

  log.info(url);
  log.info(`start typescript cli boilerplate: ${c.name}`);
  log.info('data: ', fastSafeStringify({ name: 'hello', greeting: 'world' }));
  log.info(qs.stringify({ name: 'hello', greeting: 'world' }));

  await parser.argv;
}

handler().catch((caught) => {
  const err = isError(caught, new Error('unknown error raised'));
  log.error(err.message);
  log.error(err.stack ?? '');
});
