// using romaji, english, and native titles because some animes don't have title under english
export var apiQuery = `
  query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      media (type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        description
        coverImage {
            extraLarge
        }
      }
    }
  }
`;

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
    res.status(200).json({ media: resData.data.Page.media})

  } else {
    res.status(405).send(`Method ${req.method} Not Allowed.`)
  }
}
