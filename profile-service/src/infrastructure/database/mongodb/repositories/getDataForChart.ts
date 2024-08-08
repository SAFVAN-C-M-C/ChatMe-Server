import { UserProfile } from "../model";
import { IUserProfile, ParamsForUserDataChart } from "@/domain/entities";

export const getDataForChart = async (data: ParamsForUserDataChart) => {
  try {
    let {range,endDate,startDate}=data
    let matchStage: any = {};

    if (range === 'custom' && startDate && endDate) {
      matchStage = { createdAt: { $gte: startDate, $lte: endDate } };
    } else {
      const today = new Date();
      switch (range) {
        case 'lastWeek':
          startDate = new Date(today.setDate(today.getDate() - 7));
          matchStage = { createdAt: { $gte: startDate } };
          break;
        case 'lastMonth':
          startDate = new Date(today.setMonth(today.getMonth()));
          startDate=new Date(startDate.setDate(1))
          console.log(startDate);
          
          matchStage = { createdAt: { $gte: startDate } };
          break;
        case 'lastYear':
          startDate = new Date(today.setFullYear(today.getFullYear()));
          startDate = new Date(today.setMonth(1));
          startDate = new Date(today.setDate(1));
          matchStage = { createdAt: { $gte: startDate } };
          break;
        default:
          throw new Error('Invalid time range');
      }
    }
  
    const groupStage = {
      _id: {
        $switch: {
          branches: [
            { case: { $eq: [range, 'lastWeek'] }, then: { $dayOfWeek: "$createdAt" } },
            { case: { $eq: [range, 'lastMonth'] }, then: { $dayOfMonth: "$createdAt" } },
            { case: { $eq: [range, 'lastYear'] }, then: { $month: "$createdAt" } },
          ],
          default: { $dayOfMonth: "$createdAt" }
        }
      },
      userCount: { $sum: 1 }
    };
  
    const sortStage = { _id: 1 };
  
    const results = await UserProfile.aggregate([
      { $match: matchStage },
      { $group: groupStage },
      { $sort: sortStage as any },
    ]);
  
  // Transform the result to human-readable format
  return results.map(result => {
    let dateLabel: string;
    if (range === 'lastWeek') {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      dateLabel = daysOfWeek[result._id - 1];  // MongoDB's $dayOfWeek returns 1 for Sunday, 7 for Saturday
    } else if (range === 'lastYear') {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      dateLabel = months[result._id - 1];  // MongoDB's $month returns 1 for January, 12 for December
    } else {
      dateLabel = result._id.toString();  // For days in the month
    }
    return {
      date: dateLabel,
      userCount: result.userCount
    };
  });
  } catch (error: any) {
    console.error("Error in getDataForChart:", error);
    throw new Error(error.message);
  }
};
