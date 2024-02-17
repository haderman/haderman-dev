import { customAlphabet } from 'nanoid';

export const nanoid = customAlphabet('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');

const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;

const datasetName = 'alan-landing';
const endpoint = `https://api.axiom.co/v1/datasets/${datasetName}/ingest`;
const token = 'xaat-3ae3ab60-5254-40bb-8a7a-7f8afd6e544b';

function generateUniqueId() {
  return `usr_${nanoid(22)}`;
}

function getUserId() {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = generateUniqueId();
    localStorage.setItem('userId', userId);
  }
  return userId;
}

/**
 * Logs user interaction events to a remote server in development mode and prints the data to the console.
 *
 * @param {Object} data The event data to log. The structure depends on the event type:
 * - For click events: `{ type: 'click', href: string }`
 * - For hover events: `{ type: 'hover', element: string }`
 * - For scroll events: `{ type: 'scroll', position: number }`
 * - For page view events: `{ type: 'pageview', href: string }`
 * - For session end events: `{ type: 'sessionend' }`
 */
export function logger(data) {
  const userId = getUserId();
  const enrichedData = [{
    _time: new Date().toISOString(),
    attributes: {
      userId,
    },
    data,
    site: document.location.href,
  }];

  if (isProd) {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(enrichedData),
    }).then((response) => {
      console.log('logger: ', response);
    }).catch((error) => {
      console.error('logger: ', error);
    });
  }

  if (isDev) {
    console.log('logger: ', enrichedData);
  }
}
