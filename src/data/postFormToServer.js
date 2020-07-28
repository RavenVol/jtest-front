import { API_URL } from '../misc/conf';

/**
 * 
 * @param {string} dynamicUrlPart 
 * @param {object} form
 * @returns {object} data json
 * @async
 */
const postFormToServer = async(dynamicUrlPart, form) => {
  const response = await fetch(`${API_URL}/api/${dynamicUrlPart}`, {
    method: 'POST',
    body: form,
   });
  const data = await response.json();
  return data;
}

export default postFormToServer;

