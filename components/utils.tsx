import {UsagePerUser} from "./ProgressBar";

export const calculateDataUsedByAllDevices = (usagePerUserData: UsagePerUser[]) => {
    let totalUsedAmount: number = 0;
    if (usagePerUserData !== null && usagePerUserData.length > 0) {
        for (const x of usagePerUserData) {
            totalUsedAmount += x.usage
        }
    }
    return totalUsedAmount;
}
