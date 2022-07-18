// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React, {useState} from 'react';

import {FormattedMessage} from 'react-intl';
import {useDispatch} from 'react-redux';

import {MagnifyIcon} from '@mattermost/compass-icons/components';

import GenericModal from '../generic_modal/generic_modal';
import SidebarList from '../sidebar/sidebar_list';
import {ModalIdentifiers} from 'utils/constants';
import UserSettingsNotifications from '../notifications/user_settings_notifications';
import UserSettingsMessagesAndMedia from '../messages&media/user_settings_messages&media';
import LanguageAndRegion from '../language&region/language&region';
import UserSettingsSidebar from '../user_settings_sidebar/user_settings_sidebar';
import UserSettingsAdvanced from '../user_settings_advanced/user_settings_advanced';
import {UnsavedChangesModal} from '../unsaved_changes_modal';
import {closeModal} from 'actions/views/modals';
import './user_settings_modal.scss';

export const sideBarListData = [
    {svg: 'icon-bell-outline', title: 'Notifications'},
    {svg: 'icon-palette-outline', title: 'Themes'},
    {svg: 'icon-forum-outline', title: 'Messages & media'},
    {svg: 'icon-globe', title: 'Language & time'},
    {svg: 'icon-dock-left', title: 'Sidebar'},
    {svg: 'icon-tune', title: 'Advanced'},
];

export const UserSettingsModal = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState(sideBarListData[0].title);
    const [somethingChanged, setSomethingChanged] = useState(false);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleHide = () => {
        dispatch(closeModal(ModalIdentifiers.USER_SETTINGS));
        setIsModalOpen(false);
    };

    const MainSection = () => {
        if (activeTab === sideBarListData[0].title) {
            return (
                <UserSettingsNotifications
                    somethingChanged={somethingChanged}
                    setSomethingChanged={setSomethingChanged}
                />
            );
        } else if (activeTab === sideBarListData[2].title) {
            return (
                <UserSettingsMessagesAndMedia
                    somethingChanged={somethingChanged}
                    setSomethingChanged={setSomethingChanged}
                />
            );
        } else if (activeTab === sideBarListData[3].title) {
            return (
                <LanguageAndRegion
                    somethingChanged={somethingChanged}
                    setSomethingChanged={setSomethingChanged}
                />
            );
        } else if (activeTab === sideBarListData[4].title) {
            return (
                <UserSettingsSidebar
                    somethingChanged={somethingChanged}
                    setSomethingChanged={setSomethingChanged}
                />
            );
        } else if (activeTab === sideBarListData[5].title) {
            return (
                <UserSettingsAdvanced
                    somethingChanged={somethingChanged}
                    setSomethingChanged={setSomethingChanged}
                />
            );
        }
        return <div/>;
    };

    const content = (
        <>
            <div className='modal'>
                <button
                    aria-label='Close modal'
                    className='modal-overlay'
                    onClick={handleHide}
                />
                <div className='Modal-content overflow-y--scroll'>
                    <div className='pt-6 pl-8 position--fixed'>
                        <div className='font-22-weight-600 inline-block'>
                            <FormattedMessage
                                id='global_header.productSettings'
                                defaultMessage='Settings'
                            />
                        </div>
                        <div className='inline-block search-preferences'>
                            <span className='pl-3'>
                                <MagnifyIcon
                                    size={14.4}
                                    color={
                                        'rgba(var(--center-channel-text-rgb), 0.64)'
                                    }
                                />
                            </span>
                            <input placeholder='Search preferences'/>
                        </div>
                        <span onClick={handleHide}>x</span>
                        <div className='divider--light mt-6'/>
                    </div>
                    <div className='settings__modal--flex'>
                        <SidebarList
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        <MainSection/>
                    </div>
                    {somethingChanged && <UnsavedChangesModal/>}
                </div>
            </div>
        </>
    );

    return (
        <GenericModal
            isModalOpen={isModalOpen}
            content={content}
        />
    );
};
