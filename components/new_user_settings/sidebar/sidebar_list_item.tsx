// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React, {FC, useState} from 'react';
import {FormattedMessage} from 'react-intl';
import './sidebar_list_item.scss';

interface Props {
    svg: string;
    title: string;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarListItem: FC<Props> = ({
    svg,
    title,
    activeTab,
    setActiveTab,
}: Props) => {
    const handleSetActiveTab = (title: string) => {
        setActiveTab(title);
    };

    return (
        <div
            onClick={() => handleSetActiveTab(title)}
            className={
                activeTab === title ?
                    'sidebar__list__item--active' :
                    'sidebar__list__item'
            }
        >
            <i className={`${svg} sidebar__list__item__svg`}/>
            <div className='inline-block sidebar__list__item__title'>
                <FormattedMessage
                    id={`user.settings.sidebar.${title}`}
                    defaultMessage={title}
                />
            </div>
        </div>
    );
};

export default SidebarListItem;
