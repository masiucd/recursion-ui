const mongoose = require('mongoose');

const Store = mongoose.model('Store');
const multer = require('multer');
const jimp = require('jimp');
// for rezise images
const uuid = require('uuid');

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/');
    if (isPhoto) {
      next(null, true);
    } else {
      next({ msg: 'That file type does not exists and is not allowed' }, false);
    }
  },
};

exports.addStore = (req, res) => {
  res.render('editStore', {
    title: 'Add Store',
  });
};

exports.upload = multer(multerOptions).single('photo');

// middleware
exports.resize = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }
  const extenstion = req.file.mimetype.split('/')[1];

  req.body.photo = `${uuid.v4()}.${extenstion}`;
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, jimp.AUTO);
  await photo.write(`./public/uploads/${req.body.photo}`);
  next();
};

exports.createStore = async (req, res) => {
  const store = await new Store(req.body).save();
  req.flash(
    'success',
    `Successfully created! ${store.name}. Care to leave a review!`
  );
  res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
  const stores = await Store.find();
  res.render('stores', { title: 'stores', stores });
};

exports.editStore = async (req, res) => {
  const store = await Store.findOne({ _id: req.params.id });
  // res.json(store);
  res.render('editStore', { title: `edit ${store.name}`, store });
};

exports.updateStore = async (req, res) => {
  req.body.location.type = 'Point';
  const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  }).exec();
  req.flash(
    'success',
    `Successfully updated  <strong>${store.name}</strong> <a href="/stores/${store.slug}"> View Store </a> `
  );
  res.redirect(`/stores/${store._id}/edit`);
};

exports.getStoreBySlug = async (req, res, next) => {
  const store = await Store.findOne({ slug: req.params.slug });
  if (!store) return next();

  res.render('store', { title: store.name, store });
};

exports.getStoresByTag = async (req, res) => {
  const tags = await Store.getTagList();
  const {tag} = req.params;
  res.render('tags', { title: 'Tags', tags, tag });
};
