# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Product.delete_all


user1 = User.create(username: "carey1", email: "email1",  password: "password", img_url: );
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
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglyshirt.jpg", description: "If one hawaiian shirt is concidered 'chill', imagine what a MULTI-PATTERN hawaiian shirt means? That's right, you guessed it. Now hurry.", title: "Shirt", price: 20.50, category_id: cat4.id)
Product.create(user_id: user6.id, img_url:"", description: "", title: "", price: , category_id: cat4.id)
Product.create(user_id: user6.id, img_url:"", description: "", title: "", price: , category_id: cat4.id)
Product.create(user_id: user6.id, img_url:"", description: "", title: "", price: , category_id: cat4.id)


# food 3
Product.create(user_id: user10.id, img_url:"", description: "Feel the magic in every bite of this unicorn meat. There are crunchy horn bits in every bite. The meat is also easily spreadable for sandwiches and more.", title: "Unicorn Meat", price: 16.99, category_id: cat3.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat3.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat3.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat3.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat3.id)


# pets 2
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/pirhana.jpg", description: "Hungry and aggressive. Strong jaws combined with finely serrated teeth make them prefect at tearing flesh. Fun for the family!", title: "Pirhana", price: 52.99, category_id: cat2.id)
Product.create(user_id: user9.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/cobra.jpg", description: "Cobras are famously friendly. They are companionable housemates who bond with the whole family. Especially small children", title: "King Cobra", price: 28.99, category_id: cat2.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat2.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat2.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat2.id)

# household 7
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat7.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat7.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat7.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat7.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat7.id)

# jewelry 5
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/rustychain.JPG", description: "Rusty. Very Rusty.", title: "Chain", price: 8.99, category_id: cat5.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat5.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat5.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat5.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat5.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat5.id)

# vehicles 6
Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/gasguzzler.jpg", description: "See you at the gas station", title: "Gas Guzzler", price: 48.99, category_id: cat6.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat6.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat6.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat6.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat6.id)

# electronics 8
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat8.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat8.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat8.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat8.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat8.id)
# entertainment 1
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat1.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat1.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat1.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat1.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat1.id)
Product.create(user_id: user10.id, img_url:"", description: "", title: "", price:, category_id: cat1.id)
