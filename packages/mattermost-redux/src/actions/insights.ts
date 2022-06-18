// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {InsightTypes} from 'mattermost-redux/action_types';
import {GetStateFunc, DispatchFunc, ActionFunc} from 'mattermost-redux/types/actions';
import {Client4} from 'mattermost-redux/client';
import {TimeFrame, TopChannelActionResult, TopThreadActionResult} from '@mattermost/types/insights';

export function getTopReactionsForTeam(teamId: string, page: number, perPage: number, timeFrame: TimeFrame): ActionFunc {
    return async (dispatch: DispatchFunc) => {
        const data = await Client4.getTopReactionsForTeam(teamId, page, perPage, timeFrame);

        dispatch({
            type: InsightTypes.RECEIVED_TOP_REACTIONS,
            data: {data, timeFrame},
            id: teamId,
        });

        return {data};
    };
}

export function getMyTopReactions(teamId: string, page: number, perPage: number, timeFrame: TimeFrame): ActionFunc {
    return async (dispatch: DispatchFunc) => {
        const data = await Client4.getMyTopReactions(teamId, page, perPage, timeFrame);

        dispatch({
            type: InsightTypes.RECEIVED_MY_TOP_REACTIONS,
            data: {data, timeFrame},
            id: teamId,
        });

        return {data};
    };
}

export function getTopChannelsForTeam(teamId: string, page: number, perPage: number, timeFrame: TimeFrame): (dispatch: DispatchFunc, getState: GetStateFunc) => Promise<TopChannelActionResult> | TopChannelActionResult {
    return async () => {
        const data = await Client4.getTopChannelsForTeam(teamId, page, perPage, timeFrame);

        return {data};
    };
}

export function getMyTopChannels(teamId: string, page: number, perPage: number, timeFrame: TimeFrame): (dispatch: DispatchFunc, getState: GetStateFunc) => Promise<TopChannelActionResult> | TopChannelActionResult {
    return async () => {
        const data = await Client4.getMyTopChannels(teamId, page, perPage, timeFrame);

        return {data};
    };
}

export function getTopThreadsForTeam(teamId: string, page: number, perPage: number, timeFrame: TimeFrame): (dispatch: DispatchFunc, getState: GetStateFunc) => Promise<TopThreadActionResult> | TopThreadActionResult {
    return async (dispatch: DispatchFunc) => {
        const data = await Client4.getTopThreadsForTeam(teamId, page, perPage, timeFrame);

        dispatch({
            type: InsightTypes.RECEIVED_TOP_THREADS,
            data,
        });

        return {data};
    };
}

export function getMyTopThreads(teamId: string, page: number, perPage: number, timeFrame: TimeFrame): (dispatch: DispatchFunc, getState: GetStateFunc) => Promise<TopThreadActionResult> | TopThreadActionResult {
    return async (dispatch: DispatchFunc) => {
        const data = await Client4.getMyTopThreads(teamId, page, perPage, timeFrame);

        dispatch({
            type: InsightTypes.RECEIVED_MY_TOP_THREADS,
            data,
        });

        return {data};
    };
}
