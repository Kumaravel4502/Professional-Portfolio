const { Visitor } = require('../models/Visitor.model.js');

const getAndIncrementVisitor = async (req, res) => {
  try {
    let visitor = await Visitor.findOne({});
    if (!visitor) {
      visitor = await Visitor.create({ count: 1 });
    } else {
      visitor.count += 1;
      await visitor.save();
    }
    res.json({ totalVisitors: visitor.count });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAndIncrementVisitor };