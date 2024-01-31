import { persistentMap } from '@nanostores/persistent'

import { THEMES } from '@/constants';

export const settings = persistentMap('settings:', {
  theme: THEMES[0],
});

settings.subscribe((state) => {
  console.log('settings changed', state);
});
