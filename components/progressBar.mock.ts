import {UsagePerUser} from "./ProgressBar";

export const createUsagePerUserData = (): UsagePerUser[] => {
    let usagePerUserData: UsagePerUser[] = [];
    usagePerUserData.push({userName: "Alexey", usage: 5});
    usagePerUserData.push({userName: "John", usage: 10});
    usagePerUserData.push({userName: "Bill", usage: 20});
    usagePerUserData.push({userName: "Anton", usage: 15});
    return usagePerUserData;
}
