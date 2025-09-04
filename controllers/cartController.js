const Cart = require('../models/cart');

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');
  if (!cart) return res.json({ products: [] });
  res.json(cart);
};

exports.addToCart = async (req, res) => {
  const { productId } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    cart = new Cart({ userId: req.user.id, products: [{ productId, quantity: 1 }] });
  } else {
    const itemIndex = cart.products.findIndex(p => p.productId && p.productId.toString() === productId);

    if (itemIndex > -1) {
      cart.products[itemIndex].quantity += 1;
    } else {
      cart.products.push({ productId, quantity: 1 });
    }
  }
  await cart.save();
  res.json(cart);
};

exports.updateCartItem = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  const item = cart.products.find(p => p.productId && p.productId.toString() === id);

  if (!item) return res.status(404).json({ message: 'Product not in cart' });

  item.quantity = quantity;
  await cart.save();
  res.json(cart);
};

exports.removeCartItem = async (req, res) => {
  const { id } = req.params;
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  cart.products = cart.products.filter(p => p.productId && p.productId.toString() !== id);
  await cart.save();
  res.json(cart);
};