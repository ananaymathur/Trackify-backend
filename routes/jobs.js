const express = require('express');
const Job = require('../models/Job');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

// Middleware to protect routes
const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};

// Create Job Application
router.post('/', auth, async (req, res) => {
  const { company, position, status } = req.body;

  try {
    const newJob = new Job({
      user: req.user.id,
      company,
      position,
      status,
    });

    const job = await newJob.save();
    res.json(job);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Get all Job Applications for a User
router.get('/', auth, async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user.id });
    res.json(jobs);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Update Job Status
router.put('/:id', auth, async (req, res) => {
  const { status } = req.body;

  try {
    let job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ msg: 'Job not found' });

    if (job.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    job.status = status;
    await job.save();
    res.json(job);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;