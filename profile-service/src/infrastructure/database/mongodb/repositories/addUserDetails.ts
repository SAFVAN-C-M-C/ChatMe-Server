import mongoose, { Types } from "mongoose";
import { UserProfile } from "../model/UserProfile";
import { UserDetails } from "@/infrastructure/services/addUserDetailService";
import { IUserProfile } from "@/domain/entities";

export const addUserDetails = async (data: IUserProfile) => {
  try {
    const filter = data.userId
      ? { userId: new Types.ObjectId(String(data.userId)) }
      : { email: data.email };

    if (!filter.userId && !filter.email) {
      console.error("User ID or Email must be provided to update the profile");
    }

    const update: any = {};
    if (data.name) update.name = data.name;
    if (data.accountType) update.accountType = data.accountType;
    if (data.preferedJobs) update.preferedJobs = data.preferedJobs;
    if (data.title) update.title = data.title;
    if (data.following)
      update.following = data.following.map(
        (id) => new Types.ObjectId(String(id))
      );
    if (data.followers)
      update.followers = data.followers.map(
        (id) => new Types.ObjectId(String(id))
      );
    if (data.theme) update.theme = data.theme;

    if (data.bio) {
      update.bio = {};
      if (data.bio.doc) update.bio.doc = data.bio.doc;
      if (data.bio.location) update.bio.location = data.bio.location;
      if (data.bio.phone) update.bio.phone = data.bio.phone;
    }

    if (data.companyDetails) {
      update.companyDetails = {};
      if (data.companyDetails.jobs) {
        update.companyDetails.jobs = data.companyDetails.jobs.map(
          (id) => new Types.ObjectId(String(id))
        );
      }
      if (data.companyDetails.recruiters) {
        update.companyDetails.recruiters = data.companyDetails.recruiters.map(
          (id) => new Types.ObjectId(String(id))
        );
      }
    }

    const updatedUser = await UserProfile.findOneAndUpdate(filter, update, {
      new: true, // return the updated document
      upsert: true, // create the document if it doesn't exist
      runValidators: true, // validate the update against the schema
    });

    if (!updatedUser) {
      console.error("User not found and could not be updated");
    }

    return updatedUser as IUserProfile;
  } catch (error: any) {
    console.error("Error during user profile insertion:", error);
  }
};
