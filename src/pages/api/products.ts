import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  products: any;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
      const products = ["test"];
      res.status(200).json({products});
    } catch (error) {
      res.status(500).json({ products: [] });
    }
  }