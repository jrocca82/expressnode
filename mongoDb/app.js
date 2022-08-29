const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

mongoClient.connect(url, function (error, client) {
	if (error) {
		console.log(error);
	} else {
		console.log("DB connected");
		let db = client.db("Tutorial");

		let animals = db.collection("animals");
		//animals.insertOne({name: "bunny", weight: "20lbs"});
		// animals.updateOne({ name: "bear" }, { $set: { weight: "400lbs" } });
		// animals.findOneAndDelete({ name: "bunny" });
		animals.find({}).toArray((error, result) => {
			console.log(JSON.stringify(result));
		});
	}
});
