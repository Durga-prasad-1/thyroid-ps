const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Testing");
console.log("Successfully connected!");
const kittySchema = new mongoose.Schema({
    name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'pluto1' });
console.log(silence.name);
silence.save();
