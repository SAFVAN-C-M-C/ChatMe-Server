import { ICreateJob } from "@/domain/entities/Jobs";
import { ObjectId, Types } from "mongoose";
import { Jobs } from "../model";

export const searchJob = async (data: { searchKey: string, filter: string }) => {
    try {
        const { searchKey, filter } = data;
        if (!searchKey) {
            throw new Error("Search key not provided");
        }

        const regex = new RegExp(`^${searchKey}`, 'i');
        let dataFilter: any = {};

        if (filter === "full-time" || filter === "part-time") {
            dataFilter.type = filter;
        }

        if (filter === "On-site" || filter === "remote" || filter === "hybrid") {
            dataFilter.mode = filter;
        }

        const searchedJobs = await Jobs.find({
            ...dataFilter,
            $or: [
                { jobTitle: { $regex: regex } },
                { skills: { $regex: regex } }
            ]
        });

        if (!searchedJobs) {
            throw new Error("Something went wrong");
        }

        return searchedJobs;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};
