import React from 'react';
import {ProgressBar, UsagePerUser} from '../components/ProgressBar';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';




describe('ProgressBar component ', () => {

    const usagePerUserData: UsagePerUser[] = [];
    usagePerUserData.push({userName: "Alexey", usage: 5});
    usagePerUserData.push({userName: "John", usage: 10});
    usagePerUserData.push({userName: "Bill", usage: 20});
    usagePerUserData.push({userName: "Anton", usage: 15});

    const wrapper = shallow(
        <ProgressBar maximumAllowedCapacityAmount={50}
                     daysLeft={5}
                     isMultipleDevicesExists={true}
                     usagePerUserData={usagePerUserData}
                     currentUserIndex={0}
                     usageLimitWarningLevel={40} />)

    test('renders warning icon', () => {
        expect(wrapper.find(`[testID='warning_image_testID']`)).toBeDefined();
    })
})