import {apiQuery} from '../../Query';

export default async function handler(req, res) {
  
  // only allow GET methods API, and only fetch first 10 items
  if (req.method === 'GET') {
    let media;

    try {
      const response = await fetch(`https://graphql.anilist.co`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: apiQuery, variables: {perPage: 10}}),
      });
      const media = await response.json();
    } catch(err) {
      console.log(err);
    }
    
    res.status(200).json({ media: media.data})

  } else {
    res.status(405).end(`Method ${req.method} Not Allowed.`)
  }
}
