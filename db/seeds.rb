# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Product.delete_all


user1 = User.create(username: "carey1", email: "email1",  password: "password");
user2 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,  password: "password");
user3 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,  password: "password");
user4 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,  password: "password");
user5 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,  password: "password");
user6 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,  password: "password");
user7 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,  password: "password");
user8 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,  password: "password");
user9 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,  password: "password");
user10 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,  password: "password");
user11 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,  password: "password");



Product.create(user_id: user7.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/gasguzzler.jpg", description: "See you at the gas station", title: "Gas Guzzler", price: 48.99)
Product.create(user_id: user3.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/uglyshoes.jpg", description: "If Comfort and Style had a baby", title: "Great Shoes", price: 18.33)
Product.create(user_id: user2.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/martini-glass-hat1.jpg", description: "Extremely rare head piece.", title: "Rare Hat", price: 37.99)
Product.create(user_id: user4.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/pirhana.jpg", description: "Agressive and Hungry.", title: "Pirhana", price: 52.99)
Product.create(user_id: user6.id, img_url:"https://s3-us-west-1.amazonaws.com/productpics35/rustychain.JPG", description: "Rusty. Very Rusty.", title: "Chain", price: 8.99)