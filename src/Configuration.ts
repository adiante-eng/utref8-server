export interface Configuration {
  readonly TAG: string;
  readonly REF: string;
  readonly SPACE: string;
}

const DEFAULT_CONFIGURATION: Configuration = {
  TAG: "​⊕",
  REF: "​⊚",
  SPACE: " "
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getConfiguration(scope?: ConfigurationScope | null): Configuration {
  return DEFAULT_CONFIGURATION;
}

export type ConfigurationScope = string;
