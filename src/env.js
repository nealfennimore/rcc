/* eslint-disable no-underscore-dangle */
const { NODE_ENV } = process.env;

export const isBrowser = typeof window === 'object';
export const __BROWSER__ = isBrowser;

export const isServer  = ! isBrowser;
export const __SERVER__ = isServer;

export const isTest = NODE_ENV === 'test';
export const isDevelopment = NODE_ENV === 'development';
export const isProduction  = NODE_ENV === 'production';

export const __TEST__ = isTest;
export const __DEV__ = isDevelopment;
export const __PROD__ = isProduction;
