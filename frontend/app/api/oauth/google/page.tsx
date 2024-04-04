'use client';

// import { useState } from 'react';
// import { useSearchParams } from 'next/navigation';

// const fetchOauthData = async (code: string) => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/oauth/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         code,
//         provider: 'GOOGLE',
//         state: 'dalkaknaver',
//       }),
//     });
//     if (res.ok) {
//       const responseData = await res.json();
//       return responseData;
//     }
//     console.error('Server response was not ok.');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
export default function OauthRedirect() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const useSearch = useSearchParams();

  // useEffect(() => {
  //   const fetchOauthData = async () => {
  //     const code = useSearch?.get('code');
  //     if (!code) {
  //       setLoading(false);
  //       return;
  //     }
  //     try {
  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}auth/login`,
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             authorization_code: code,
  //             provider: 'GOOGLE',
  //             code: '',
  //           }),
  //         },
  //       );
  //       if (res.ok) {
  //         const responseData = await res.json();
  //         console.log(responseData);
  //         setData(responseData);
  //       } else {
  //         console.error('Server response was not ok.');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     } finally {
  //       setLoading(false);
  //       console.log('finally');
  //     }
  //   };
  //   fetchOauthData();
  // }, [useSearch]);

  return (
    <div>
      hi
      {/* {data ? (
        <div>
          <h1>Success</h1>
          <p>{JSON.stringify(data)}</p>
        </div>
      ) : (
        <h1>Authentication failed.</h1>
      )} */}
    </div>
  );
}
