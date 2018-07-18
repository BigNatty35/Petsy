# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Product.delete_all


user1 = User.create(username: "carey1", email: "email1",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/icon3.png");
user2 = User.create(username: "james", email: "email2",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/icon4.png");
user3 = User.create(username: "BigJohn", email: "email3",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/icon5.png");
user4 = User.create(username: "HelloJello", email: "email4",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/icon3.png");
user5 = User.create(username: "HotMoney", email: "email5",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/icon2.png");
user6 = User.create(username: "Lemonsweetwater", email: "email6",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/icon5.png");
user7 = User.create(username: "AppleJacket", email: "email7",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/icon3.png");
user8 = User.create(username: "grassstains", email: "email8",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/icon2.png");
user9 = User.create(username: "Bellymonster", email: "email9",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/icon4.png");
user10 = User.create(username: "fishmountian", email: "email10",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/identicon.png");
user11 = User.create(username: "greatuser", email: "email11",  password: "password", img_url: "https://s3-us-west-1.amazonaws.com/productpics35/identicon.png");

cat1 = Category.create(category_name: "entertainment")
cat2 = Category.create(category_name: "pets")
cat3 = Category.create(category_name: "food")
cat4 = Category.create(category_name: "clothes")
cat5 = Category.create(category_name: "jewelry")
cat6 = Category.create(category_name: "vehicles")
cat7 = Category.create(category_name: "household")
cat8 = Category.create(category_name: "electronics")


# clothes 4
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglyshoes.jpg", description: "Lightweight and collapsible, these kicks show off a striking rhinestone design. These shoes feature a very exculsive springy heel..enough said.", title: "Great Shoes", price: 18.33, category_id: cat4.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/martini-glass-hat1.jpg", description: "Extremely rare head piece.", title: "Rare Hat", price: 37.99, category_id: cat4.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglyshirt.jpg", description: "If one hawaiian shirt is concidered 'chill', imagine what a MULTI-PATTERN hawaiian shirt means? That's right, you guessed it. Now hurry.", title: "Shirt", price: 20.50, category_id: cat4.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/hugjacket.jpg", description: "Need a hug? Where this jacket at all times.", title: "Hugger Jacket", price: 45.99 , category_id: cat4.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/shirtlessjacket.jpg", description: "Look at this. Beautiful, isn't it?", title: "Body Jacket", price: 26.99, category_id: cat4.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglydress.jpg", description: "Dare to be different.", title: "Rare Dress", price: 67.99 , category_id: cat4.id)


# food 3
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/canned_unicorn_meat2.jpg", description: "Feel the magic in every bite of this unicorn meat. There are crunchy horn bits in every bite. The meat is also easily spreadable for sandwiches and more.", title: "Unicorn Meat", price: 16.99, category_id: cat3.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/ReaperPepper.jpg", description: "Measuring in at 1,569,300 Scoville Heat Units (SHU). That's not too bad, right?", title: "Carolina Reaper Pepper", price: 8.99, category_id: cat3.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/cheeseburger.jpg", description: "Good for the heart, stomach and overall health.", title: "Ultimate Burger", price: 13.99, category_id: cat3.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/hotdogs.jpg", description: "What is a hotdog made of exactly? Who cares! Here's a ton of them! ", title: "Hotdogs", price: 3.59, category_id: cat3.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/maggotcheese.jpg", description: "Known on the streets as 'Maggot Cheese' Casu marzu is a traditional Sardinian sheep milk cheese that contains live insect larvae (maggots). Derived from pecorino, casu marzu goes above and beyond typical fermentation to a stage of decomposition,
 brought about by the digestive action of the larvae of the cheese fly Piophila casei.", title: "Casu marzu", price: 100.50, category_id: cat3.id)


# pets 2
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/pirhana.jpg", description: "Hungry and aggressive. Strong jaws combined with finely serrated teeth make them prefect at tearing flesh. Fun for the family!", title: "Pirhana", price: 52.99, category_id: cat2.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/cobra.jpg", description: "Cobras are famously friendly. They are companionable housemates who bond with the whole family. Especially small children", title: "King Cobra", price: 28.99, category_id: cat2.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/crocodile.jpeg", description: "Sweet, soft and sensitive. This animal is the perfect cuddle partner on those cold winter days.", title: "Crocodile", price: 66.32, category_id: cat2.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/grizzlybear.jpg", description: "Say hello to the newest member of the family. Easy to travel with, gets along well with others. Just make sure you feed it.", title: "Grizzly Bear", price: 21.90, category_id: cat2.id)
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/mosquito.jpg", description: "One of the most loyal and low maintaince pets you could ask for. Very quiet, you'll forget it's there most of the time. Loves to cuddle.", title: "Mosquito", price: 18.88, category_id: cat2.id)

# household 7
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/bananaslicer.jpg", description: "You've been waiting you're whole life for this moment. The days of stuggle slicing are over.", title: "Banana Slicer", price: 14.99, category_id: cat7.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/computerhoodie.jpg", description: "Having a hard time focusing on the computer? This is the one and only solution. Never get distracted again!", title: "Computer Hoodie", price: 38.95, category_id: cat7.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/iarm.jpg", description: "Need an extra hand? Say no more.", title: "iArm", price: 34.99, category_id: cat7.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/shoebroom.jpg", description: "Become a cleaning machine! You're friends and family will always enjoy your company,", title: "Shoe Broom", price: 17.00, category_id: cat7.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/sodatap.jpg", description: "You deserve to drink soda like a boss.", title: "Soda Dispenser", price: 14.00, category_id: cat7.id)

# jewelry 5
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/rustychain.JPG", description: "Rusty. Very Rusty.", title: "Chain", price: 8.99, category_id: cat5.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/beer+ring.jpg", description: "Perfect for any formal occasion. Makes a great talking piece during job interviews.", title: "Beer Ring", price: 24.78, category_id: cat5.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/corncobnecklace.jpg", description: "Tastes just like it looks. GREAT!", title: "Cob Necklace", price: 45.88, category_id: cat5.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/emojichain.jpg", description: "We use them everyday, why not wear them as well? ", title: "Emoji Necklace", price: 200.99, category_id: cat5.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/spikebracelet.jpg", description: "Nothing says 'I love you' more then this bracelet. I promise. ", title: "Bracelet", price: 20.00, category_id: cat5.id)
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglyflowerwatch.JPG", description: "Perfect gift for that special someone.", title: "Flower Watch", price: 55.55, category_id: cat5.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglywatch.jpg", description: "Perfect gift for that special someone.", title: "This watch is not for the faint of heart.", price: 150.25, category_id: cat5.id)

# vehicles 6
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/gasguzzler.jpg", description: "See you at the gas station", title: "Gas Guzzler", price: 48.99, category_id: cat6.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/carcombo.jpg", description: "State of the art design with the customer in mind. Very exclusive.", title: "Combo-Car", price: 1200.89, category_id: cat6.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/ptcruiser.jpeg", description: "2000 cool points at soon as you unlock the door. This thing is nothing less than sweet.", title: "The Cruiser", price: 300.44, category_id: cat6.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/skooterbike.jpg", description: "Just check out the hardwork put into this thing. You gotta respect this.", title: "Rare Bike", price: 67.78, category_id: cat6.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglybike.jpg", description: "Round tires are overrated. Welcome to the future.", title: "Fast Bike", price: 445.99, category_id: cat6.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/walkingbike.jpg", description: "Sometimes you just have to take a unique approach to life.", title: "Strange Bike", price: 300.50, category_id: cat6.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/slowcar.jpg", description: "This is a masterpiece.", title: "Slow Car", price: 217.50, category_id: cat6.id)


# electronics 8
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/hoverboard.jpg", description: "Forever one of the hottest items on the market.", title: "Hoverboard", price: 40.00, category_id: cat8.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/ipoddockheadphones.jpg", description: "Don't worry about how it looks or how much it weighs. Just know that this is the future my friend.", title: "Dock Headphones", price: 89.99, category_id: cat8.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/twitterpeek.jpg", description: "A single purpose device, used only for Tweeting. I repeat, used ONLY for tweeting. Who cares if you can tweet from your smartphone.", title: "Twitter Peek", price: 350.99, category_id: cat8.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/photopencilcup.jpg", description: "You can pick out your favorite pencil while looking at your favorite photo. Awwwwwwwww", title: "Pencil Cup", price: 275.90, category_id: cat8.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/fingerdrum.jpg", description: "Houses your mouse and finger drumset. What more could you possible want in life?", title: "Finger Drumset", price:88.98, category_id: cat8.id)
# entertainment 1
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Anaconda3.jpg", description: "A mercenary-for-hire accepts a mission from a billionaire to capture a dangerous snake that could possibly help cure a terminal illness.", title: "Anaconda: The Offspring", price: 6.99, category_id: cat1.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/JTalbum.jpg", description: "Justin Timberlake's latest album. Currently crying a river.", title: "Man of the Woods", price: 1.57, category_id: cat1.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Kazaam.jpg", description: "Shaq plays a genie. Pure genius.", title: "Kazaam", price: 99.98, category_id: cat1.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Kidbop38.jpg", description: "A bunch of kids singing the edited versions of todays hottest songs. What's not to love?", title: "KIDZ BOP #38", price: 20.45, category_id: cat1.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/choresgame.jpg", description: "Your favorite chores in the form of a video game. Extremely lit.", title: "Extreme Chores: The Game", price: 32.99, category_id: cat1.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Yeezus.png", description: "I miss the old Kanye.", title: "Yeezus", price: 6.25, category_id: cat1.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/theFive.jpg", description: "Every Episode of 'The Five'. You won't regret this.", title: "The Five", price: 51.99, category_id: cat1.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/thesoup.jpg", description: "Every Episode of 'The Soup'. Hopefully this show will make you laugh or something.", title: "The Soup", price: 37.95, category_id: cat1.id)