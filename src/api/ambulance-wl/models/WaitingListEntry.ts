/* tslint:disable */
/* eslint-disable */
/**
 * Waiting List Api
 * Ambulance Waiting List management for Web-In-Cloud system
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xandelt1@stuba.sk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Condition } from './Condition';
import {
    ConditionFromJSON,
    ConditionFromJSONTyped,
    ConditionToJSON,
} from './Condition';

/**
 * 
 * @export
 * @interface WaitingListEntry
 */
export interface WaitingListEntry {
    /**
     * Unique id of the entry in this waiting list
     * @type {string}
     * @memberof WaitingListEntry
     */
    id: string;
    /**
     * Name of patient in waiting list
     * @type {string}
     * @memberof WaitingListEntry
     */
    name?: string;
    /**
     * Unique identifier of the patient known to Web-In-Cloud system
     * @type {string}
     * @memberof WaitingListEntry
     */
    patientId: string;
    /**
     * Timestamp since when the patient entered the waiting list
     * @type {Date}
     * @memberof WaitingListEntry
     */
    waitingSince: Date;
    /**
     * Estimated time of entering ambulance. Ignored on post.
     * @type {Date}
     * @memberof WaitingListEntry
     */
    estimatedStart?: Date;
    /**
     * Estimated duration of ambulance visit. If not provided then it will be computed based on condition and ambulance settings
     * @type {number}
     * @memberof WaitingListEntry
     */
    estimatedDurationMinutes: number;
    /**
     * 
     * @type {Condition}
     * @memberof WaitingListEntry
     */
    condition?: Condition;
}

/**
 * Check if a given object implements the WaitingListEntry interface.
 */
export function instanceOfWaitingListEntry(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "patientId" in value;
    isInstance = isInstance && "waitingSince" in value;
    isInstance = isInstance && "estimatedDurationMinutes" in value;

    return isInstance;
}

export function WaitingListEntryFromJSON(json: any): WaitingListEntry {
    return WaitingListEntryFromJSONTyped(json, false);
}

export function WaitingListEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaitingListEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'patientId': json['patientId'],
        'waitingSince': (new Date(json['waitingSince'])),
        'estimatedStart': !exists(json, 'estimatedStart') ? undefined : (new Date(json['estimatedStart'])),
        'estimatedDurationMinutes': json['estimatedDurationMinutes'],
        'condition': !exists(json, 'condition') ? undefined : ConditionFromJSON(json['condition']),
    };
}

export function WaitingListEntryToJSON(value?: WaitingListEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'patientId': value.patientId,
        'waitingSince': (value.waitingSince.toISOString()),
        'estimatedStart': value.estimatedStart === undefined ? undefined : (value.estimatedStart.toISOString()),
        'estimatedDurationMinutes': value.estimatedDurationMinutes,
        'condition': ConditionToJSON(value.condition),
    };
}

