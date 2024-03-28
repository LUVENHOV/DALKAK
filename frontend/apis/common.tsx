type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH';

const defaultHeaders = {
  'Content-Type': 'application/json',
  Authorization: '',
};

const $Fetch = async (
  method: HttpMethod,
  url: string,
  token?: string,
  headers?: Record<string, string>,
  body?: object,
  params?: Record<string, string>,
) => {
  // 1. Need token?
  if (token) {
    defaultHeaders.Authorization = token;
  }
  // 2. Need custom headers?
  const Headers = headers ? { ...defaultHeaders, ...headers } : defaultHeaders;

  // 3. set config
  const config: RequestInit = {
    method,
    headers: Headers,
  };

  // 4. Need body?
  if (body) {
    config.body = JSON.stringify(body);
  }

  let URL = url;

  // 5. Need params?
  if (params) {
    const urlParams = new URLSearchParams(params);
    URL += `?${urlParams.toString()}`;
  }

  const response = await fetch(URL, config);
  return response;
};
export default $Fetch;
