/* import models from '../models/model.index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { User } = models;

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign(
            { id: user.id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin,
                passwordChangeRequired: user.passwordChangeRequired
            }
        });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const register = async (req, res) => {
    try {
      const { name, lastName, email, password, mobilePhone } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        lastName,
        email,
        password: hashedPassword,
        mobilePhone,
        isAdmin: false
      });
      res.status(201).json({ message: 'Usuario registrado con éxito', userId: user.id });
    } catch (error) {
      console.error('Error en registro:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };

  export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, mobilePhone } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await user.update({ name, lastName, mobilePhone });
    res.json({ message: 'Perfil actualizado con éxito' });
  } catch (error) {
    console.error('Error en actualización de usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const updateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, lastName, mobilePhone, photo } = req.body;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.update({ name, lastName, mobilePhone, photo });
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error('Error en Actualiar:', error);
        res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
}

export const changePassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { currentPassword, newPassword } = req.body;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await user.update({ password: hashedPassword });
        res.json({ message: 'Password changed successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Password change failed', error: error.message });
        console.error('Error en el cambio de password:', error);
        res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
} */

import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

/* export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        passwordChangeRequired: user.passwordChangeRequired
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
 */

/* export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isMatch = await user.validatePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        passwordChangeRequired: user.passwordChangeRequired
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}; */

/* export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
console.log(email, password);
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isMatch = await user.validatePassword(password);
    console.log(isMatch)
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      console.log(token),
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        passwordChangeRequired: user.passwordChangeRequired
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}; */


/* export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Iniciando proceso de login...');

    const user = await User.findOne({ email });
    if (!user || !(await user.compared(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    console.log('Usuario encontrado:', user);

    // const isMatch = await user.validatePassword(password); 
    const isMatch = await bcrypt.compare(password, user.password); 
    console.log('Contraseña proporcionada:', password);
    console.log('Contraseña hasheada de la base de datos:', user.password);
    console.log('¿Coinciden las contraseñas?:', isMatch);
    if (!isMatch) {
      console.log('Contraseña no válida');
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    console.log('Contraseña válida');

    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1d' });

   
    console.log('Token generado:', token);

    res.json({
      user: { id: user.id, name: user.name, lastName: user.lastName, email: user.email, isAdmin: user.isAdmin},
      token     
    });

    console.log('Proceso de login finalizado');
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}; */


export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // Eliminar espacios en blanco
    email = email.trim();
    password = password.trim();

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.validatePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Eliminar 'Bearer ' del token
    let token = req.headers.authorization;
    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trimStart();
    }

    token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        passwordChangeRequired: user.passwordChangeRequired
      }
    });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


/* export const register = async (req, res) => {
    try {
        const { name, lastName, email, password, mobilePhone } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            lastName,
            email,
            password: hashedPassword,
            mobilePhone,
            isAdmin: false
        });
        res.status(201).json({ message: 'Usuario registrado con éxito', userId: user.id });
    } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}; */

export const register = async (req, res) => {
  try {
    const { name, lastName, email, password, mobilePhone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      lastName,
      email,
      password: hashedPassword,
      mobilePhone,
      isAdmin: false
    });
    res.status(201).json({ message: 'Usuario registrado con éxito', userId: user.id });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, mobilePhone } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await user.update({ name, lastName, mobilePhone });
    res.json({ message: 'Perfil actualizado con éxito' });
  } catch (error) {
    console.error('Error en actualización de usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, mobilePhone, photo } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.update({ name, lastName, mobilePhone, photo });
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error en Actualiar:', error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
}

export const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await user.update({ password: hashedPassword });
    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Password change failed', error: error.message });
    console.error('Error en el cambio de password:', error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
}

