import React, { useState } from 'react';
import './TabsPanel.scss';

export interface TabListItem {
    _id: number;
    label: string;
    value: string;
}

export interface TabsPanelProps {
    tabsList: TabListItem[];
    activeTabIndex: number;
    activeTabConent: React.ReactNode;
    handleOnTabChange: (value: TabListItem) => void;
}

const TabsPanel: React.FC<TabsPanelProps> = (props) => {
    const { tabsList, activeTabIndex, activeTabConent, handleOnTabChange } = props;

    return (
        <div className='tabs__container'>
            <div className='tabs__name-block'>
                {Array.isArray(tabsList) &&
                    tabsList?.map((tab) => {
                        return (
                            <button
                                key={`tab-${tab?._id}`}
                                className={activeTabIndex === tab?._id ? 'tabs__name-item active-tabs' : 'tabs__name-item'}
                                onClick={() => handleOnTabChange(tab)}
                            >
                                {tab?.label}
                            </button>
                        );
                    })}
            </div>

            <div className='tabs__content-block'>{activeTabConent}</div>
        </div>
    );
};

export default TabsPanel;
