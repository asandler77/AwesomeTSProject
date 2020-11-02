import React from 'react';
import {shallow} from 'enzyme';
import {BottomPart} from "../components/BottomPart";
import {createUsagePerUserData} from "../components/progressBar.mock";

describe('BottomPart ', () => {
    const usagePerUserData = createUsagePerUserData();

    const wrapper = shallow(
        <BottomPart
        isMultipleDevicesExists={true}
        daysLeft={10}
        maximumAllowedCapacityAmount={50}
        usagePerUserData={usagePerUserData}
/>)

    test('rendered successfully for multiple device', () => {
        expect(wrapper.find(`[testID='singleDeviceMaximumCapacityAllowed']`)).toHaveLength(0);
        expect(wrapper.find(`[testID='calculateDataUsedByAllDevices']`).childAt(1).text()).toEqual('50');
        expect(wrapper.find(`[testID='daysLeft']`).childAt(1).text()).toEqual('10');
    });

    test('rendered successfully for single device', () => {
        wrapper.setProps({isMultipleDevicesExists: false})
        expect(wrapper.find(`[testID='singleDeviceMaximumCapacityAllowed']`).childAt(0).text()).toEqual('50');
        expect(wrapper.find(`[testID='calculateDataUsedByAllDevices']`)).toHaveLength(0);
        expect(wrapper.find(`[testID='daysLeft']`).childAt(1).text()).toEqual('10');
    });
})
