const express = require('express');
const auth = require('../middleware/auth');
const Task = require('../models/Task');

const router = express.Router();

// Create Task
router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;
  
  try {
      const task = new Task({ title, description, user: req.user._id });
      await task.save();
      res.status(201).json(task);
  } catch (err) {
      console.error('Error creating task:', err); // Log error details
      res.status(400).json({ error: 'Failed to create task' });
  }
});


// Get Tasks
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(400).json({ error: 'Failed to fetch tasks' });
  }
});

// Update Task
router.put('/:id', auth, async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { title, description, status }, { new: true });
    if (!task) throw new Error('Task not found');
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update task' });
  }
});

// Delete Task
router.delete('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) throw new Error('Task not found');
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
