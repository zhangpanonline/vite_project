// interface ImportMetaEnv extends Readonly<Record<string, string | boolean | undefined>> {}

interface ImportMeta {
  // readonly env: {
  //   BASE_URL: ImportMetaEnv,
  //   DEV: ImportMetaEnv,
  //   MODE: ImportMetaEnv,
  //   PROD: ImportMetaEnv,
  //   SSR: ImportMetaEnv
  // }
  readonly env: {
    BASE_URL: string,
    DEV: boolean,
    MODE: string,
    PROD: boolean,
    SSR: boolean
  },
  readonly resolve: Function,
  readonly url: string
}
