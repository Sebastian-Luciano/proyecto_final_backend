import Incidence from '../models/Incidence.js';
import fs from 'fs';


export const createIncidence = async (req, res) => {
    try {
        const { subject, type, description, location } = req.body;
        const image = req.file ? req.file.filename : null;
        const incidence = await Incidence.create({
            subject,
            type,
            description,
            location,
            image,
            UserId: req.user.id,
        });
        res.status(201).json(incidence);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create incidence', error: error.message });
    }
};

export const getIncidences = async (req, res) => {
    try {
        const incidences = await Incidence.findAll({
            where: req.user.isAdmin ? {} : { UserId: req.user.id },
            order: [['createdAt', 'DESC']],
        });
        res.json(incidences);
    } catch (error) {
        res.status(400).json({ message: 'Failed to fetch incidences', error: error.message });
    }
};

export const updateIncidence = async (req, res) => {
    try {
        const { id } = req.params;
        const { subject, type, description, status, location } = req.body;
        const incidence = await Incidence.findByPk(id);
        if (!incidence) {
            return res.status(404).json({ message: 'Incidence not found' });
        }
        if (!req.user.isAdmin && incidence.UserId !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }
        await incidence.update({ subject, type, description, status, location });
        res.json(incidence);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update incidence', error: error.message });
    }
};

export const deleteIncidence = async (req, res) => {
    try {
      const { id } = req.params;
      const incidence = await Incidence.findByPk(id);
      if (!incidence) {
        return res.status(404).json({ message: 'Incidence not found' });
      }
      if (!req.user.isAdmin && incidence.UserId !== req.user.id) {
        return res.status(403).json({ message: 'Not authorized' });
      }
      // Eliminar el archivo de imagen asociado a la incidencia
      if (incidence.image) {
        await fs.unlink(`uploads/${incidence.image}`, (err) => {
          if (err) {
            console.error('Error eliminando el archivo:', err);
          }
        });
      }
      await incidence.destroy();
      res.json({ message: 'Incidence deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Failed to delete incidence', error: error.message });
    }
  };