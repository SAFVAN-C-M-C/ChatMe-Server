import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getJobChartDataController = (dependencies: IDependencies) => {
  const {
    useCases: { getJobChartDataUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const { range, start, end } = req.query;
      if (typeof range !== 'string') {
        throw new Error("Invalid time range");
      }
      let startDate, endDate;
      if (range === 'custom' && start && end) {
        startDate = new Date(start as string);
        endDate = new Date(end as string);
      }
      const result = await getJobChartDataUseCase(dependencies).execute({
        range,endDate,startDate
      });

      if (!result) {
        throw new Error("No data found");
      }
      res.status(200).json({
        success: true,
        data: result,
        message: "Job data Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};
