import { NextApiRequest, NextApiResponse } from 'next';
import Fuse from 'fuse.js';
import nace from '../../lib/nace.json';

const baseUrl =
  'https://autoform.ekosystem.slovensko.digital/api/corporate_bodies';
const limit = 20;
const token = process.env.autoformtoken;

if (!token) {
  throw new Error(' process.env.autoformtoken is not defined');
}
const options = {
  shouldSort: true,
  includeScore: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  keys: ['code', 'label'],
};
const fuse = new Fuse(nace, options);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const q = req.query.q as string;

  if (!q) {
    return res.status(400).send('q parameter missing');
  }

  const result = fuse.search(q);

  res.json(result);
};
