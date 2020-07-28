import { API_URL } from '../misc/conf';

const DataFromServerGET = async(dynamicUrlPart) => {
  const response = await fetch(`${API_URL}/api/${dynamicUrlPart}`, {
    method: 'get'
  });
  const data = await response.json();
  return data;
}

export default DataFromServerGET;