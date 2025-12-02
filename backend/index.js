const express = require('express');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/api/services', async (req, res) => {
  const services = await prisma.service.findMany();
  res.json(services);
});

app.get('/api/about', async (req, res) => {
  const about = await prisma.about.findFirst();
  res.json(about);
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  // Send email notification
  res.json({ message: 'Contact message sent successfully' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: 'Invalid email or password' });
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) return res.status(401).json({ message: 'Invalid email or password' });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/api/dashboard', async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
  res.json({ user });
});

app.get('/api/projects', async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const projects = await prisma.project.findMany({ where: { userId: decoded.userId } });
  res.json(projects);
});

app.post('/api/projects', async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { title, description } = req.body;
  const project = await prisma.project.create({ data: { title, description, userId: decoded.userId } });
  res.json(project);
});

app.put('/api/projects/:id', async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { id } = req.params;
  const { title, description } = req.body;
  const project = await prisma.project.update({ where: { id }, data: { title, description } });
  res.json(project);
});

app.delete('/api/projects/:id', async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { id } = req.params;
  await prisma.project.delete({ where: { id } });
  res.json({ message: 'Project deleted successfully' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});