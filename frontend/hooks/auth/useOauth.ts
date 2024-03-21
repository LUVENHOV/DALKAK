import { useEffect, useState } from "react";

const useOauth = (redirectUri) => {
  const [authCode, setAuthCode] = useState<string | null>(null);
  const [response, setResponse] = useState<any | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      setAuthCode(code);
    }
  }, []);

  useEffect(() => {
    const sendDataToServer = async () => {
      if (authCode) {
        try {
          const res = await fetch(`${redirectUri}auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              authorization_code: authCode,
              provider: 'GOOGLE',
              code: '',
            }),
          });
          const data = await res.json();
          setResponse(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    sendDataToServer();
  }, [authCode, redirectUri]);

  return setResponse;
};

export default useOauth;
