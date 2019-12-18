import Jobs from "../models/Job";
import mongoose from "mongoose";
import ApiError from "../utils/ApiError";
 
const _repository = mongoose.model("Job" Job);

class JobsService {
  async getById(id){
    let data = await _repository.findById(id);
    if(!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data; 
  }

}
const jobsService = new JobsService();
export default jobsService