import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Test endpoint to check authentication (no auth required)
router.get('/test', (req, res) => {
  res.json({ message: 'Profile routes are working', timestamp: new Date().toISOString() });
});

// Test endpoint to check authentication middleware
router.get('/auth-test', authenticateToken, (req, res) => {
  res.json({ 
    message: 'Authentication successful', 
    user: req.user,
    timestamp: new Date().toISOString() 
  });
});

// All profile routes require authentication
router.use(authenticateToken);

// Profile routes
router.get('/profile', getProfile);
router.put('/profile', updateProfile);

export default router; 