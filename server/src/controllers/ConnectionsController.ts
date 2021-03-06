import { Request, Response } from 'express';
import db from '../database/connection';


export default class ConnectionsController {

  async index(request: Request, response: Response) {

    const connections = await db('connections').count("* as total");
    const total = connections[0];

    return response.status(200).json(total);
  }
  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await db('connections').insert({
      user_id,
    });

    return response.status(201).send();
  }
}