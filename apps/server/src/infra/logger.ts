import { AppLogger } from '#modules/logger';
import pino, { Logger } from 'pino';

const default_logger = () => {
  return pino({ level: 'info' });
};

const logger = (pino_logger?: Logger): AppLogger => {
  const log = pino_logger ?? default_logger();

  return {
    error: (message: string, obj?: Record<string, unknown>): void => {
      log.error(obj, message);
    },
    warn: (message: string, obj?: Record<string, unknown>): void => {
      log.warn(obj, message);
    },
    info: (message: string, obj?: Record<string, unknown>): void => {
      log.info(obj, message);
    },
    debug: (message: string, obj?: Record<string, unknown>): void => {
      log.debug(obj, message);
    },
    child: (args: Record<string, string>): AppLogger => {
      return logger(log.child(args));
    },
  };
};

export const log = logger();
