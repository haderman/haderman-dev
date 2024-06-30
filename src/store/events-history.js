import { persistentMap } from '@nanostores/persistent'

const history = persistentMap('settings:', {
  generateQuoteCount: 0,
});

export const eventsHistory = {
  get: (event) => Number(history.get()[event]),
  set: (event, value) => history.set({ [event]: String(value) }),
}

history.subscribe((state) => {
  console.log('eventsHistory changed', state);
});
