const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(express.json());
app.get('/api/services', async (req, res) => { try { const services = await prisma.service.findMany(); res.json(services); } catch (err) { res.status(500).json({ message: 'Error fetching services' }); } });
app.get('/api/expertise', async (req, res) => { try { const expertise = await prisma.expertise.findMany(); res.json(expertise); } catch (err) { res.status(500).json({ message: 'Error fetching expertise' }); } });
app.get('/api/achievements', async (req, res) => { try { const achievements = await prisma.achievement.findMany(); res.json(achievements); } catch (err) { res.status(500).json({ message: 'Error fetching achievements' }); } });
app.post('/api/contact', async (req, res) => { try { const { name, email, message } = req.body; const lead = await prisma.lead.create({ data: { name, email, message } }); res.json({ message: 'Contact request sent successfully' }); } catch (err) { res.status(500).json({ message: 'Error sending contact request' }); } });
app.get('/api/blog-posts', async (req, res) => { try { const blogPosts = await prisma.blogPost.findMany(); res.json(blogPosts); } catch (err) { res.status(500).json({ message: 'Error fetching blog posts' }); } });
app.post('/api/blog-posts', async (req, res) => { try { const { title, content, author } = req.body; const blogPost = await prisma.blogPost.create({ data: { title, content, author } }); res.json(blogPost); } catch (err) { res.status(500).json({ message: 'Error creating blog post' }); } });
app.get('/api/leads', async (req, res) => { try { const leads = await prisma.lead.findMany(); res.json(leads); } catch (err) { res.status(500).json({ message: 'Error fetching leads' }); } });
app.post('/api/register', async (req, res) => { try { const { name, email, password } = req.body; const hashedPassword = await bcrypt.hash(password, 10); const user = await prisma.user.create({ data: { name, email, password: hashedPassword } }); res.json(user); } catch (err) { res.status(500).json({ message: 'Error creating user' }); } });
app.post('/api/login', async (req, res) => { try { const { email, password } = req.body; const user = await prisma.user.findUnique({ where: { email } }); if (!user) return res.status(401).json({ message: 'Invalid email or password' }); const isValidPassword = await bcrypt.compare(password, user.password); if (!isValidPassword) return res.status(401).json({ message: 'Invalid email or password' }); const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' }); res.json({ token }); } catch (err) { res.status(500).json({ message: 'Error logging in' }); } });
app.listen(3000, () => console.log('Server listening on port 3000'))