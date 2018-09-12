# New York Times news scraper app

## About
The app scrape news feed from the new york times web site.

This app meant to be a very simple tool to grab the news and display them in a list. The user has the ability to save some of the news and make a comment.


## Technologies

### Front End

  - React JS
  
### Back End
  
  - Node JS
  - Express JS
  - MongoDB with Mongoose ODM
  - Cheerio
  - Request


## Usage
The user will be prompt with simple UI, There are 2 buttons.. (Display New Articles) and (Display Saved Articles)

Once (Dispaly New Article) button is clicked, it will expand to fill most of the screen and show all new articles.

All articles are shown in boxes that display the article heading, a snippet, Auther's name and the date. It also has a black bookmark button on the top right corner, once clicked it will save the article in the database. the bookmark button will turn green. if the user tries to click (or click on any previously saved article) it again, it will turn red indicating that the article is already saved.

the user then can click on the shrink button placed on the bottom right corner. it will shrink the box back to it's original position.

By clicking on (Display saved Article) button, the button will expand on the same dramatic way showing all saved articles. all saved articles will be displayed in a cards with few controls. The (X) control will delete the article. The disk control saves user's comment. After saving a new comment, new 2 controls show up: the edit control gives the user the opportunity to change his comment. also, the erase control that allows the user to delete the comment.

## Live
you can find the live version of the app by visiting this link
https://news-scraper-mh.herokuapp.com/
