/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly AXIOM_TOKEN: string
}

interface Window {
  ai?: {
    canCreateTextSession: () => Promise<string>
    createTextSession: () => Promise<AI.TextSession>
  }
}
