const mongoose = require("mongoose");
const slugify = require("slugify");

const rssSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "A Rss Feed must have a name"],
        unique: true,
    },
    link: {
        type: String,
        required: [true, "A Rss Feed must have a link"],
        unique: true,
    },
    slug: String,
});

rssSchema.pre("save", function (next) {
    // console.log(this);
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Rsslink = mongoose.model("Rsslink", rssSchema);

module.exports = Rsslink;
