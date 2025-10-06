interface CreateConfigOpts {
  adId: number;
}
interface ClientConfig extends CreateConfigOpts {
  // Inherited from Huck
  env: string;
  version: string;
  brand: string;
  host: string;
  isLocal: boolean;
  isDev: boolean;
  isProd: boolean;
  development: boolean;
}
