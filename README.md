# RegrEtsy

[Live Site](https://theregretsy.herokuapp.com/#/)


RegrEtsy is a single page fullstack application inspired by the website "Etsy". As Etsy allows users to buy and sell handmade or vintage items and supplies, RegrEtsy is a place you go to buy things you'll most likely regret.

Implementing an MVC architecture, I used React and Redux on the frontend with Ruby on Rails on the backend, utilizing PostgreSQL as my datbase. 

## Features

* Users can log in and remained logged in if they leave site.
* Users can add/remove/update items in their cart
* Users can search for items using the searchbar
* Users can leave star ratings and reviews on products.
* Users not logged in will be redirected to sign in/register if trying to access the cart.

![alt text](https://s3-us-west-1.amazonaws.com/productpics35/Homepage.png)

### User authentication
 Users are able to browse the site without being logged. They have access to the searchbar, category links, and a single items detail page. But once a user tries to click on the cart without being logged in, they are met with a sign in/register modal. A user can then log in with the correct credentials, or create a new account. A user also has the option to click the demo button which instantly logs them in as a demo user.
 
 ![alt text](https://s3-us-west-1.amazonaws.com/productpics35/Modal.png)
 
 ### Product details
  When you click on an item from the search results, caterogies or the home page, you will be redirected to that item's detail page. It gives a brief description of the item, the name of the seller and it's price. You can change the quantity and add that item to your cart to purchase it.
  
  ![alt text](https://s3-us-west-1.amazonaws.com/productpics35/Detail.png)
  
  ### Product ratings and reviews
  Users have the ability to rate products and leave reviews. Once a review has been posted, only the author of the review is able to delete it. The review this is posted will have the 1 to 5 star rating given by the user along with the user's name and the date it was written.
  
  ![alt text](https://s3-us-west-1.amazonaws.com/productpics35/Reviews.png)
  
  
  ### User's shopping cart
  Once you click on "add to cart" from the product detail page, you will be redirected to the shopping cart. Inside the shopping cart users will be able to increase or decrease an item's quantity, or remove the item from the cart. Number of items in the cart are displayed at all times along with the subtotals associated with each item. When a user is ready to checkout, the checkout button will empty the cart simulating a purchase.
  
  ![alt text](https://s3-us-west-1.amazonaws.com/productpics35/Shoppingcart.png)
  
  ### Category links/Searchbar
  Users can browse through items by using the nav bar category links or entering a products name in the search bar. A list of products will be displayed in either case, allowing users to click on them and get the details.
  
  * Catergory link
 ![alt text](https://s3-us-west-1.amazonaws.com/productpics35/Category.png)
 
  * Search results
 ![alt text](https://s3-us-west-1.amazonaws.com/productpics35/Search.png)
 
 ## Future Improvement
  Some of the features i'd like the add in the near future are:
  * Allowing users to upload photos and sell items
  * Ability to view other sellers profiles and the items they are selling
  * Display an number on the cart icon showing how many items are currently in the users cart.
 
