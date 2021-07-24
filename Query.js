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


export var query = `
  query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media (type: ANIME) {
        id
        title {
          english
          romaji
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