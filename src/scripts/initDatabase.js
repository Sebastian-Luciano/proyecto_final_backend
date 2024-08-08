/* import { sequelize } from '../config/database.js';
import models from '../models/model.index.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const generateSecurePassword = () => {
  return crypto.randomBytes(8).toString('hex') + 'A1!';
};

const { User } = models;

const initDatabase = async () => {
  try {
    await sequelize.sync();

    const adminExists = await User.findOne({ where: { isAdmin: true } });

    if (!adminExists) {
      const adminPassword = generateSecurePassword();
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      const admin = await User.create({
        name: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        password: hashedPassword,
        mobilePhone: '+1234567890',
        isAdmin: true
      });

      console.log('Admin user created:');
      console.log('Email:', admin.email);
      console.log('Password:', adminPassword);
      console.log('Please change these credentials after first login.');
    } else {
      console.log('Admin user already exists.');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

export default initDatabase; */
// src/scripts/initDatabase.js
import { sequelize, models } from '../models/model.index.js';
import bcrypt from 'bcrypt';

const { User, Incidence } = models;

/* const generateSecurePassword = () => {
  return 'Admin123@'; // Contraseña estática que cumple con los requisitos
};

const initDatabase = async () => {
  try {
    // Sincroniza los modelos con la base de datos
    await User.sync({ alter: true });
    await Incidence.sync({ alter: true });

    const adminExists = await User.findOne({ where: { isAdmin: true } });

    if (!adminExists) {
      const adminPassword = await bcrypt.hash('AdminPassword123!', 10);

      const admin = await User.create({
        name: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        password: adminPassword,
        mobilePhone: '+1234567890',
        isAdmin: true,
        passwordChangeRequired: true
      });

      console.log('Admin user created:');
      console.log('Email:', admin.email);
      console.log('Password:', adminPassword);
      console.log('Please change these credentials after first login.');
    } else {
      console.log('Admin user already exists.');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}; */

const initDatabase = async () => {
  try {
    // Sincroniza los modelos con la base de datos
    await User.sync({ alter: true });
    await Incidence.sync({ alter: true });

    const adminExists = await User.findOne({ where: { isAdmin: true } });

    if (!adminExists) {
      const adminPassword = await bcrypt.hash('AdminPassword123!', 10);

      const admin = await User.create({
        name: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        password: adminPassword,
        mobilePhone: '+1234567890',
        isAdmin: true,
        passwordChangeRequired: false
      });

      console.log('Admin user created:');
      console.log('Email:', admin.email);
      console.log('Password:', 'AdminPassword123!');
      console.log('Please do not change these credentials until necessary.');
    } else {
      console.log('Admin user already exists.');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};


export default initDatabase;