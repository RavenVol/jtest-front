import { API_URL } from '../misc/conf';

/**
 * 
 * @param {string} dynamicUrlPart 
 * @param {object} obj 
 * @returns {object} data json
 */
const postDataToServer = async(dynamicUrlPart, obj) => {
  const response = await fetch(`${API_URL}/api/${dynamicUrlPart}`, {
    method: 'post',
    body: obj,
  });
  const data = await response.json();
  return data;
}

export default postDataToServer;

