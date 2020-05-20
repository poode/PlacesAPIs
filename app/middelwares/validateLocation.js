exports.validateLocation = (req, res, next) => {
  try {
    const location = JSON.parse(req.body.location);
    req.body.location = location;
    next()
  } catch (error) {
    res.status(400).json({ message: 'location should be valid object {lat: 30, long: 30} for example' });
  }
}
