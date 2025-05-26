import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { router } from './router';
import { log } from './logger';

const port = 3001;

export const launchServer = () => {
  const http_server = express();

  http_server.use(cors());
  http_server.use(bodyParser.json());

  http_server.use(router());

  http_server.listen(port, () => {
    log.info(`awesome server listening on port ${port}`);
  });
};
