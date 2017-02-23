# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name:"jon zachary",password:"1234",email:"jon@jon.com")
Game.create(date:Date.today, playerWhite:'dididothat', eloWhite:1750, playerBlack:'Boethius', eloBlack:1700,  timeControl:"30 05", openingName:'Pirc Defense', ecoCode:"B09", gameLength:38, result:'1/2 1/2') 
