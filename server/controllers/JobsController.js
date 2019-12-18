import express from "express";
import JobsService from "../services/JobsService";

export default class JobController {
  constructor() {
    this.router = express
      .Router({ mergeParams: true })
      .get("", this.getAll)
      .get("/:id", this.getById);
  }
  async getById(req, res, next) {
    try {
      let data = await JobsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
