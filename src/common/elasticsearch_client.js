import elasticsearch from 'elasticsearch';
import config from './config';

export function getClient() {
  const host = config.get('es_host');
  const port = config.get('es_port');
  const options = { hosts: [ `http://${host}:${port}`] };

  const username = config.get('es_user');
  const password = config.get('es_pass');
  if (username && password) {
    options.auth = { username, password };
  }

  var client = new elasticsearch.Client(options);
  return client;
}
