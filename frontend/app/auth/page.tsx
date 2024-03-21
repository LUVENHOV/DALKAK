/* eslint-disable indent */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import useOauth from '../../hooks/auth/useOauth';

export default function OauthRedirect() {
  const serverResponse = useOauth(process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <div>
      {serverResponse ? (
        <div>
          <h1>Success</h1>
          <p>{JSON.stringify(serverResponse)}</p>
        </div>
            ) : (
              <h1>Waiting for server response...</h1>
            )}
    </div>
  );
}
