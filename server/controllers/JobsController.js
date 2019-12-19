import express from "express";
import JobsService from "../services/JobsService";

export default class JobController {
  constructor() {
    this.router = express
      .Router({ mergeParams: true })
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let data = await JobsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await JobsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await JobsService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
}
