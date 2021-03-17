// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'id',
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id',
  // If a category is deleted, the associated id will also be deleted
  onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
  foreignKey: 'id',
  // If a product is deleted, the associated id will also be deleted
  onDelete: 'CASCADE',
})

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
    foreignKey: 'id',
    // If a tag is deleted, the associated id will also be deleted
    onDelete: 'CASCADE',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
