type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH';

const $Fetch = async (
  method: HttpMethod,
  url: string,
  token?: string,
  body?: object,
) => {
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token || '',
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(url, config);
  return response;
};
export default $Fetch;
