const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const slug = require('slugs'); // for the url friendly slug

const storeSchema = Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
  date: {
    type: Date,
    default: Date.now(),
  },
  created: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: {
      type: String,
      default: 'Point',
    },

    coordinates: [
      {
        type: Number,
        required: 'You must supply coordinates ',
      },
    ],
    address: {
      type: String,
      required: 'You must supply an address',
    },
  },
  photo: String,
});

storeSchema.pre('save', async function(next) {
  if (!this.isModified('name')) {
    next(); // skip it
    return next(); // stop the function from running
  }
  this.slug = slug(this.name);
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)`, 'i');
  const storesWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (storesWithSlug.length) {
    this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
  }
  next();
  // TODO, make the slug unique
});

module.exports = mongoose.model('Store', storeSchema);
