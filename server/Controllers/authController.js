const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET


// Register
exports.register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = new User({ name, email, password });
    await user.save();

    // Generate JWT
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '24h', // Token expires in 1 hour
    });

    res.cookie('CertiGen', token, {
      httpOnly: true, // Prevent access via client-side JavaScript
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'Strict', // Prevent CSRF
      maxAge: 3600000, // 1 hour
    });


    res.status(201).json({ 
      message: 'User registered successfully',
      success:true,
      token });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message ,success:false});
  }
};


// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !password) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '24h', // Token expires in 1 hour
    });

    res.cookie('CertiGEn', token, {
      httpOnly: true, // Secure cookie
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'Strict', // CSRF protection
      maxAge: 3600000, // 1 hour
    });


    res.status(200).json({ 
    message: 'Login successful', 
    success:true,
    token,
    email,
    name:user.name });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

