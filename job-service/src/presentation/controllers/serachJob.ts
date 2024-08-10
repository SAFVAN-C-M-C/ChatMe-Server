import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";


export const serachJobController = (dependencies: IDependencies) => {
  const {
    useCases: { serachJobUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      console.log("jksdfdfdfdfdfdfdfdfdfdfdf");
      let {key,filter}=req.query

      if(!key){
        throw new Error("Search key not provided");
      }
      if (typeof filter !== 'string') {
        filter='all'
      }
      
      const jobs = await serachJobUseCase(dependencies).execute({searchKey:String(req.query.key),filter});

      if (!jobs) {
        console.log("no jobs found");
        throw new Error("no jobs found")
      }

      res.status(200).json({
        success: true,
        data: jobs,
        message: "Job fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};
