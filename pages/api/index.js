import {apiQuery} from '../../Query';

export default async function handler(req, res) {
  
  // only allow GET methods API, and only fetch first 10 items
  if (req.method === 'GET') {
    const response = await fetch(`https://graphql.anilist.co`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: apiQuery, variables: {perPage: 10}}),
    });
    const resData = await response.json();
    console.log(resData);
    res.status(200).json({ media: resData.data})

  } else {
    res.status(405).end(`Method ${req.method} Not Allowed.`)
  }
}
