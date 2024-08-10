import { Types } from "mongoose";
import { Jobs } from "../model";
import { ParamsForJobDataChart } from "@/domain/entities/Jobs";

export const getJobChartData = async (data: ParamsForJobDataChart) => {
  try {
    let { range, endDate, startDate } = data;
    let matchStage: any = {};

    if (range === 'custom' && startDate && endDate) {
      matchStage = { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } };
    } else {
      const today = new Date();
      switch (range) {
        case 'lastWeek':
          startDate = new Date(today.setDate(today.getDate() - 7));
          matchStage = { createdAt: { $gte: startDate } };
          break;
        case 'lastMonth':
          startDate = new Date(today.setMonth(today.getMonth(), 1));
          matchStage = { createdAt: { $gte: startDate } };
          break;
        case 'lastYear':
          startDate = new Date(today.setFullYear(today.getFullYear(), 0, 1));
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
            { case: { $eq: [range, 'custom'] }, then: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } } }
          ],
          default: { $dayOfMonth: "$createdAt" }
        }
      },
      userCount: { $sum: 1 }
    };

    const sortStage = { "_id": 1 };

    const results = await Jobs.aggregate([
      { $match: matchStage },
      { $group: groupStage },
      { $sort: sortStage as any }
    ]);

    // Function to format date as dd/mm/yyyy
    const formatDate = (date: string) => {
      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    };

    // Transform the result to human-readable format
    return results.map(result => {
      let dateLabel: string;
      if (range === 'lastWeek') {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dateLabel = daysOfWeek[result._id - 1];  // MongoDB's $dayOfWeek returns 1 for Sunday, 7 for Saturday
      } else if (range === 'lastYear') {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        dateLabel = months[result._id - 1];  // MongoDB's $month returns 1 for January, 12 for December
      } else if (range === 'custom') {
        dateLabel = formatDate(result._id);  // Format the custom date
      } else {
        dateLabel = result._id.toString();  // For days in the month
      }
      console.log({
        date: dateLabel,
        userCount: result.userCount
      });
      return {
        date: dateLabel,
        userCount: result.userCount
      };
    });
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
