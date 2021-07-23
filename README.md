This project was created with 'create-next-app'

## To run development server:

After installing on your local machine, (assuming you're using npm) run npm install to all dependencies.

Then run 'npm run dev' to start it up. It will be in http://localhost:3000

## Files of note:

/pages/anime/[pageNum]/index.js - dynamic page template for paginated anime media queries retrieved
/pages/api/index.js - REST API for retrieving first 10 anime media queries
/pages/index.js - homepage
/components/AnimesList - displays 10 anime media data, depending on what page
/components/Header - header for each page, homepage has an additional "about" section (just lorem ipsum) to distinguish it as the homepage, visually
/components/Pagination - pagination displayed at the bottom of the page, displays current page number and prev/next arrows (if applicable)

## If I had more time...

I want to research more on using Material UI along with Next.js as I had difficulty rendering some of the styles. Sometimes, after refreshing, some styles wouldn't apply. Then after styling a different component, that old style would apply. I need to figure out why this was happening (assuming it has to do with Next.js' server side rendering? I'm still new to Next.js). I would also get more detailed with the styling, rather than using the basic default styling for Material UI components.

Additionally, I would create a dynamic template for each anime query. That way users could get more detailed info on a specific anime. Also would include more pictures, as well as data.
