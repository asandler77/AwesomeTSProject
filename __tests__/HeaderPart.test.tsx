import React from 'react';
import {ProgressBar, UsagePerUser} from '../components/ProgressBar';
import {shallow} from 'enzyme';
import {createUsagePerUserData} from "./utils.test";
import {ProgressBarPart} from "../components/ProgressBarPart";
import {HeaderPart} from "../components/HeaderPart";




describe('ProgressBar component ', () => {

    const usagePerUserData = createUsagePerUserData();

    beforeEach(() => {
    });

    const wrapper = shallow(
        <HeaderPart
            usagePerUserData={usagePerUserData}
            currentUserIndex={0}
            usageLimitWarningLevel={40}
        />)

    test('renders warning icon', () => {
        expect(wrapper.find(`[testID='warning_image_testID']`)).toHaveLength(1);
    })

    test('does not render warning icon', () => {
        wrapper.setProps({usageLimitWarningLevel: 50});
        expect(wrapper.find(`[testID='warning_image_testID']`)).toHaveLength(0);

    })
})
