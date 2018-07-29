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
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglyshoez.jpg", description: "Lightweight and collapsible, these kicks show off a striking rhinestone design. These shoes feature a very exculsive springy heel..enough said.", title: "Great Shoes", price: 18.33, category_id: cat4.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/martini-glass-hat1.jpg", description: "Extremely rare head piece.", title: "Rare Hat", price: 37.99, category_id: cat4.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglyshirt.jpg", description: "If one hawaiian shirt is concidered 'chill', imagine what a MULTI-PATTERN hawaiian shirt means? That's right, you guessed it. Now hurry.", title: "Shirt", price: 20.75, category_id: cat4.id)
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/bread-shoes.png", description: "Comfortably treat your feet to our plush bread footbed after all-day standing or walking; or slip these on the first thing in the morning to keep your feet comfortable.", title: "Loaf Slippers", price: 28.75, category_id: cat4.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/hugjacket.jpg", description: "Need a hug? Where this jacket at all times.", title: "Hugger Jacket", price: 45.99 , category_id: cat4.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/dunce-cap.jpg", description: "The Dunce Cap been a visual symbol of idiocy and punishment, but was once seen as something closer to a wizard’s hat..and wizard's are pretty cool.", title: "Dunce Cap", price: 85.99 , category_id: cat4.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/shirtlessjacket.jpg", description: "Look at this. Beautiful, isn't it?", title: "Body Jacket", price: 26.99, category_id: cat4.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglydress.jpg", description: "Dare to be different.", title: "Rare Dress", price: 67.99 , category_id: cat4.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/bee-jacket.jpg", description: "Say goodbye to the 'Peacoat', and hello to the new 'Beecoat'. Made with fast approaches in mind, this lightweight, breathable jacket is a great layering piece for the trail.", title: "Beecoat", price: 167.99 , category_id: cat4.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/brain-hat.jpg", description: "The definition of a thinking cap.", title: "Brain Beanie", price: 27.99 , category_id: cat4.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/purse-hat.jpg", description: "Keep your money on your mind.", title: "Purse Hat", price: 32.99 , category_id: cat4.id)
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/slide-shoes.png", description: "Going out for the night? Just slide these on.", title: "Slide Heels", price: 99.99 , category_id: cat4.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/ugg-sandals.jpg", description: "It's all about that comfort. NOTHING ELSE. ", title: "Ugg Sandals", price: 35.99 , category_id: cat4.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/catscarf.jpg", description: "Let the world know about your love for cats while staying warm and stylish!", title: "Cat Scarf", price: 50.99 , category_id: cat4.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/human-shoes.jpg", description: "The perfect blend of stylish and terrifying.", title: "Feet-Shoes", price: 59.99 , category_id: cat4.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/soujaboy-clothes.jpg", description: "An excessively large t-shirt, worn popularly by the hip-hop artist Soulja Boy, that extends beyond the limits of a regularly sized t-shirt.", title: "Souja Boy Tee", price: 50.99 , category_id: cat4.id)

# food 3
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/canned_unicorn_meat2.jpg", description: "Feel the magic in every bite of this unicorn meat. There are crunchy horn bits in every bite. The meat is also easily spreadable for sandwiches and more.", title: "Unicorn Meat", price: 16.99, category_id: cat3.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/ReaperPepper.jpg", description: "Measuring in at 1,569,300 Scoville Heat Units (SHU). That's not too bad, right?", title: "Carolina Reaper Pepper", price: 8.99, category_id: cat3.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/cheeseburger.jpg", description: "Good for the heart, stomach and overall health.", title: "Ultimate Burger", price: 13.99, category_id: cat3.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/hotdogs.jpg", description: "What is a hotdog made of exactly? Who cares! Here's a ton of them! ", title: "Hotdogs Galore", price: 3.59, category_id: cat3.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/maggotcheese.jpg", description: "Known on the streets as 'Maggot Cheese' Casu marzu is a traditional Sardinian sheep milk cheese that contains live insect larvae (maggots). Derived from pecorino, casu marzu goes above and beyond typical fermentation to a stage of decomposition,
 brought about by the digestive action of the larvae of the cheese fly Piophila casei.", title: "Casu marzu", price: 100.75, category_id: cat3.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/tequilashots.jpg", description: "14 shots of tequila for you and only you.", title: "Tequila Shots", price: 9.00, category_id: cat3.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/hotdog-eclair.jpg", description: "When it comes to eclairs, homemade is always better. Bakeries have to chill their filled eclairs, which makes for soggy centers and mushy crusts; you can freshly fill yours with hotdogs at home and eat them right away.", title: "Hotdog Eclair", price: 10.25, category_id: cat3.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/gas-station-food.png", description: "Oh the delicious regret.", title: "Gas Station Food", price: 2.99, category_id: cat3.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Big-Burger.jpg", description: "NOT FOR THE FAINT OF HEART.", title: "Big ol' Burger", price: 30.99, category_id: cat3.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/pizza-taco.jpg", description: "Can't decide if you want tacos or pizza tonight? Say no more!", title: "Pizza Taco", price: 18.99, category_id: cat3.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/mcSpeghetti.jpg", description: "There's vomit on his sweater already, McSpaghetti", title: "McSpaghetti", price: 5.99, category_id: cat3.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/icecream-+cheeseburger.jpg", description: "Bacon cheeseburger topped with a generous scoop of deep-fried ice cream battered in corn flakes and cinnamon, lettuce, tomatoes and onions.", title: "Ice Cream Cheeseburger", price: 5.99, category_id: cat3.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/deepfried-butter.jpg", description: "This is a whole stick of butter on a stick dipped in a cinnamon honey batter and deep-fried. And then coated in a sugary glaze. It costs four dollars..", title: "Deep Fried Butter", price: 3.99, category_id: cat3.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/noodle-burger.jpg", description: "This burger pasta hybrid is guarenteed to rock your world. ", title: "Noodle Burger", price: 13.99, category_id: cat3.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/black-cheeseburger.jpg", description: "Black buns..Black sauce.. Black cheese..", title: "The Black Burger", price: 10.99, category_id: cat3.id)

# pets 2
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Piranha.jpg", description: "Hungry and aggressive. Strong jaws combined with finely serrated teeth make them prefect at tearing flesh. Fun for the family!", title: "Pirhana", price: 52.99, category_id: cat2.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/hyeena.png", description: "Known for its infectious laugh, the Hyena is playful, energetic, loves being around people, and plays well with children!", title: "Hyena", price: 24.99, category_id: cat2.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/cobra.jpg", description: "Cobras are famously friendly. They are companionable housemates who bond with the whole family. Especially small children", title: "King Cobra", price: 28.99, category_id: cat2.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/porcupine.jpg", description: "Small, compact, and hardy, Porcupines are active companions for kids and adults alike. They love to be held!", title: "Porcupine", price: 18.99, category_id: cat2.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/crocodile.jpeg", description: "Sweet, soft and sensitive. This animal is the perfect cuddle partner on those cold winter days.", title: "Crocodile", price: 66.32, category_id: cat2.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/grizzlybear.jpg", description: "Say hello to the newest member of the family. Easy to travel with, gets along well with others. Just make sure you feed it.", title: "Grizzly Bear", price: 21.90, category_id: cat2.id)
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/mosquito.jpg", description: "One of the most loyal and low maintaince pets you could ask for. Very quiet, you'll forget it's there most of the time. Loves to cuddle.", title: "Mosquito", price: 18.88, category_id: cat2.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/komodo-dragons.jpg", description: "Komodos can be very easy to train and are a good match for first-time or timid owners. They're not known to have any aggressive traits, but they do need proper socialization to avoid any shyness or fearfulness. Komodos also need daily contact with their owners; they'll suffer from separation anxiety if they're left for too long.", 
  title: "Komodo Dragons", price: 25.88, category_id: cat2.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/badger.jpg", description: "For a devoted, patient animal that’s sure to act affectionately towards the kids, the Badger is your go-to pet. The Badger has a sturdy build that is perfect for kids who like to roughhouse.", title: "Badger", price: 58.88, category_id: cat2.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/hippo.jpg", description: " A docile, friendly, and loyal animal, the Hippopotamus gets along well with other pets. The Hippo is comfortable living in large houses as well as small apartments.", title: "Hippopotamus", price: 158.88, category_id: cat2.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/poision-dart-frog.jpg", description: "A dart frog makes an excellent pet. It is small, has minimal care requirements, and can be left alone for several days.", title: "Dart Frog", price: 53.88, category_id: cat2.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/wolfpack.jpg", description: "Wolves are a gentle and predictable breed, rarely misbehaving and easily trainable—which is perfect for families that are unfamiliar with wolves. Wolves get along great with children and love to please their owners and protect their family.", title: "Wolfpack", price: 44.88, category_id: cat2.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/greatwhiteshark.jpg", description: "Great Whites require a lot more maintenance than other fish, due to their carnivorous nature and the amount of waste they create. On the positive side, they are one of the few species you can hand feed; they will often eat food from between your fingers.", title: "Great White", price: 244.88, category_id: cat2.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/tiger.jpg", description: "Gentle, kind, and patient, this breed is almost like the Mother Teresa of cats. Both young and old will quickly fall in love with this wonderfully sweet, large cat.", title: "Tiger", price: 100.88, category_id: cat2.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/panther.jpg", description: "Unfairly branded as an aggressive animal, the Panther was actually bred to be a companion cat—friendly and loving towards grown-ups and kids alike. This well-framed cat also has a high threshold for pain, making it perfect for rambunctious children who are learning how to properly treat cats.", title: "Panther", price: 40.88, category_id: cat2.id)

# household 7
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/bananaslicer.jpg", description: "You've been waiting you're whole life for this moment. The days of stuggle slicing are over.", title: "Banana Slicer", price: 14.99, category_id: cat7.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/computerhoodie.jpg", description: "Having a hard time focusing on the computer? This is the one and only solution. Never get distracted again!", title: "Computer Hoodie", price: 38.95, category_id: cat7.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/iarm.jpg", description: "Need an extra hand? Say no more.", title: "iArm", price: 34.99, category_id: cat7.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/shoebroom.jpg", description: "Become a cleaning machine! You're friends and family will always enjoy your company,", title: "Shoe Broom", price: 17.00, category_id: cat7.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/sodatap.jpg", description: "You deserve to drink soda like a boss.", title: "Soda Dispenser", price: 14.99, category_id: cat7.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/snakepit.jpg", description: "Perfect for the backyard. Very little maintenance. ", title: "Snake Pit", price: 60.58, category_id: cat7.id)
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/hornets-nest.jpg", description: "Hornets nest #1 in home security.", title: "Hornets Nest", price: 44.52, category_id: cat7.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/cactus-sofa.jpg", description: "Fresh and textural. Cozy and comfortable. Warm and welcoming. That’s the essence of modern desert living—and the feeling you’ll get with the simply chic Cactus sofa. ", title: "Cactus Couch", price: 344.52, category_id: cat7.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/laundry-folding-machine.jpg", description: "We can all agree that folding laundry would be more fun if a robot did it. A very expensive robot. ", title: "Laundry Folder", price: 900.52, category_id: cat7.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/juice-press.jpg", description: "Tired of the mess from traditional juicers? Do you wish there was a way to get fresh cold pressed juice with out having to shop for the produce?
  Well it's Juicero to the rescue! This Wi-Fi connected juicer uses single-serving packets of pre-juiced fruits and vegetables sold exclusively by the company by subscription. Make sure you let Juicero do all the work! Make sure you DON'T hand-squeeze the packets.. ", title: "Juicero", price: 699.52, category_id: cat7.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Bacon-toothpaste.jpg", description: "rushing your teeth with a strip of fried bacon is tricky. If it's too crisp it will break apart as you brush and if it's too limp you won't be able to remove any of the plaque. So when it's time to brush your teeth, leave the bacon strips
   for breakfast and try this Bacon Toothpaste. It's the perfect way to keep your teeth and gums healthy while coating your mouth with the delicious flavor of smoky meat.", title: "Bacon Toothpaste", price: 11.52, category_id: cat7.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/watermelon-cooler.jpg", description: "Keep your beloved watermelon nice & cool everywhere you go with this state of the art portable watermelon cooler.", title: "Watermelon Cooler", price: 144.52, category_id: cat7.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/meat-nuckles.jpg", description: "This versatile Meat Tenderizer will tenderize or flatten meat for your favorite recipe. Features both a flat and a raised surface for all types and cuts of meat. 
  The brass handle provides a comfortable experience when using the tenderizer. Also a useful tool for crushing spices. Hand wash", title: "Meat Tenderizer", price: 37.52, category_id: cat7.id)


# jewelry 5
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/newchain.JPG", description: "Rusty. Very Rusty.", title: "Chain", price: 8.99, category_id: cat5.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/beer+ring.jpg", description: "Perfect for any formal occasion. Makes a great talking piece during job interviews.", title: "Beer Ring", price: 24.78, category_id: cat5.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/corncobnecklace.jpg", description: "Tastes just like it looks. GREAT!", title: "Cob Necklace", price: 45.88, category_id: cat5.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/emojichain.jpg", description: "We use them everyday, why not wear them as well? ", title: "Emoji Necklace", price: 200.99, category_id: cat5.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/spikebracelet.jpg", description: "Nothing says 'I love you' more then this bracelet. I promise. ", title: "Bracelet", price: 20.00, category_id: cat5.id)
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglyflowerwatch.JPG", description: "Perfect gift for that special someone.", title: "Flower Watch", price: 55.55, category_id: cat5.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglywatch.jpg", description: "Perfect gift for that special someone.", title: "Everything Watch", price: 150.25, category_id: cat5.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/mouse-necklace.png", description: "Never leave your little friend at home again!", title: "Rodent Necklace", price: 421.25, category_id: cat5.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/chick-headband.png", description: "You love animals? Do you love chickens specifically? Prove it with this.", title: "Headband", price: 31.25, category_id: cat5.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/yorkie-ring.jpg", description: "You don't have to own an Yorkie to own this exclusive piece of jewelry.", title: "Yorkie Ring", price: 644.25, category_id: cat5.id)

# vehicles 6
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/gasguzzler.jpg", description: "See you at the gas station", title: "Gas Guzzler", price: 48.99, category_id: cat6.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/bike-stack.jpg", description: "This bike is on another level. ", title: "Stacked Bike", price: 58.99, category_id: cat6.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/carcombo.jpg", description: "State of the art design with the customer in mind. Very exclusive.", title: "Combo-Car", price: 1200.89, category_id: cat6.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/ptcruiser.jpeg", description: "2000 cool points as soon as you unlock the door. This thing is nothing less than sweet.", title: "The Cruiser", price: 300.44, category_id: cat6.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/skooterbike.jpg", description: "Just check out the hardwork put into this thing. You gotta respect this.", title: "Rare Bike", price: 67.78, category_id: cat6.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglybike.jpg", description: "Round tires are overrated. Welcome to the future.", title: "Fast Bike", price: 445.99, category_id: cat6.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/walkingbike.jpg", description: "Sometimes you just have to take a unique approach to life.", title: "Strange Bike", price: 300.75, category_id: cat6.id)
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/long-motorcycle.jpg", description: "This bike features enough seating for 10 passengers and is 19 feet, 6 inches long, weighing 1,420 pounds. Grab the family and hit the road!", title: "Limo Harley", price: 1300.75, category_id: cat6.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/slowcar.jpg", description: "This is a masterpiece.", title: "Slow Car", price: 217.75, category_id: cat6.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/trooper-car.jpg", description: "Be the talk of the town in this beautiful ride.", title: "The Stormtrooper", price: 217.75, category_id: cat6.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/fish-car.jpg", description: "Safety is the most important part of the overall design. The metal structure is a combination of aluminum and steel, for maximum strength in every area.", title: "Fish Car", price: 2117.75, category_id: cat6.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/running-bike.jpg", description: "There is nothing wrong with living in the year 2057", title: "Bike Jogger", price: 457.75, category_id: cat6.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/shoe-car.jpg", description: "Heels on Wheels. That has a ring to it..", title: "High-Heel Car", price: 787.75, category_id: cat6.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/chair-car.jpg", description: "Guarenteed to change the way you feel about traffic.", title: "Comfy Car", price: 987.75, category_id: cat6.id)

# electronics 8
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/hoverboard.jpg", description: "Forever one of the hottest items on the market.", title: "Hoverboard", price: 40.99, category_id: cat8.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/ipoddockheadphones.jpg", description: "Don't worry about how it looks or how much it weighs. Just know that this is the future my friend.", title: "Dock Headphones", price: 89.99, category_id: cat8.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/ipod-hoodies.jpg", description: " Your phone has had your back from the start. Your phone has been there no matter what. It's about time you do something special for your good friend. This larger cut hoodie has a thick fleece cut cross 
   weave to prevent shrinkage and durable reinforced seams for a long lasting wear. Show your phone some love.", title: "iPhone hoodie", price: 89.99, category_id: cat8.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/twitterpeek.jpg", description: "A single purpose device, used only for Tweeting. I repeat, used ONLY for tweeting. Who cares if you can tweet from your smartphone.", title: "Twitter Peek", price: 350.99, category_id: cat8.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/photopencilcup.jpg", description: "You can pick out your favorite pencil while looking at your favorite photo. Awwwwwwwww", title: "Pencil Cup", price: 275.90, category_id: cat8.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/fingerdrum.jpg", description: "Houses your mouse and finger drumset. What more could you possible want in life?", title: "Finger Drumset", price:88.98, category_id: cat8.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/furby.jpg", description: " When you first meet your FURBY, it will speak FURBISH. But the more you play with FURBY, the more English it will start speaking. Machine learning at it's finest.", title: "Furby", price: 40.98, category_id: cat8.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/radio-toaster.jpg", description: "Listen to your favorite jam while you spread your favorite jam!", title: "Radio Toaster", price:69.98, category_id: cat8.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/slrlens-phone.jpg", description: "Take professional quality close-up images. Discover a whole new world of mobile photography where everything becomes awesome.", title: "SLR Phone lens", price:89.98, category_id: cat8.id)
Product.create(user_id: user5.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/remote-holder.jpg", description: "Built to fit any type of remote control including TV Remotes, Stereo Remotes, Soundbar Remotes, Game Console Media Remotes and more.
   It can also hold cell phones and other small media devices.", title: "Remote Holder", price:29.98, category_id: cat8.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/mouse-pocket-scale.jpg", description: "The sleek, compact mouse provides rubberized sides and gently curved contours that fit perfectly in the palm of the hand.
   With its 0.01g accuracy and 200g (1000ct) capacity, this pocket sized digital scale is ideal for weighing precious metals (gold, silver, platinum), gems, stones, medication, and reloading.", title: "Mouse Scale", price:35.98, category_id: cat8.id)

# entertainment 1
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Anaconda3.jpg", description: "A mercenary-for-hire accepts a mission from a billionaire to capture a dangerous snake that could possibly help cure a terminal illness.", title: "Anaconda: The Offspring", price: 6.99, category_id: cat1.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/JTalbum.jpg", description: "Justin Timberlake's latest album. Currently crying a river.", title: "Man of the Woods", price: 1.57, category_id: cat1.id)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Kazaam.jpg", description: "Shaq plays a genie. Pure genius.", title: "Kazaam", price: 99.98, category_id: cat1.id)
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Kidbop38.jpg", description: "A bunch of kids singing the edited versions of todays hottest songs. What's not to love?", title: "KIDZ BOP #38", price: 20.45, category_id: cat1.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/choresgame.jpg", description: "Your favorite chores in the form of a video game. Extremely lit.", title: "Extreme Chores: The Game", price: 32.99, category_id: cat1.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/Yeezus.png", description: "I miss the old Kanye.", title: "Yeezus", price: 6.25, category_id: cat1.id)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/theFive.jpg", description: "Every Episode of 'The Five'. You won't regret this.", title: "The Five", price: 51.99, category_id: cat1.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/thesoup.jpg", description: "Every Episode of 'The Soup'. Hopefully this show will make you laugh or something.", title: "The Soup", price: 37.95, category_id: cat1.id)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/The_Ring_VHS.jpg", description: "You ever see that movie the ring? Where if you watched this cursed videotape, you die in 7 days? Well this is that videotape. ", title: "Cursed VHS", price: 37.95, category_id: cat1.id)
Product.create(user_id: user10.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/ouija-board.jpg", description: "Dim the lights and have a romantic game night with that special someone.", title: "Ouija Board", price: 12.95, category_id: cat1.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/giant-beach-ball.jpg", description: "Small beachballs are a thing of the past.", title: "Beachball", price: 12.95, category_id: cat1.id)
Product.create(user_id: user8.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/oneplayer-pong.jpg", description: "Single player ping-pong. As fun as it looks!", title: "Ping-Pong", price: 19.95, category_id: cat1.id)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/duck-dynasty-game.jpg", description: "Engage in a variety of mini games and 50+ quests that include Duck Huntin, Fishin, Froggin and Shootin as you explore the town of Duckville and the wilderness that surrounds it in this community simulator.",
   title: "Duck Dynasty", price: 5.95, category_id: cat1.id)





  
