// pages/api/itinerary.js

import { MongoClient } from 'mongodb';
import itinerarySchema from '../../models/ItinerarySchema';

const uri = process.env.MONGODB_URI; // Your MongoDB URI here
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'POST') {
    const { itinerary } = req.body;

    try {
      await client.connect();
      const database = client.db('travelPlanner');
      const collection = database.collection('itineraries');
      const result = await collection.insertOne(itinerarySchema); // Use the imported schema here
      res.status(201).json(result.ops[0]);
    } catch (error) {
      res.status(500).json({ error: 'Error saving itinerary' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
