// pages/api/coins.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const {coinSpec} = req.body;
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinSpec}`);
    const coins = response.data;
    res.status(200).json(coins);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch coins' });
  }
}
