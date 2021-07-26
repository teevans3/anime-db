This project was created with 'create-next-app'

## To run development server:

After installing on your local machine, (assuming you're using npm) run npm install to all dependencies.

Then run 'npm run dev' to start it up. It will be served at http://localhost:3000

## To run tests:

Run 'npm run test'

## Files of note:

- pages/anime/[pageNum]/__tests__/index.test.js - tests for getStaticProps and getStaticPaths for backend
- pages/api/__tests__/index.test.js - tests for backend api call for the created api
- /pages/anime/[pageNum]/index.js - dynamic page template for paginated anime media queries retrieved
- /pages/api/index.js - REST API for retrieving first 10 anime media queries
- /pages/index.js - homepage (redirects to '/anime/1', as this is the actual home page)
- /pages/404.js - custom 404 page
- /pages/500.js - custom 500 page
- /components/AnimesList.js - displays 10 anime media data, depending on what page
- /components/Header.js - header for each page (just the page title/link for now)
- /components/Layout.js - overall layout for the project, outter-most component
- /components/PageButtons - pagination displayed at the bottom of the page, component created with material UI's pagination component
- /components/Spinner - loader/spinner component created with material UI's circular progress spinner, rendered temporarily when pages are loading content 
- /context/PageContext.js - global state for current page user is on

## If I had more time...

I would create a dynamic template for each anime query. That way users could get more detailed info on a specific anime. Also would include more pictures, as well as data.
