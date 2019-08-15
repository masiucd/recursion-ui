const mongoose = require('mongoose');

const Store = mongoose.model('Store');

exports.addStore = (req, res) => {
  res.render('editStore', {
    title: 'Add Store',
  });
};

exports.createStore = async (req, res) => {
  const store = await new Store(req.body).save();
  req.flash(
    'success',
    `Successfully created! ${store.name}. Care to leave a review!`
  );
  res.redirect(`/store/${store.slug}`);
};

// @ GET
// @ get all stores
// @ public

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
