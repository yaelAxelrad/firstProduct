//mongoimport --db catalog --collection books --file books.json
db.books.find()
db.books.find({isbn:1933988797})
db.books.find({namebook:/java/},{namebook})
db.books.find({status:PUBLISH},{namebook,date,_id})
db.books.find({numpages:{$gt:100}},{namebook,numpages,isbn})
db.books.find({namebook:/C#/})
db.books.find({namebook:/a$/})
db.books.find({numpages:{$gl:100}&&{$gt:10}},{namebook,numpages})
db.books.find({namebook:/r/})
db.books.find({namebook:/e$/})
//תרגיל 13
db.books.find().sort({namebook:1})
//14
db.books.find().sort({namebook:-1})
//15
db.books.find({namebook:/j/i}).count
//16
db.books.find().sort({numpages:1}).limit(5)
//17
db.books.find({category:{$exists:false}})
//18
db.books.find({shortDescription:{$exists:true}})
//19
db.books.find({ObjectId:{$exists:true}}).count()






