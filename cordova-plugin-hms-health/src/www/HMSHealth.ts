/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
import { asyncExec } from "./utils";

export function signIn(scopes: string[]): Promise<AuthHuaweiId> {
    return asyncExec("HMSHealth", "AuthController", ["signIn", scopes]);
}

export const AppInfo = {
    createApp: function createApp(AppInfo: CreateAppReq): Promise<void> {
        return asyncExec("HMSHealth", "AppInfo", ["createApp", AppInfo]);
    },
    getDetailsUrl: function getDetailsUrl(): Promise<string> {
        return asyncExec("HMSHealth", "AppInfo", ["getDetailsUrl"]);
    },
    getDomainName: function getDomainName(): Promise<string> {
        return asyncExec("HMSHealth", "AppInfo", ["getDomainName"]);
    },
    getPackageName: function getPackageName(): Promise<string> {
        return asyncExec("HMSHealth", "AppInfo", ["getPackageName"]);
    },
    getVersion: function getVersion(): Promise<string> {
        return asyncExec("HMSHealth", "AppInfo", ["getVersion"]);
    },
};

export const DeviceInfo = {
    createDeviceInfo: function createDeviceInfo(
        createDeviceInfoReq: createDeviceInfo
    ): Promise<DeviceInfo> {
        return asyncExec("HMSHealth", "DeviceInfo", [
            "createDeviceInfo",
            createDeviceInfoReq,
        ]);
    },
};

export const ActivityRecordController = {
    addActivityRecord: function addActivityRecord(
        addActivityRecordReq: AddActivityRecordReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "ActivityRecordController", [
            "addActivityRecord",
            addActivityRecordReq,
        ]);
    },
    deleteActivityRecord: function deleteActivityRecord(
        deleteActivityRecordReq: deleteActivityRecordReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "ActivityRecordController", [
            "deleteActivityRecord",
            deleteActivityRecordReq,
        ]);
    },
    beginActivityRecord: function beginActivityRecord(
        activityRecordData: BeginActivityRecordReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "ActivityRecordController", [
            "beginActivityRecord",
            activityRecordData,
        ]);
    },
    beginBackgroundActivityRecord: function beginBackgroundActivityRecord(
        activityRecordData: BeginActivityRecordReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "ActivityRecordController", [
            "beginBackgroundActivityRecord",
            activityRecordData,
        ]);
    },
    endActivityRecord: function endActivityRecord(
        activityRecordId: endActivityRecord
    ): Promise<ActivityRecord[]> {
        return asyncExec("HMSHealth", "ActivityRecordController", [
            "endActivityRecord",
            activityRecordId,
        ]);
    },
    endBackgroundActivityRecord: function endBackgroundActivityRecord(
        activityRecordId: endActivityRecord
    ): Promise<ActivityRecord[]> {
        return asyncExec("HMSHealth", "ActivityRecordController", [
            "endBackgroundActivityRecord",
            activityRecordId,
        ]);
    },
    getActivityRecord: function getActivityRecord(
        activityRecordJSON: GetActivityRecordReq
    ): Promise<ActivityRecord[]> {
        return asyncExec("HMSHealth", "ActivityRecordController", [
            "getActivityRecord",
            activityRecordJSON,
        ]);
    },
};

export const AutoRecorderController = {
    startRecord: function startRecord(
        startRecordReq: StartRecordReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "AutoRecorderController", [
            "startRecord",
            startRecordReq,
        ]);
    },
    stopRecord: function stopRecord(
        stopRecordReq: StopRecordReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "AutoRecorderController", [
            "stopRecord",
            stopRecordReq,
        ]);
    },
};

export const ConsentsController = {
    getPermissions: function getPermissions(
        getPermissionsReq: GetPermissionsReq
    ): Promise<ScopeLangItem> {
        return asyncExec("HMSHealth", "ConsentsController", [
            "getPermissions",
            getPermissionsReq,
        ]);
    },
    revokeAll: function revokeAll(appId: string): Promise<void> {
        return asyncExec("HMSHealth", "ConsentsController", [
            "revokeAll",
            appId,
        ]);
    },
    revoke: function revoke(revokeReq: RevokeReq): Promise<void> {
        return asyncExec("HMSHealth", "ConsentsController", [
            "revoke",
            revokeReq,
        ]);
    },
    cancelAuthorizationAll: function revokeAll(
        cancelAuthAllReq: CancelAuthAllReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "ConsentsController", [
            "cancelAuthorizationAll",
            cancelAuthAllReq,
        ]);
    },
    cancelAuthorization: function cancelAuthorization(
        cancelAuthReq: CancelAuthReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "ConsentsController", [
            "cancelAuthorization",
            cancelAuthReq,
        ]);
    },
};
export const DataController = {
    initDataController: function initDataController(
        jsonArray: DataOption[]
    ): Promise<void> {
        return asyncExec("HMSHealth", "DataController", [
            "initDataController",
            jsonArray,
        ]);
    },
    read: function read(readReq: ReadReq): Promise<ReadReply> {
        return asyncExec("HMSHealth", "DataController", ["read", readReq]);
    },
    insert: function insert(insertReq: InsertReq): Promise<void> {
        return asyncExec("HMSHealth", "DataController", ["insert", insertReq]);
    },
    update: function update(jsonObject: UpdateReq): Promise<void> {
        return asyncExec("HMSHealth", "DataController", ["update", jsonObject]);
    },
    deleteData: function deleteData(jsonObject: DeleteReq): Promise<void> {
        return asyncExec("HMSHealth", "DataController", [
            "deleteData",
            jsonObject,
        ]);
    },
    readTodaySummation: function readTodaySummation(
        dataTypeStr: string
    ): Promise<SampleSet> {
        return asyncExec("HMSHealth", "DataController", [
            "readTodaySummation",
            dataTypeStr,
        ]);
    },
    readDailySummation: function readDailySummation(
        jsonObject: ReadDailySummationReq
    ): Promise<SampleSet> {
        return asyncExec("HMSHealth", "DataController", [
            "readDailySummation",
            jsonObject,
        ]);
    },
    clearAll: function clearAll(): Promise<void> {
        return asyncExec("HMSHealth", "DataController", ["clearAll"]);
    },
    readLatestData: function readLatestData(
        jsonObject: DataOption[]
    ): Promise<Map<DataType, SamplePoint>> {
        return asyncExec("HMSHealth", "DataController", [
            "readLatestData",
            jsonObject,
        ]);
    },
};

export const SettingsController = {
    addDataType: function addDataType(
        jsonObject: AddDataTypeReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "SettingsController", [
            "addNewDataType",
            jsonObject,
        ]);
    },
    disableHiHealth: function disableHiHealth(): Promise<void> {
        return asyncExec("HMSHealth", "SettingsController", [
            "disableHiHealth",
        ]);
    },
    readDataType: function readDataType(dataTypeName: string): Promise<void> {
        return asyncExec("HMSHealth", "SettingsController", [
            "readDataType",
            dataTypeName,
        ]);
    },
    checkHealthAppAuthorization:
        function checkHealthAppAuthorization(): Promise<void> {
            return asyncExec("HMSHealth", "SettingsController", [
                "checkHealthAppAuthorization",
            ]);
        },
    getHealthAppAuthorization:
        function getHealthAppAuthorization(): Promise<void> {
            return asyncExec("HMSHealth", "SettingsController", [
                "getHealthAppAuthorization",
            ]);
        },
    requestAuthorizationIntent: function requestAuthorizationIntent(
        AuthReq: authReq
    ): Promise<string> {
        return asyncExec("HMSHealth", "SettingsController", [
            "requestAuthorizationIntent",
            AuthReq,
        ]);
    },
};

export const HealthRecordController = {
    addHealthRecord: function addHealthRecord(
        AddHRReq: addHRReq
    ): Promise<string> {
        return asyncExec("HMSHealth", "HealthRecordController", [
            "addHealthRecord",
            AddHRReq,
        ]);
    },
    deleteHealthRecord: function deleteHealthRecord(
        DeleteHRReq: deleteHRReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "HealthRecordController", [
            "deleteHealthRecord",
            DeleteHRReq,
        ]);
    },
    getHealthRecord: function getHealthRecord(
        HRReq: getHRReq
    ): Promise<HealthRecordReply> {
        return asyncExec("HMSHealth", "HealthRecordController", [
            "getHealthRecord",
            HRReq,
        ]);
    },
    updateHealthRecord: function updateHealthRecord(
        UpdateHRReq: updateHRReq
    ): Promise<void> {
        return asyncExec("HMSHealth", "HealthRecordController", [
            "updateHealthRecord",
            UpdateHRReq,
        ]);
    },
};

export function enableLogger(): Promise<void> {
    return asyncExec("HMSHealth", "HMSLogger", ["enableLogger"]);
}
export function disableLogger(): Promise<void> {
    return asyncExec("HMSHealth", "HMSLogger", ["disableLogger"]);
}

// EVENT REGISTERATION FUNCTION FOR SINGLE FILE
export function on(event: string, callback: (res: any) => void) {
    window.subscribeHMSEvent(event, callback);
}

export const HiHealthOptions = {
    ACCESS_READ: 0,
    ACCESS_WRITE: 1,
};

export const HuaweiHiHealth = {
    HEALTHKIT_HEARTHEALTH_READ: "https://www.huawei.com/healthkit/hearthealth.read",
    HEALTHKIT_HEARTHEALTH_WRITE: "https://www.huawei.com/healthkit/hearthealth.write",
    HEALTHKIT_HEIGHTWEIGHT_READ: "https://www.huawei.com/healthkit/heightweight.read",
    HEALTHKIT_HEIGHTWEIGHT_WRITE: "https://www.huawei.com/healthkit/heightweight.write",
    HEALTHKIT_HEIGHTWEIGHT_BOTH: "https://www.huawei.com/healthkit/heightweight.both",
    HEALTHKIT_STEP_READ: "https://www.huawei.com/healthkit/step.read",
    HEALTHKIT_STEP_WRITE: "https://www.huawei.com/healthkit/step.write",
    HEALTHKIT_STEP_BOTH: "https://www.huawei.com/healthkit/step.both",
    HEALTHKIT_LOCATION_READ: "https://www.huawei.com/healthkit/location.read",
    HEALTHKIT_LOCATION_WRITE: "https://www.huawei.com/healthkit/location.write",
    HEALTHKIT_LOCATION_BOTH: "https://www.huawei.com/healthkit/location.both",
    HEALTHKIT_HEARTRATE_READ: "https://www.huawei.com/healthkit/heartrate.read",
    HEALTHKIT_HEARTRATE_WRITE: "https://www.huawei.com/healthkit/heartrate.write",
    HEALTHKIT_HEARTRATE_BOTH: "https://www.huawei.com/healthkit/heartrate.both",
    HEALTHKIT_BLOODGLUCOSE_READ: "https://www.huawei.com/healthkit/bloodglucose.read",
    HEALTHKIT_BLOODGLUCOSE_WRITE: "https://www.huawei.com/healthkit/bloodglucose.write",
    HEALTHKIT_BLOODGLUCOSE_BOTH: "https://www.huawei.com/healthkit/bloodglucose.both",
    HEALTHKIT_DISTANCE_READ: "https://www.huawei.com/healthkit/distance.read",
    HEALTHKIT_DISTANCE_WRITE: "https://www.huawei.com/healthkit/distance.write",
    HEALTHKIT_DISTANCE_BOTH: "https://www.huawei.com/healthkit/distance.both",
    HEALTHKIT_SPEED_READ: "https://www.huawei.com/healthkit/speed.read",
    HEALTHKIT_SPEED_WRITE: "https://www.huawei.com/healthkit/speed.write",
    HEALTHKIT_SPEED_BOTH: "https://www.huawei.com/healthkit/speed.both",
    HEALTHKIT_CALORIES_READ: "https://www.huawei.com/healthkit/calories.read",
    HEALTHKIT_CALORIES_WRITE: "https://www.huawei.com/healthkit/calories.write",
    HEALTHKIT_CALORIES_BOTH: "https://www.huawei.com/healthkit/calories.both",
    HEALTHKIT_PULMONARY_READ: "https://www.huawei.com/healthkit/pulmonary.read",
    HEALTHKIT_PULMONARY_WRITE: "https://www.huawei.com/healthkit/pulmonary.write",
    HEALTHKIT_PULMONARY_BOTH: "https://www.huawei.com/healthkit/pulmonary.both",
    HEALTHKIT_STRENGTH_READ: "https://www.huawei.com/healthkit/strength.read",
    HEALTHKIT_STRENGTH_WRITE: "https://www.huawei.com/healthkit/strength.write",
    HEALTHKIT_STRENGTH_BOTH: "https://www.huawei.com/healthkit/strength.both",
    HEALTHKIT_ACTIVITY_READ: "https://www.huawei.com/healthkit/activity.read",
    HEALTHKIT_ACTIVITY_WRITE: "https://www.huawei.com/healthkit/activity.write",
    HEALTHKIT_ACTIVITY_BOTH: "https://www.huawei.com/healthkit/activity.both",
    HEALTHKIT_BODYFAT_READ: "https://www.huawei.com/healthkit/bodyfat.read",
    HEALTHKIT_BODYFAT_WRITE: "https://www.huawei.com/healthkit/bodyfat.write",
    HEALTHKIT_BODYFAT_BOTH: "https://www.huawei.com/healthkit/bodyfat.both",
    HEALTHKIT_SLEEP_READ: "https://www.huawei.com/healthkit/sleep.read",
    HEALTHKIT_SLEEP_WRITE: "https://www.huawei.com/healthkit/sleep.write",
    HEALTHKIT_SLEEP_BOTH: "https://www.huawei.com/healthkit/sleep.both",
    HEALTHKIT_NUTRITION_READ: "https://www.huawei.com/healthkit/nutrition.read",
    HEALTHKIT_NUTRITION_WRITE: "https://www.huawei.com/healthkit/nutrition.write",
    HEALTHKIT_NUTRITION_BOTH: "https://www.huawei.com/healthkit/nutrition.both",
    HEALTHKIT_BLOODPRESSURE_READ: "https://www.huawei.com/healthkit/bloodpressure.read",
    HEALTHKIT_BLOODPRESSURE_WRITE: "https://www.huawei.com/healthkit/bloodpressure.write",
    HEALTHKIT_BLOODPRESSURE_BOTH: "https://www.huawei.com/healthkit/bloodpressure.both",
    HEALTHKIT_OXYGENSTATURATION_READ: "https://www.huawei.com/healthkit/oxygensaturation.read",
    HEALTHKIT_OXYGENSTATURATION_WRITE: "https://www.huawei.com/healthkit/oxygensaturation.write",
    HEALTHKIT_OXYGENSTATURATION_BOTH: "https://www.huawei.com/healthkit/oxygensaturation.both",
    HEALTHKIT_BODYTEMPERATURE_READ: "https://www.huawei.com/healthkit/bodytemperature.read",
    HEALTHKIT_BODYTEMPERATURE_WRITE: "https://www.huawei.com/healthkit/bodytemperature.write",
    HEALTHKIT_BODYTEMPERATURE_BOTH: "https://www.huawei.com/healthkit/bodytemperature.both",
    HEALTHKIT_REPRODUCTIVE_READ: "https://www.huawei.com/healthkit/reproductive.read",
    HEALTHKIT_REPRODUCTIVE_WRITE: "https://www.huawei.com/healthkit/reproductive.write",
    HEALTHKIT_REPRODUCTIVE_BOTH: "https://www.huawei.com/healthkit/reproductive.both",
    HEALTHKIT_ACTIVITY_RECORD_READ: "https://www.huawei.com/healthkit/activityrecord.read",
    HEALTHKIT_ACTIVITY_RECORD_WRITE: "https://www.huawei.com/healthkit/activityrecord.write",
    HEALTHKIT_ACTIVITY_RECORD_BOTH: "https://www.huawei.com/healthkit/activityrecord.both",
    HEALTHKIT_STRESS_READ: "https://www.huawei.com/healthkit/stress.read",
    HEALTHKIT_STRESS_WRITE: "https://www.huawei.com/healthkit/stress.write",
    HEALTHKIT_STRESS_BOTH: "https://www.huawei.com/healthkit/stress.both",
    HEALTHKIT_SCOPE_PREFIX: "https://www.huawei.com/healthkit",
    HEALTHKIT_HISTORYDATA_OPEN_WEEK: "https://www.huawei.com/healthkit/historydata.open.week",
    HEALTHKIT_HISTORYDATA_OPEN_MONTH: "https://www.huawei.com/healthkit/historydata.open.month",
    HEALTHKIT_HISTORYDATA_OPEN_YEAR: "https://www.huawei.com/healthkit/historydata.open.year",
    ALL_SCOPES: [
        "https://www.huawei.com/healthkit/heightweight.both",
        "https://www.huawei.com/healthkit/step.both",
        "https://www.huawei.com/healthkit/location.both",
        "https://www.huawei.com/healthkit/heartrate.both",
        "https://www.huawei.com/healthkit/bloodglucose.both",
        "https://www.huawei.com/healthkit/distance.both",
        "https://www.huawei.com/healthkit/speed.both",
        "https://www.huawei.com/healthkit/calories.both",
        "https://www.huawei.com/healthkit/pulmonary.both",
        "https://www.huawei.com/healthkit/strength.both",
        "https://www.huawei.com/healthkit/activity.both",
        "https://www.huawei.com/healthkit/bodyfat.both",
        "https://www.huawei.com/healthkit/sleep.both",
        "https://www.huawei.com/healthkit/nutrition.both",
        "https://www.huawei.com/healthkit/bloodpressure.both",
        "https://www.huawei.com/healthkit/oxygensaturation.both",
        "https://www.huawei.com/healthkit/bodytemperature.both",
        "https://www.huawei.com/healthkit/reproductive.both",
        "https://www.huawei.com/healthkit/activityrecord.read",
        "https://www.huawei.com/healthkit/activityrecord.write",
        "https://www.huawei.com/healthkit/activityrecord.both",
        "https://www.huawei.com/healthkit/stress.read",
        "https://www.huawei.com/healthkit/stress.write",
        "https://www.huawei.com/healthkit/stress.both",
    ],
    MAX_SCOPES: [
        "https://www.huawei.com/healthkit/heightweight.read",
        "https://www.huawei.com/healthkit/heightweight.write",
        "https://www.huawei.com/healthkit/heightweight.both",
        "https://www.huawei.com/healthkit/step.read",
        "https://www.huawei.com/healthkit/step.write",
        "https://www.huawei.com/healthkit/step.both",
        "https://www.huawei.com/healthkit/location.read",
        "https://www.huawei.com/healthkit/location.write",
        "https://www.huawei.com/healthkit/location.both",
        "https://www.huawei.com/healthkit/heartrate.read",
        "https://www.huawei.com/healthkit/heartrate.write",
        "https://www.huawei.com/healthkit/heartrate.both",
        "https://www.huawei.com/healthkit/bloodglucose.read",
        "https://www.huawei.com/healthkit/bloodglucose.write",
        "https://www.huawei.com/healthkit/bloodglucose.both",
        "https://www.huawei.com/healthkit/distance.read",
        "https://www.huawei.com/healthkit/distance.write",
        "https://www.huawei.com/healthkit/distance.both",
        "https://www.huawei.com/healthkit/speed.read",
        "https://www.huawei.com/healthkit/speed.write",
        "https://www.huawei.com/healthkit/speed.both",
        "https://www.huawei.com/healthkit/calories.read",
        "https://www.huawei.com/healthkit/calories.write",
        "https://www.huawei.com/healthkit/calories.both",
        "https://www.huawei.com/healthkit/pulmonary.read",
        "https://www.huawei.com/healthkit/pulmonary.write",
        "https://www.huawei.com/healthkit/pulmonary.both",
        "https://www.huawei.com/healthkit/strength.read",
        "https://www.huawei.com/healthkit/strength.write",
        "https://www.huawei.com/healthkit/strength.both",
        "https://www.huawei.com/healthkit/activity.read",
        "https://www.huawei.com/healthkit/activity.write",
        "https://www.huawei.com/healthkit/activity.both",
        "https://www.huawei.com/healthkit/bodyfat.read",
        "https://www.huawei.com/healthkit/bodyfat.write",
        "https://www.huawei.com/healthkit/bodyfat.both",
        "https://www.huawei.com/healthkit/sleep.read",
        "https://www.huawei.com/healthkit/sleep.write",
        "https://www.huawei.com/healthkit/sleep.both",
        "https://www.huawei.com/healthkit/nutrition.read",
        "https://www.huawei.com/healthkit/nutrition.write",
        "https://www.huawei.com/healthkit/nutrition.both",
        "https://www.huawei.com/healthkit/bloodpressure.read",
        "https://www.huawei.com/healthkit/bloodpressure.write",
        "https://www.huawei.com/healthkit/bloodpressure.both",
        "https://www.huawei.com/healthkit/oxygensaturation.read",
        "https://www.huawei.com/healthkit/oxygensaturation.write",
        "https://www.huawei.com/healthkit/oxygensaturation.both",
        "https://www.huawei.com/healthkit/bodytemperature.read",
        "https://www.huawei.com/healthkit/bodytemperature.write",
        "https://www.huawei.com/healthkit/bodytemperature.both",
        "https://www.huawei.com/healthkit/reproductive.read",
        "https://www.huawei.com/healthkit/reproductive.write",
        "https://www.huawei.com/healthkit/reproductive.both",
        "https://www.huawei.com/healthkit/activityrecord.read",
        "https://www.huawei.com/healthkit/activityrecord.write",
        "https://www.huawei.com/healthkit/activityrecord.both",
        "https://www.huawei.com/healthkit/stress.read",
        "https://www.huawei.com/healthkit/stress.write",
    ],
};

export const HealthDataTypes = {
    DT_INSTANTANEOUS_BLOOD_PRESSURE: "DT_INSTANTANEOUS_BLOOD_PRESSURE",
    DT_INSTANTANEOUS_BLOOD_GLUCOSE: "DT_INSTANTANEOUS_BLOOD_GLUCOSE",
    DT_INSTANTANEOUS_SPO2: "DT_INSTANTANEOUS_SPO2",
    DT_INSTANTANEOUS_BODY_TEMPERATURE: "DT_INSTANTANEOUS_BODY_TEMPERATURE",
    DT_INSTANTANEOUS_SKIN_TEMPERATURE: "DT_INSTANTANEOUS_SKIN_TEMPERATURE",
    DT_INSTANTANEOUS_BODY_TEMPERATURE_REST: "DT_INSTANTANEOUS_BODY_TEMPERATURE_REST",
    DT_INSTANTANEOUS_CERVICAL_MUCUS: "DT_INSTANTANEOUS_CERVICAL_MUCUS",
    DT_INSTANTANEOUS_CERVICAL_STATUS: "DT_INSTANTANEOUS_CERVICAL_STATUS",
    DT_CONTINUOUS_MENSTRUAL_FLOW: "DT_CONTINUOUS_MENSTRUAL_FLOW",
    DT_INSTANTANEOUS_OVULATION_DETECTION: "DT_INSTANTANEOUS_OVULATION_DETECTION",
    DT_INSTANTANEOUS_VAGINAL_SPECKLE: "DT_INSTANTANEOUS_VAGINAL_SPECKLE",
    DT_INSTANTANEOUS_URIC_ACID: "DT_INSTANTANEOUS_URIC_ACID",
    DT_INSTANTANEOUS_URINE_ROUTINE_NITRITE: "DT_INSTANTANEOUS_URINE_ROUTINE_NITRITE",
    DT_INSTANTANEOUS_URINE_ROUTINE_UROBILINOGEN: "DT_INSTANTANEOUS_URINE_ROUTINE_UROBILINOGEN",
    DT_INSTANTANEOUS_URINE_ROUTINE_BILIRUBIN: "DT_INSTANTANEOUS_URINE_ROUTINE_BILIRUBIN",
    DT_INSTANTANEOUS_URINE_ROUTINE_GLUCOSE: "DT_INSTANTANEOUS_URINE_ROUTINE_GLUCOSE",
    DT_HEALTH_RECORD_TACHYCARDIA: "DT_HEALTH_RECORD_TACHYCARDIA",
    DT_HEALTH_RECORD_BRADYCARDIA: "DT_HEALTH_RECORD_BRADYCARDIA",
    DT_HEALTH_RECORD_SLEEP: "DT_HEALTH_RECORD_SLEEP",
    DT_HEALTH_RECORD_MENSTRUAL_CYCLE: "DT_HEALTH_RECORD_MENSTRUAL_CYCLE",
    POLYMERIZE_CONTINUOUS_BODY_BLOOD_PRESSURE_STATISTICS: "POLYMERIZE_CONTINUOUS_BODY_BLOOD_PRESSURE_STATISTICS",
    POLYMERIZE_CONTINUOUS_BODY_BLOOD_GLUCOSE_STATISTICS: "POLYMERIZE_CONTINUOUS_BODY_BLOOD_GLUCOSE_STATISTICS",
    POLYMERIZE_CONTINUOUS_SPO2_STATISTICS: "POLYMERIZE_CONTINUOUS_SPO2_STATISTICS",
    POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_STATISTICS: "POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_STATISTICS",
    POLYMERIZE_CONTINUOUS_SKIN_TEMPERATURE_STATISTICS: "POLYMERIZE_CONTINUOUS_SKIN_TEMPERATURE_STATISTICS",
    POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_REST_STATISTICS: "POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_REST_STATISTICS",
    POLYMERIZE_INSTANTANEOUS_CERVICAL_MUCUS: "POLYMERIZE_INSTANTANEOUS_CERVICAL_MUCUS",
    POLYMERIZE_INSTANTANEOUS_CERVICAL_STATUS: "POLYMERIZE_INSTANTANEOUS_CERVICAL_STATUS",
    POLYMERIZE_CONTINUOUS_MENSTRUAL_FLOW: "POLYMERIZE_CONTINUOUS_MENSTRUAL_FLOW",
    POLYMERIZE_INSTANTANEOUS_OVULATION_DETECTION: "POLYMERIZE_INSTANTANEOUS_OVULATION_DETECTION",
    POLYMERIZE_INSTANTANEOUS_VAGINAL_SPECKLE: "POLYMERIZE_INSTANTANEOUS_VAGINAL_SPECKLE",
    DT_DYSMENORRHOEA: "DT_DYSMENORRHOEA",
    DT_PHYSICAL_SYMPTOMS: "DT_PHYSICAL_SYMPTOMS",
    DT_MOOD: "DT_MOOD",
    DT_SKIN_STATUS: "DT_SKIN_STATUS",
    DT_APPETITE: "DT_APPETITE",
    DT_SEXUAL_ACTIVITY: "DT_SEXUAL_ACTIVITY",
    DT_HEALTH_RECORD_VENTILATOR: "DT_HEALTH_RECORD_VENTILATOR",
    DT_SLEEP_RESPIRATORY_DETAIL: "DT_SLEEP_RESPIRATORY_DETAIL",
    DT_SLEEP_RESPIRATORY_EVENT: "DT_SLEEP_RESPIRATORY_EVENT",
    DT_CGM_BLOOD_GLUCOSE: "DT_CGM_BLOOD_GLUCOSE",
    POLYMERIZE_CGM_BLOOD_GLUCOSE_STATISTICS: "POLYMERIZE_CGM_BLOOD_GLUCOSE_STATISTICS",
};

export const DataType = {
    DT_UNUSED_DATA_TYPE: "DT_UNUSED_DATA_TYPE",
    DT_CONTINUOUS_STEPS_DELTA: "DT_CONTINUOUS_STEPS_DELTA",
    DT_CONTINUOUS_STEPS_TOTAL: "DT_CONTINUOUS_STEPS_TOTAL",
    POLYMERIZE_CONTINUOUS_SPO2_STATISTICS: "POLYMERIZE_CONTINUOUS_SPO2_STATISTICS",
    DT_INSTANTANEOUS_STEPS_RATE: "DT_INSTANTANEOUS_STEPS_RATE",
    DT_CONTINUOUS_STEPS_RATE_STATISTIC: "DT_CONTINUOUS_STEPS_RATE_STATISTIC",
    DT_CONTINUOUS_ACTIVITY_SEGMENT: "DT_CONTINUOUS_ACTIVITY_SEGMENT",
    DT_CONTINUOUS_CALORIES_CONSUMED: "DT_CONTINUOUS_CALORIES_CONSUMED",
    DT_CONTINUOUS_CALORIES_BURNT: "DT_CONTINUOUS_CALORIES_BURNT",
    DT_INSTANTANEOUS_CALORIES_BMR: "DT_INSTANTANEOUS_CALORIES_BMR",
    DT_INSTANTANEOUS_POWER_SAMPLE: "DT_INSTANTANEOUS_POWER_SAMPLE",
    DT_INSTANTANEOUS_ACTIVITY_SAMPLE: "DT_INSTANTANEOUS_ACTIVITY_SAMPLE",
    DT_INSTANTANEOUS_ACTIVITY_SAMPLES: "DT_INSTANTANEOUS_ACTIVITY_SAMPLES",
    DT_INSTANTANEOUS_HEART_RATE: "DT_INSTANTANEOUS_HEART_RATE",
    DT_INSTANTANEOUS_LOCATION_SAMPLE: "DT_INSTANTANEOUS_LOCATION_SAMPLE",
    DT_INSTANTANEOUS_LOCATION_TRACE: "DT_INSTANTANEOUS_LOCATION_TRACE",
    DT_CONTINUOUS_DISTANCE_DELTA: "DT_CONTINUOUS_DISTANCE_DELTA",
    DT_CONTINUOUS_DISTANCE_TOTAL: "DT_CONTINUOUS_DISTANCE_TOTAL",
    DT_CONTINUOUS_CALORIES_BURNT_TOTAL: "DT_CONTINUOUS_CALORIES_BURNT_TOTAL",
    DT_INSTANTANEOUS_SPEED: "DT_INSTANTANEOUS_SPEED",
    DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL: "DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL",
    DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION: "DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION",
    DT_CONTINUOUS_BIKING_PEDALING_TOTAL: "DT_CONTINUOUS_BIKING_PEDALING_TOTAL",
    DT_INSTANTANEOUS_BIKING_PEDALING_RATE: "DT_INSTANTANEOUS_BIKING_PEDALING_RATE",
    DT_INSTANTANEOUS_HEIGHT: "DT_INSTANTANEOUS_HEIGHT",
    DT_INSTANTANEOUS_BODY_WEIGHT: "DT_INSTANTANEOUS_BODY_WEIGHT",
    DT_INSTANTANEOUS_BODY_FAT_RATE: "DT_INSTANTANEOUS_BODY_FAT_RATE",
    DT_INSTANTANEOUS_NUTRITION_FACTS: "DT_INSTANTANEOUS_NUTRITION_FACTS",
    DT_INSTANTANEOUS_HYDRATE: "DT_INSTANTANEOUS_HYDRATE",
    DT_CONTINUOUS_HYDRATE_TOTAL: "DT_CONTINUOUS_HYDRATE_TOTAL",
    DT_CONTINUOUS_WORKOUT_DURATION: "DT_CONTINUOUS_WORKOUT_DURATION",
    DT_CONTINUOUS_EXERCISE_INTENSITY: "DT_CONTINUOUS_EXERCISE_INTENSITY",
    DT_STATISTICS_SLEEP: "DT_STATISTICS_SLEEP",
    DT_CONTINUOUS_SLEEP: "DT_CONTINUOUS_SLEEP",
    DT_INSTANTANEOUS_STRESS: "DT_INSTANTANEOUS_STRESS",
    DT_INSTANTANEOUS_STRESS_STATISTICS: "DT_INSTANTANEOUS_STRESS_STATISTICS",
    DT_CONTINUOUS_EXERCISE_INTENSITY_V2: "DT_CONTINUOUS_EXERCISE_INTENSITY_V2",
    DT_STATISTICS_EXERCISE_INTENSITY_V2: "DT_STATISTICS_EXERCISE_INTENSITY_V2",
    DT_INSTANTANEOUS_RESTING_HEART_RATE: "DT_INSTANTANEOUS_RESTING_HEART_RATE",
    DT_RESTING_HEART_RATE_STATISTICS: "DT_RESTING_HEART_RATE_STATISTICS",
    DT_CONTINUOUS_JUMP: "DT_CONTINUOUS_JUMP",
    DT_CONTINUOUS_JUMP_STATISTICS: "DT_CONTINUOUS_JUMP_STATISTICS",
    DT_INSTANTANEOUS_EXERCISE_HEART_RATE: "DT_INSTANTANEOUS_EXERCISE_HEART_RATE",
    DT_CONTINUOUS_EXERCISE_HEART_RATE_STATISTICS: "DT_CONTINUOUS_EXERCISE_HEART_RATE_STATISTICS",
    DT_INSTANTANEOUS_ALTITUDE: "DT_INSTANTANEOUS_ALTITUDE",
    DT_INSTANTANEOUS_SKIP_SPEED: "DT_INSTANTANEOUS_SKIP_SPEED",
    DT_CONTINUOUS_SKIP_SPEED_STATISTICS: "DT_CONTINUOUS_SKIP_SPEED_STATISTICS",
    DT_CONTINUOUS_ALTITUDE_STATISTICS: "DT_CONTINUOUS_ALTITUDE_STATISTICS",
    DT_CONTINUOUS_RUN_POSTURE: "DT_CONTINUOUS_RUN_POSTURE",
    DT_CONTINUOUS_RUN_POSTURE_STATISTICS: "DT_CONTINUOUS_RUN_POSTURE_STATISTICS",
    DT_ACTIVITY_FEATURE_JUMPING_ROPE: "DT_ACTIVITY_FEATURE_JUMPING_ROPE",
    DT_ACTIVITY_FEATURE_BASKETBALL: "DT_ACTIVITY_FEATURE_BASKETBALL",
    DT_RESISTANCE: "DT_RESISTANCE",
    DT_RESISTANCE_STATISTICS: "DT_RESISTANCE_STATISTICS",
    DT_ACTIVITY_FEATURE_ROWING: "DT_ACTIVITY_FEATURE_ROWING",
    DT_INSTANTANEOUS_STROKE_RATE: "DT_INSTANTANEOUS_STROKE_RATE",
    DT_INSTANTANEOUS_PEDALING_RATE: "DT_INSTANTANEOUS_PEDALING_RATE",
    DT_CONTINUOUS_STROKE_RATE_STATISTICS: "DT_CONTINUOUS_STROKE_RATE_STATISTICS",
    DT_CONTINUOUS_PEDALING_RATE_STATISTICS: "DT_CONTINUOUS_PEDALING_RATE_STATISTICS",
    DT_INSTANTANEOUS_SWIMMING_STROKE_RATE: "DT_INSTANTANEOUS_SWIMMING_STROKE_RATE",
    DT_CONTINUOUS_SWIMMING_STROKE_RATE_STATISTICS: "DT_CONTINUOUS_SWIMMING_STROKE_RATE_STATISTICS",
    DT_INSTANTANEOUS_SWIMMING_SWOLF: "DT_INSTANTANEOUS_SWIMMING_SWOLF",
    DT_CONTINUOUS_SWIMMING_SWOLF_STATISTICS: "DT_CONTINUOUS_SWIMMING_SWOLF_STATISTICS",
    DT_ACTIVITY_FEATURE_SWIMMING_OPEN_WATER: "DT_ACTIVITY_FEATURE_SWIMMING_OPEN_WATER",
    DT_ACTIVITY_FEATURE_SWIMMING_POOL: "DT_ACTIVITY_FEATURE_SWIMMING_POOL",
    DT_ACTIVITY_FEATURE_SKIING: "DT_ACTIVITY_FEATURE_SKIING",
    DT_ACTIVITY_FEATURE_BREATH_HOLDING_TRAIN: "DT_ACTIVITY_FEATURE_BREATH_HOLDING_TRAIN",
    DT_ACTIVITY_FEATURE_BREATH_HOLDING_TEST: "DT_ACTIVITY_FEATURE_BREATH_HOLDING_TEST",
    DT_VO2MAX: "DT_VO2MAX",
    DT_VO2MAX_STATISTICS: "DT_VO2MAX_STATISTICS",
    POLYMERIZE_CONTINUOUS_WORKOUT_DURATION: "POLYMERIZE_CONTINUOUS_WORKOUT_DURATION",
    POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS: "POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS",
    POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS: "POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS",
    POLYMERIZE_STEP_COUNT_DELTA: "POLYMERIZE_STEP_COUNT_DELTA",
    POLYMERIZE_DISTANCE_DELTA: "POLYMERIZE_DISTANCE_DELTA",
    POLYMERIZE_CALORIES_CONSUMED: "POLYMERIZE_CALORIES_CONSUMED",
    POLYMERIZE_CALORIES_EXPENDED: "POLYMERIZE_CALORIES_EXPENDED",
    POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS: "POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS",
    POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS: "POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS",
    POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE: "POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE",
    POLYMERIZE_CONTINUOUS_POWER_STATISTICS: "POLYMERIZE_CONTINUOUS_POWER_STATISTICS",
    POLYMERIZE_CONTINUOUS_SPEED_STATISTICS: "POLYMERIZE_CONTINUOUS_SPEED_STATISTICS",
    POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS: "POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS",
    POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS: "POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS",
    POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS: "POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS",
    POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS: "POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS",
    POLYMERIZE_HYDRATION: "POLYMERIZE_HYDRATION",
    POLYMERIZE_CONTINUOUS_BODY_BLOOD_PRESSURE_STATISTICS: "POLYMERIZE_CONTINUOUS_BODY_BLOOD_PRESSURE_STATISTICS",
};
export const HealthFields = {
    FIELD_SYSTOLIC_PRESSURE: "FIELD_SYSTOLIC_PRESSURE",
    FIELD_SYSTOLIC_PRESSURE_AVG: "FIELD_SYSTOLIC_PRESSURE_AVG",
    FIELD_SYSTOLIC_PRESSURE_MIN: "FIELD_SYSTOLIC_PRESSURE_MIN",
    FIELD_SYSTOLIC_PRESSURE_MAX: "FIELD_SYSTOLIC_PRESSURE_MAX",
    FIELD_SYSTOLIC_PRESSURE_LAST: "FIELD_SYSTOLIC_PRESSURE_LAST",
    FIELD_DIASTOLIC_PRESSURE: "FIELD_DIASTOLIC_PRESSURE",
    FIELD_DIASTOLIC_PRESSURE_AVG: "FIELD_DIASTOLIC_PRESSURE_AVG",
    FIELD_DIASTOLIC_PRESSURE_MIN: "FIELD_DIASTOLIC_PRESSURE_MIN",
    FIELD_DIASTOLIC_PRESSURE_MAX: "FIELD_DIASTOLIC_PRESSURE_MAX",
    FIELD_DIASTOLIC_PRESSURE_LAST: "FIELD_DIASTOLIC_PRESSURE_LAST",
    FIELD_SPHYGMUS: "FIELD_SPHYGMUS",
    FIELD_SPHYGMUS_AVG: "FIELD_SPHYGMUS_AVG",
    FIELD_SPHYGMUS_MIN: "FIELD_SPHYGMUS_MIN",
    FIELD_SPHYGMUS_MAX: "FIELD_SPHYGMUS_MAX",
    FIELD_SPHYGMUS_LAST: "FIELD_SPHYGMUS_LAST",
    FIELD_BODY_POSTURE: "FIELD_BODY_POSTURE",
    FIELD_MEASURE_BODY_PART_OF_BLOOD_PRESSURE: "FIELD_MEASURE_BODY_PART_OF_BLOOD_PRESSURE",
    FIELD_MEASUREMENT_ANOMALY_FLAG: "FIELD_MEASUREMENT_ANOMALY_FLAG",
    FIELD_MEASUREMENT_REMINDER: "FIELD_MEASUREMENT_REMINDER",
    FIELD_BEFORE_MEASURE_ACTIVITY: "FIELD_BEFORE_MEASURE_ACTIVITY",
    FIELD_LEVEL: "FIELD_LEVEL",
    FIELD_MEASURE_TIME: "FIELD_MEASURE_TIME",
    FIELD_CORRELATION_WITH_MEALTIME: "FIELD_CORRELATION_WITH_MEALTIME",
    FIELD_CORRELATION_WITH_SLEEP_STATE: "FIELD_CORRELATION_WITH_SLEEP_STATE",
    FIELD_SAMPLE_SOURCE: "FIELD_SAMPLE_SOURCE",
    FIELD_SATURATION: "FIELD_SATURATION",
    FIELD_SATURATION_AVG: "FIELD_SATURATION_AVG",
    FIELD_SATURATION_MIN: "FIELD_SATURATION_MIN",
    FIELD_SATURATION_MAX: "FIELD_SATURATION_MAX",
    FIELD_SATURATION_LAST: "FIELD_SATURATION_LAST",
    FIELD_OXYGEN_SUPPLY_FLOW_RATE: "FIELD_OXYGEN_SUPPLY_FLOW_RATE",
    FIELD_OXYGEN_SUPPLY_FLOW_RATE_AVG: "FIELD_OXYGEN_SUPPLY_FLOW_RATE_AVG",
    FIELD_OXYGEN_SUPPLY_FLOW_RATE_MIN: "FIELD_OXYGEN_SUPPLY_FLOW_RATE_MIN",
    FIELD_OXYGEN_SUPPLY_FLOW_RATE_MAX: "FIELD_OXYGEN_SUPPLY_FLOW_RATE_MAX",
    FIELD_OXYGEN_THERAPY: "FIELD_OXYGEN_THERAPY",
    FIELD_SPO2_MEASUREMENT_MECHANISM: "FIELD_SPO2_MEASUREMENT_MECHANISM",
    FIELD_SPO2_MEASUREMENT_APPROACH: "FIELD_SPO2_MEASUREMENT_APPROACH",
    FIELD_TEMPERATURE: "FIELD_TEMPERATURE",
    FIELD_MEASURE_BODY_PART_OF_TEMPERATURE: "FIELD_MEASURE_BODY_PART_OF_TEMPERATURE",
    FIELD_TEXTURE: "FIELD_TEXTURE",
    FIELD_AMOUNT: "FIELD_AMOUNT",
    FIELD_POSITION: "FIELD_POSITION",
    FIELD_DILATION_STATUS: "FIELD_DILATION_STATUS",
    FIELD_FIRMNESS_LEVEL: "FIELD_FIRMNESS_LEVEL",
    FIELD_VOLUME: "FIELD_VOLUME",
    FIELD_DETECTION_RESULT: "FIELD_DETECTION_RESULT",
    FIELD_URIC_ACID: "FIELD_URIC_ACID",
    FIELD_NITRITE: "FIELD_NITRITE",
    FIELD_UROBILINOGEN: "FIELD_UROBILINOGEN",
    FIELD_BILIRUBIN: "FIELD_BILIRUBIN",
    FIELD_GLUCOSE: "FIELD_GLUCOSE",
    FIELD_THRESHOLD: "FIELD_THRESHOLD",
    FIELD_AVG_HEART_RATE: "FIELD_AVG_HEART_RATE",
    FIELD_MAX_HEART_RATE: "FIELD_MAX_HEART_RATE",
    FIELD_MIN_HEART_RATE: "FIELD_MIN_HEART_RATE",
    FIELD_RECORD_DAY: "FIELD_RECORD_DAY",
    FIELD_STATUS: "FIELD_STATUS",
    FIELD_SUB_STATUS: "FIELD_SUB_STATUS",
    FIELD_REMARKS: "FIELD_REMARKS",
    FIELD_TIME_ZONE: "FIELD_TIME_ZONE",
    FIELD_START_FLAG: "FIELD_START_FLAG",
    FIELD_END_FLAG: "FIELD_END_FLAG",
    FIELD_DYSMENORRHOEA_LEVEL: "FIELD_DYSMENORRHOEA_LEVEL",
    FIELD_PHYSICAL_SYMPTOMS: "FIELD_PHYSICAL_SYMPTOMS",
    FIELD_MOOD: "FIELD_MOOD",
    FIELD_SKIN_STATUS: "FIELD_SKIN_STATUS",
    FIELD_APPETITE: "FIELD_APPETITE",
    FIELD_CONTRACEPTIVE_MEASURES: "FIELD_CONTRACEPTIVE_MEASURES",
    SYS_MODE: "SYS_MODE",
    SYS_SESSION_DATE: "SYS_SESSION_DATE",
    EVENT_AHI: "EVENT_AHI",
    SYS_DURATION: "SYS_DURATION",
    LUMIS_TIDVOL_MEDIAN: "LUMIS_TIDVOL_MEDIAN",
    LUMIS_TIDVOL: "LUMIS_TIDVOL",
    LUMIS_TIDVOL_MAX: "LUMIS_TIDVOL_MAX",
    CLINICAL_RESPRATE_MEDIAN: "CLINICAL_RESPRATE_MEDIAN",
    CLINICAL_RESP_RATE: "CLINICAL_RESP_RATE",
    CLINICAL_RESP_RATE_MAX: "CLINICAL_RESP_RATE_MAX",
    LUMIS_IERATIO_MEDIAN: "LUMIS_IERATIO_MEDIAN",
    LUMIS_IERATIO_QUANTILE: "LUMIS_IERATIO_QUANTILE",
    LUMIS_IERATIO_MAX: "LUMIS_IERATIO_MAX",
    MASK_OFF: "MASK_OFF",
    HYPOVENTILATION_INDEX: "HYPOVENTILATION_INDEX",
    OBSTRUCTIVE_APNEA_INDEX: "OBSTRUCTIVE_APNEA_INDEX",
    PRESSURE_BELOW: "PRESSURE_BELOW",
    HYPOVENTILATION_EVENT_TIMES: "HYPOVENTILATION_EVENT_TIMES",
    SNORING_EVENT_TIMES:"SNORING_EVENT_TIMES",
    CENTER_APNEA_EVENT_TIMES: "CENTER_APNEA_EVENT_TIMES",
    OBSTRUCTIVE_APNEA_EVENT_TIMES: "OBSTRUCTIVE_APNEA_EVENT_TIMES",
    AIR_FLOW_LIMIT_EVENT_TIMES: "AIR_FLOW_LIMIT_EVENT_TIMES",
    MASSIVE_LEAK_EVENT_TIMES: "MASSIVE_LEAK_EVENT_TIMES",
    UNKNOW_EVENT_TIMES: "UNKNOW_EVENT_TIMES",
    ALL_EVENT_TIMES: "ALL_EVENT_TIMES",
};

export const HiHealthActivities = {
    MIME_TYPE_PREFIX: "vnd.huawei.hihealth.activity/",
    EXTRA_ACTION_STATUS: "actionStatus",
    STATUS_ACTION_START: "StartedActionStatus",
    STATUS_ACTION_END: "EndedActionStatus",
    AEROBICS: "aerobics",
    ARCHERY: "archery",
    BADMINTON: "badminton",
    BASEBALL: "baseball",
    BASKETBALL: "basketball",
    BIATHLON: "biathlon",
    BOXING: "boxing",
    CALISTHENICS: "calisthenics",
    CIRCUIT_TRAINING: "circuit_training",
    CRICKET: "cricket",
    CROSSFIT: "crossfit",
    CURLING: "curling",
    CYCLING: "cycling",
    CYCLING_INDOOR: "cycling_indoor",
    DANCING: "dancing",
    DIVING: "diving",
    ELEVATOR: "elevator",
    ELLIPTICAL: "elliptical",
    ERGOMETER: "ergometer",
    ESCALATOR: "escalator",
    FENCING: "fencing",
    FOOTBALL_AMERICAN: "football.american",
    FOOTBALL_AUSTRALIAN: "football.australian",
    FOOTBALL_SOCCER: "football.soccer",
    FLYING_DISC: "flying_disc",
    GARDENING: "gardening",
    GOLF: "golf",
    GYMNASTICS: "gymnastics",
    HANDBALL: "handball",
    HIIT: "interval_training.high_intensity",
    HIKING: "hiking",
    HOCKEY: "hockey",
    HORSE_RIDING: "horse_riding",
    HOUSEWORK: "housework",
    ICE_SKATING: "ice_skating",
    IN_VEHICLE: "in_vehicle",
    INTERVAL_TRAINING: "interval_training",
    JUMPING_ROPE: "jumping_rope",
    KAYAKING: "kayaking",
    KETTLEBELL_TRAINING: "kettlebell_training",
    KICKBOXING: "kickboxing",
    KITESURFING: "kitesurfing",
    MARTIAL_ARTS: "martial_arts",
    MEDITATION: "meditation",
    MIXED_MARTIAL_ARTS: "martial_arts.mixed",
    ON_FOOT: "on_foot",
    OTHER: "other",
    P90X: "p90x",
    PARAGLIDING: "paragliding",
    PILATES: "pilates",
    POLO: "polo",
    RACQUETBALL: "racquetball",
    ROCK_CLIMBING: "rock_climbing",
    ROWING: "rowing",
    ROWING_MACHINE: "rowing.machine",
    RUGBY: "rugby",
    RUNNING: "running",
    RUNNING_MACHINE: "running.machine",
    SAILING: "sailing",
    SCUBA_DIVING: "scuba_diving",
    SCOOTER_RIDING: "scooter_riding",
    SKATEBOARDING: "skateboarding",
    SKATING: "skating",
    SKIING: "skiing",
    SLEDDING: "sledding",
    SLEEP: "sleep",
    SLEEP_LIGHT: "sleep.light",
    SLEEP_DEEP: "sleep.deep",
    SLEEP_REM: "sleep.rem",
    SLEEP_AWAKE: "sleep.awake",
    SNOWBOARDING: "snowboarding",
    SNOWMOBILE: "snowmobile",
    SNOWSHOEING: "snowshoeing",
    SOFTBALL: "softball",
    SQUASH: "squash",
    STAIR_CLIMBING: "stair_climbing",
    STAIR_CLIMBING_MACHINE: "stair_climbing.machine",
    STANDUP_PADDLEBOARDING: "standup_paddleboarding",
    STILL: "still",
    STRENGTH_TRAINING: "strength_training",
    SURFING: "surfing",
    SWIMMING: "swimming",
    SWIMMING_POOL: "swimming.pool",
    SWIMMING_OPEN_WATER: "swimming.open_water",
    TABLE_TENNIS: "table_tennis",
    TEAM_SPORTS: "team_sports",
    TENNIS: "tennis",
    TILTING: "tilting",
    UNKNOWN: "unknown",
    VOLLEYBALL: "volleyball",
    WAKEBOARDING: "wakeboarding",
    WALKING: "walking",
    WATER_POLO: "water_polo",
    WEIGHTLIFTING: "weightlifting",
    WHEELCHAIR: "wheelchair",
    WINDSURFING: "windsurfing",
    YOGA: "yoga",
    ZUMBA: "zumba",
    DARTS: "darts",
    BILLIARDS: "billiards",
    SHUTTLECOCK: "shuttlecock",
    BOWLING: "bowling",
    GROUP_CALISTHENICS: "group_calisthenics",
    TUG_OF_WAR: "tug_of_war",
    BEACH_SOCCER: "beach_soccer",
    BEACH_VOLLEYBALL: "beach_volleyball",
    GATEBALL: "gateball",
    SEPAKTAKRAW: "sepaktakraw",
    DODGE_BALL: "dodge_ball",
    TREADMILL: "treadmill",
    SPINNING: "spinning",
    STROLL_MACHINE: "stroll_machine",
    CROSS_FIT: "cross_fit",
    FUNCTIONAL_TRAINING: "functional_training",
    PHYSICAL_TRAINING: "physical_training",
    BELLY_DANCE: "belly_dance",
    JAZZ: "jazz",
    LATIN: "latin",
    BALLET: "ballet",
    CORE_TRAINING: "core_training",
    HORIZONTAL_BAR: "horizontal_bar",
    PARALLEL_BARS: "parallel_bars",
    HIP_HOP: "hip_hop",
    SQUARE_DANCE: "square_dance",
    HU_LA_HOOP: "hu_la_hoop",
    BMX: "bmx",
    ORIENTEERING: "orienteering",
    INDOOR_WALK: "indoor_walk",
    INDOOR_RUNNING: "indoor_running",
    MOUNTIN_CLIMBING: "mountin_climbing",
    MOUNTAIN_CLIMBING: "mountain_climbing",
    CROSS_COUNTRY_RACE: "cross_country_race",
    ROLLER_SKATING: "roller_skatting",
    ROLLER_SKAING: "roller_skating",
    HUNTING: "hunting",
    FLY_A_KITE: "fly_a_kite",
    SWING: "swing",
    OBSTACLE_RACE: "obstacle_race",
    BUNGEE_JUMPING: "bungee_jumping",
    PARKOUR: "parkour",
    PARACHUTE: "parachute",
    RACING_CAR: "racing_car",
    TRIATHLONS: "triathlons",
    ICE_HOCKEY: "ice_hockey",
    CROSSCOUNTRY_SKIING: "crosscountry_skiing",
    SLED: "sled",
    FISHING: "fishing",
    DRIFTING: "drifting",
    DRAGON_BOAT: "dragon_boat",
    MOTORBOAT: "motorboat",
    SUP: "sup",
    FREE_SPARRING: "free_sparring",
    KARATE: "karate",
    BODY_COMBAT: "body_combat",
    KENDO: "kendo",
    TAI_CHI: "tai_chi",
    FREE_DIVING: "freediving",
    APNEA_TRAINING: "apnea_training",
    APNEA_TEST: "apnea_test",
};

export const DataGenerateType = {
    DATA_TYPE_INIT: 1,
    DATA_TYPE_RAW: 0,
    DATA_TYPE_DERIVED: 1,
    DATA_TYPE_CLEAN: 2,
    DATA_TYPE_CONVERTED: 3,
    DATA_TYPE_MERGED: 4,
    DATA_TYPE_POLYMERIZED: 5,
    EXTRA_DATA_SOURCE: "vnd.huawei.hihealth.data_collector",
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_ESH2002: 1,
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_ESH2010: 2,
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_AAMI: 3,
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_A_A: 4,
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_A_B: 5,
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_B_A: 6,
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_B_B: 7,
    HEALTH_DATA_QUALITY_BLOOD_GLUCOSE_ISO151972003: 8,
    HEALTH_DATA_QUALITY_BLOOD_GLUCOSE_ISO151972013: 9,
};

export const TimeUnit = {
    HOURS: "HOURS",
    DAYS: "DAYS",
    MICROSECONDS: "MICROSECONDS",
    MILLISECONDS: "MILLISECONDS",
    MINUTES: "MINUTES",
    NANOSECONDS: "NANOSECONDS",
    SECONDS: "SECONDS",
};

export const Field = {
    FORMAT_INT32: 1,
    FORMAT_FLOAT: 2,
    FORMAT_STRING: 3,
    FORMAT_MAP: 4,
    FORMAT_LONG: 5,
    FORMAT_DOUBLE: 2,
    MEAL_UNKNOWN: 0,
    MEAL_BREAKFAST: 1,
    MEAL_LUNCH: 2,
    MEAL_DINNER: 3,
    MEAL_SNACK: 4,
    TYPE_OF_RESISTANCE_UNKNOWN: 0,
    TYPE_OF_RESISTANCE_BARBELL: 1,
    TYPE_OF_RESISTANCE_CABLE: 2,
    TYPE_OF_RESISTANCE_DUMBBELL: 3,
    TYPE_OF_RESISTANCE_KETTLEBELL: 4,
    TYPE_OF_RESISTANCE_MACHINE: 5,
    TYPE_OF_RESISTANCE_BODY: 6,
    NUTRIENTS_FACTS_CALORIES: "NUTRIENTS_FACTS_CALORIES",
    NUTRIENTS_FACTS_TOTAL_FAT: "NUTRIENTS_FACTS_TOTAL_FAT",
    NUTRIENTS_FACTS_SATURATED_FAT: "NUTRIENTS_FACTS_SATURATED_FAT",
    NUTRIENTS_FACTS_UNSATURATED_FAT: "NUTRIENTS_FACTS_UNSATURATED_FAT",
    NUTRIENTS_FACTS_POLYUNSATURATED_FAT: "NUTRIENTS_FACTS_POLYUNSATURATED_FAT",
    NUTRIENTS_FACTS_MONOUNSATURATED_FAT: "NUTRIENTS_FACTS_MONOUNSATURATED_FAT",
    NUTRIENTS_FACTS_TRANS_FAT: "NUTRIENTS_FACTS_TRANS_FAT",
    NUTRIENTS_FACTS_CHOLESTEROL: "NUTRIENTS_FACTS_CHOLESTEROL",
    NUTRIENTS_FACTS_SODIUM: "NUTRIENTS_FACTS_SODIUM",
    NUTRIENTS_FACTS_POTASSIUM: "NUTRIENTS_FACTS_POTASSIUM",
    NUTRIENTS_FACTS_TOTAL_CARBS: "NUTRIENTS_FACTS_TOTAL_CARBS",
    NUTRIENTS_FACTS_DIETARY_FIBER: "NUTRIENTS_FACTS_DIETARY_FIBER",
    NUTRIENTS_FACTS_SUGAR: "NUTRIENTS_FACTS_SUGAR",
    NUTRIENTS_FACTS_PROTEIN: "NUTRIENTS_FACTS_PROTEIN",
    NUTRIENTS_FACTS_VITAMIN_A: "NUTRIENTS_FACTS_VITAMIN_A",
    NUTRIENTS_FACTS_VITAMIN_C: "NUTRIENTS_FACTS_VITAMIN_C",
    NUTRIENTS_FACTS_CALCIUM: "NUTRIENTS_FACTS_CALCIUM",
    NUTRIENTS_FACTS_IRON: "NUTRIENTS_FACTS_IRON",
    FIELD_PRECISION: "FIELD_PRECISION",
    FIELD_ALTITUDE: "FIELD_ALTITUDE",
    FIELD_TYPE_OF_ACTIVITY: "FIELD_TYPE_OF_ACTIVITY",
    FIELD_POSSIBILITY_OF_ACTIVITY: "FIELD_POSSIBILITY_OF_ACTIVITY",
    FIELD_BPM: "FIELD_BPM",
    FIELD_POSSIBILITY: "FIELD_POSSIBILITY",
    FIELD_SPAN: "FIELD_SPAN",
    FIELD_DISTANCE: "FIELD_DISTANCE",
    FIELD_DISTANCE_DELTA: "FIELD_DISTANCE_DELTA",
    FIELD_HEIGHT: "FIELD_HEIGHT",
    FIELD_STEPS_DELTA: "FIELD_STEPS_DELTA",
    FIELD_STEPS: "FIELD_STEPS",
    FIELD_DURATION: "FIELD_DURATION",
    FIELD_STEP_LENGTH: "FIELD_STEP_LENGTH",
    FIELD_LATITUDE: "FIELD_LATITUDE",
    FIELD_LONGITUDE: "FIELD_LONGITUDE",
    FIELD_COORDINATE: "FIELD_COORDINATE",
    FIELD_BODY_WEIGHT: "FIELD_BODY_WEIGHT",
    FIELD_BMI: "FIELD_BMI",
    FIELD_BODY_FAT: "FIELD_BODY_FAT",
    FIELD_BODY_FAT_RATE: "FIELD_BODY_FAT_RATE",
    FIELD_MUSCLE_MASS: "FIELD_MUSCLE_MASS",
    FIELD_BASAL_METABOLISM: "FIELD_BASAL_METABOLISM",
    FIELD_MOISTURE: "FIELD_MOISTURE",
    FIELD_MOISTURE_RATE: "FIELD_MOISTURE_RATE",
    FIELD_VISCERAL_FAT_LEVEL: "FIELD_VISCERAL_FAT_LEVEL",
    FIELD_BONE_SALT: "FIELD_BONE_SALT",
    FIELD_PROTEIN_RATE: "FIELD_PROTEIN_RATE",
    FIELD_BODY_AGE: "FIELD_BODY_AGE",
    FIELD_BODY_SCORE: "FIELD_BODY_SCORE",
    FIELD_SKELETAL_MUSCLEL_MASS: "FIELD_SKELETAL_MUSCLEL_MASS",
    FIELD_IMPEDANCE: "FIELD_IMPEDANCE",
    FIELD_CIRCUMFERENCE: "FIELD_CIRCUMFERENCE",
    FIELD_SPEED: "FIELD_SPEED",
    FIELD_RPM: "FIELD_RPM",
    FIELD_STEP_RATE: "FIELD_STEP_RATE",
    FIELD_ROTATION: "FIELD_ROTATION",
    FIELD_CALORIES: "FIELD_CALORIES",
    FIELD_CALORIES_TOTAL: "FIELD_CALORIES_TOTAL",
    FIELD_POWER: "FIELD_POWER",
    FIELD_HYDRATE: "FIELD_HYDRATE",
    FIELD_HYDRATE_TOTAL: "FIELD_HYDRATE_TOTAL",
    FIELD_MEAL: "FIELD_MEAL",
    FIELD_FOOD: "FIELD_FOOD",
    FIELD_NUTRIENTS: "FIELD_NUTRIENTS",
    FIELD_NUTRIENTS_FACTS: "FIELD_NUTRIENTS_FACTS",
    FIELD_FRAGMENTS: "FIELD_FRAGMENTS",
    FIELD_AVG: "FIELD_AVG",
    FIELD_MAX: "FIELD_MAX",
    FIELD_LAST: "FIELD_LAST",
    FIELD_AVG_BODY_FAT_RATE: "FIELD_AVG_BODY_FAT_RATE",
    FIELD_MAX_BODY_FAT_RATE: "FIELD_MAX_BODY_FAT_RATE",
    FIELD_MIN_BODY_FAT_RATE: "FIELD_MIN_BODY_FAT_RATE",
    FIELD_AVG_SKELETAL_MUSCLEL_MASS: "FIELD_AVG_SKELETAL_MUSCLEL_MASS",
    FIELD_MAX_SKELETAL_MUSCLEL_MASS: "FIELD_MAX_SKELETAL_MUSCLEL_MASS",
    FIELD_MIN_SKELETAL_MUSCLEL_MASS: "FIELD_MIN_SKELETAL_MUSCLEL_MASS",
    FIELD_JUMP_HEIGHT: "FIELD_JUMP_HEIGHT",
    FIELD_PASSAGE_DURATION: "FIELD_PASSAGE_DURATION",
    FIELD_JUMP_TIMES: "FIELD_JUMP_TIMES",
    FIELD_MIN_JUMP_HEIGHT: "FIELD_MIN_JUMP_HEIGHT",
    FIELD_AVG_JUMP_HEIGHT: "FIELD_AVG_JUMP_HEIGHT",
    FIELD_MAX_JUMP_HEIGHT: "FIELD_MAX_JUMP_HEIGHT",
    FIELD_MIN_PASSAGE_DURATION: "FIELD_MIN_PASSAGE_DURATION",
    FIELD_AVG_PASSAGE_DURATION: "FIELD_AVG_PASSAGE_DURATION",
    FIELD_MAX_PASSAGE_DURATION: "FIELD_MAX_PASSAGE_DURATION",
    FIELD_MIN: "FIELD_MIN",
    FIELD_ASCENT_TOTAL: "FIELD_ASCENT_TOTAL",
    FIELD_DESCENT_TOTAL: "FIELD_DESCENT_TOTAL",
    FIELD_MIN_LATITUDE: "FIELD_MIN_LATITUDE",
    FIELD_MIN_LONGITUDE: "FIELD_MIN_LONGITUDE",
    FIELD_MAX_LATITUDE: "FIELD_MAX_LATITUDE",
    FIELD_MAX_LONGITUDE: "FIELD_MAX_LONGITUDE",
    FIELD_APPEARANCE: "FIELD_APPEARANCE",
    FIELD_INTENSITY: "FIELD_INTENSITY",
    EXERCISE_TYPE: "EXERCISE_TYPE",
    INTENSITY_MAP: "INTENSITY_MAP",
    FALL_ASLEEP_TIME: "FALL_ASLEEP_TIME",
    WAKE_UP_TIME: "WAKE_UP_TIME",
    SLEEP_SCORE: "SLEEP_SCORE",
    SLEEP_LATENCY: "SLEEP_LATENCY",
    GO_BED_TIME: "GO_BED_TIME",
    PREPARE_SLEEP_TIME: "PREPARE_SLEEP_TIME",
    OFF_BED_TIME: "OFF_BED_TIME",
    GO_BED_TIME_NEW: "GO_BED_TIME_NEW",
    SLEEP_EFFICIENCY: "SLEEP_EFFICIENCY",
    LIGHT_SLEEP_TIME: "LIGHT_SLEEP_TIME",
    DEEP_SLEEP_TIME: "DEEP_SLEEP_TIME",
    DREAM_TIME: "DREAM_TIME",
    AWAKE_TIME: "AWAKE_TIME",
    ALL_SLEEP_TIME: "ALL_SLEEP_TIME",
    WAKE_UP_CNT: "WAKE_UP_CNT",
    DEEP_SLEEP_PART: "DEEP_SLEEP_PART",
    SLEEP_STATE: "SLEEP_STATE",
    SCORE: "SCORE",
    GRADE: "GRADE",
    MEASURE_TYPE: "MEASURE_TYPE",
    STRESS_AVG: "STRESS_AVG",
    STRESS_MAX: "STRESS_MAX",
    STRESS_MIN: "STRESS_MIN",
    STRESS_LAST: "STRESS_LAST",
    MEASURE_COUNT: "MEASURE_COUNT",
    VDOT: "VDOT",
    TRAINING_INDEX: "TRAINING_INDEX",
    FATIGUE_INDEX: "FATIGUE_INDEX",
    PHYSICAL_FITNESS_INDEX: "PHYSICAL_FITNESS_INDEX",
    STATE_INDEX: "STATE_INDEX",
    ALTITUDE: "ALTITUDE",
    SKIP_SPEED: "SKIP_SPEED",
    AVG: "AVG",
    MAX: "MAX",
    MIN: "MIN",
    LAST: "LAST",
    SKIP_NUM: "SKIP_NUM",
    STUMBLING_ROPE: "STUMBLING_ROPE",
    MAX_SKIPPING_TIMES: "MAX_SKIPPING_TIMES",
    DOUBLE_SHAKE: "DOUBLE_SHAKE",
    TRIPLE_SHAKE: "TRIPLE_SHAKE",
    LAOVERALL_SCOREST: "OVERALL_SCORE",
    BURST_SCORE: "BURST_SCORE",
    LJUMP_SCOREAST: "JUMP_SCORE",
    RUN_SCORE: "RUN_SCORE",
    BREAKTHROUGH_SCORE: "BREAKTHROUGH_SCORE",
    SPORT_INTENSITY_SCORE: "SPORT_INTENSITY_SCORE",
    DIVING_TIME: "DIVING_TIME",
    DIVING_COUNT: "DIVING_COUNT",
    MAX_DEPTH: "MAX_DEPTH",
    AVG_DEPTH: "AVG_DEPTH",
    MAX_UNDERWATER_TIME: "MAX_UNDERWATER_TIME",
    NO_FLY_TIME: "NO_FLY_TIME",
    WATER_TYPE: "WATER_TYPE",
    SURFACE_TIME: "SURFACE_TIME",
    START_LAT: "START_LAT",
    START_LON: "START_LON",
    END_LAT: "END_LAT",
    END_LON: "END_LON",
    STARTBREATH_TIME_LAT: "BREATH_TIME",
    BREATH_HOLDING_TIME: "BREATH_HOLDING_TIME",
    BREATH_HOLDING_TRAIN_RHYTHM: "BREATH_HOLDING_TRAIN_RHYTHM",
    DIAPHRAGM_TIME: "DIAPHRAGM_TIME",
    ASCENT_RATE: "ASCENT_RATE",
    DESCENT_RATE: "DESCENT_RATE",
    GROUND_CONTACT_TIME: "GROUND_CONTACT_TIME",
    GROUND_IMPACT_ACCELERATION: "GROUND_IMPACT_ACCELERATION",
    EVERSION_EXCURSION: "EVERSION_EXCURSION",
    SWING_ANGLE: "SWING_ANGLE",
    HANG_TIME: "HANG_TIME",
    GROUND_HANG_TIME_RATE: "GROUND_HANG_TIME_RATE",
    FORE_FOOT_STRIKE_PATTERN: "FORE_FOOT_STRIKE_PATTERN",
    HIND_FOOT_STRIKE_PATTERN: "HIND_FOOT_STRIKE_PATTERN",
    WHOLE_FOOT_STRIKE_PATTERN: "WHOLE_FOOT_STRIKE_PATTERN",
    IMPACVERTICAL_OSCILLATIONT_PEAK: "VERTICAL_OSCILLATION",
    VERTICAL_RATIO: "VERTICAL_RATIO",
    IMPACT_PEAK: "IMPACT_PEAK",
    GC_TIME_BALANCE: "GC_TIME_BALANCE",
    IMPAAVG_VERTICAL_IMPACT_RATECT_PEAK: "AVG_VERTICAL_IMPACT_RATE",
    AVG_GROUND_CONTACT_TIME: "AVG_GROUND_CONTACT_TIME",
    IMPACTAVG_GROUND_IMPACT_ACCELERATION_PEAK: "AVG_GROUND_IMPACT_ACCELERATION",
    IMPAAVG_SWING_ANGLECT_PEAK: "AVG_SWING_ANGLE",
    AVG_EVERSION_EXCURSION: "AVG_EVERSION_EXCURSION",
    IMPACAVG_HANG_TIMET_PEAK: "AVG_HANG_TIME",
    AVG_IMPACT_PEAK: "AVG_IMPACT_PEAK",
    AVG_IAVG_GC_TIME_BALANCEMPACT_PEAK: "AVG_GC_TIME_BALANCE",
    AVG_IMAVG_VERTICAL_OSCILLATIONPACT_PEAK: "AVG_VERTICAL_OSCILLATION",
    AVG_IMPACT_PAVG_VERTICAL_RATIOEAK: "AVG_VERTICAL_RATIO",
    AVG_IMPACTAVG_GROUND_HANG_TIME_RATE_PEAK: "AVG_GROUND_HANG_TIME_RATE",
    RESISTANCE_LEVEL: "RESISTANCE_LEVEL",
    AVG_IMPMAX_RESACT_PEAK: "MAX_RES",
    MIN_RES: "MIN_RES",
    RESISTANCE_LEVEL_ONE_LOWER_LIMIT: "RESISTANCE_LEVEL_ONE_LOWER_LIMIT",
    RESISTANCE_LEVEL_TWO_LOWER_LIMIT: "RESISTANCE_LEVEL_TWO_LOWER_LIMIT",
    RESISTANCE_LEVEL_THREE_LOWER_LIMIT: "RESISTANCE_LEVEL_THREE_LOWER_LIMIT",
    RESISTANCE_LEVEL_FOUR_LOWER_LIMIT: "RESISTANCE_LEVEL_FOUR_LOWER_LIMIT",
    RESISTANCE_LEVEL_FIVE_LOWER_LIMIT: "RESISTANCE_LEVEL_FIVE_LOWER_LIMIT",
    RESISTANCE_LEVEL_FIVE_UPPER_LIMIT: "RESISTANCE_LEVEL_FIVE_UPPER_LIMIT",
    RESISTANCE_LEVEL_ONE_TIME: "RESISTANCE_LEVEL_ONE_TIME",
    RESISTANCE_LEVEL_TWO_TIMES: "RESISTANCE_LEVEL_TWO_TIME",
    RESISTANCE_LEVEL_THREE_TIME: "RESISTANCE_LEVEL_THREE_TIME",
    RESISTANCE_LEVEL_FOUR_TIME: "RESISTANCE_LEVEL_FOUR_TIME",
    RESISTANCE_LEVEL_FIVE_TIME: "RESISTANCE_LEVEL_FIVE_TIME",
    VO2MAXS: "VO2MAX",
    STROKES_NUM: "STROKES_NUM",
    SPM: "SPM",
    RPM: "RPM",
    SWOLF: "SWOLF",
    PULL_TIMES: "PULL_TIMES",
    SWIMMING_STROKE: "SWIMMING_STROKE",
    POOL_LENGTH: "POOL_LENGTH",
    TRIP_TIMES: "TRIP_TIMES",
    MAX_SLOPE_PERCENT: "MAX_SLOPE_PERCENT",
    SLEEP_TYPE: "SLEEP_TYPE",
    MAX_SLOPE_DEGREE: "MAX_SLOPE_DEGREE",
    SKIING_TOTAL_TIME: "SKIING_TOTAL_TIME",
    SKIING_TOTAL_DISTANCE: "SKIING_TOTAL_DISTANCE",
    GOLF_SWING_COUNT: "GOLF_SWING_COUNT",
    GOLF_SWING_SPEED: "GOLF_SWING_SPEED",
    GOLF_MAX_SWING_SPEED: "GOLF_MAX_SWING_SPEED",
    GOLF_SWING_TEMPO: "GOLF_SWING_TEMPO",
    GOLF_DOWN_SWING_TIME: "GOLF_DOWN_SWING_TIME",
    GOLF_BACK_SWING_TIME: "GOLF_BACK_SWING_TIME",
    SLEEP_RESPIRATORY_TYPE: "SLEEP_RESPIRATORY_TYPE",
    SLEEP_RESPIRATORY_VALUE: "SLEEP_RESPIRATORY_VALUE",
    EVENT_NAME: "EVENT_NAME",
};

export interface DataType {
    DT_UNUSED_DATA_TYPE: string;
    DT_CONTINUOUS_STEPS_DELTA: string;
    DT_CONTINUOUS_STEPS_TOTAL: string;
    DT_INSTANTANEOUS_STEPS_RATE: string;
    DT_CONTINUOUS_STEPS_RATE_STATISTIC: string;
    DT_CONTINUOUS_ACTIVITY_SEGMENT: string;
    DT_CONTINUOUS_ACTIVITY_FRAGMENT: string;
    DT_CONTINUOUS_CALORIES_CONSUMED: string;
    DT_CONTINUOUS_CALORIES_BURNT: string;
    DT_INSTANTANEOUS_CALORIES_BMR: string;
    DT_INSTANTANEOUS_POWER_SAMPLE: string;
    DT_INSTANTANEOUS_ACTIVITY_SAMPLE: string;
    DT_INSTANTANEOUS_ACTIVITY_SAMPLES: string;
    DT_INSTANTANEOUS_HEART_RATE: string;
    DT_INSTANTANEOUS_EXERCISE_HEART_RATE: string;
    DT_INSTANTANEOUS_LOCATION_SAMPLE: string;
    DT_INSTANTANEOUS_LOCATION_TRACE: string;
    DT_CONTINUOUS_EXERCISE_HEART_RATE_STATISTICS: string;
    DT_CONTINUOUS_DISTANCE_DELTA: string;
    DT_CONTINUOUS_DISTANCE_TOTAL: string;
    DT_CONTINUOUS_CALORIES_BURNT_TOTAL: string;
    DT_INSTANTANEOUS_SPEED: string;
    DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL: string;
    DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION: string;
    DT_INSTANTANEOUS_WHEEL_ROTATION: string;
    DT_CONTINUOUS_BIKING_PEDALING_TOTAL: string;
    DT_INSTANTANEOUS_BIKING_PEDALING_RATE: string;
    DT_INSTANTANEOUS_HEIGHT: string;
    DT_INSTANTANEOUS_BODY_WEIGHT: string;
    DT_INSTANTANEOUS_BODY_FAT_RATE: string;
    DT_INSTANTANEOUS_NUTRITION_FACTS: string;
    DT_INSTANTANEOUS_HYDRATE: string;
    DT_CONTINUOUS_HYDRATE_TOTAL: string;
    DT_CONTINUOUS_WORKOUT_DURATION: string;
    DT_CONTINUOUS_EXERCISE_INTENSITY: string;
    DT_CONTINUOUS_EXERCISE_INTENSITY_V2: string;
    DT_STATISTICS_EXERCISE_INTENSITY_V2: string;
    DT_STATISTICS_SLEEP: string;
    DT_CONTINUOUS_SLEEP: string;
    DT_SLEEP_ON_OFF_BED: string;
    DT_INSTANTANEOUS_STRESS: string;
    DT_INSTANTANEOUS_STRESS_STATISTICS: string;
    DT_INSTANTANEOUS_RUN_VDOT: string;
    DT_INSTANTANEOUS_RUN_TRAINING_INDEX: string;
    DT_INSTANTANEOUS_RUN_FATIGUE_INDEX: string;
    DT_INSTANTANEOUS_RUN_PHYSICAL_FITNESS_INDEX: string;
    DT_INSTANTANEOUS_RUN_STATE_INDEX: string;
    DT_INSTANTANEOUS_RESTING_HEART_RATE: string;
    DT_RESTING_HEART_RATE_STATISTICS: string;
    DT_CONTINUOUS_JUMP: string;
    DT_CONTINUOUS_JUMP_STATISTICS: string;
    DT_INSTANTANEOUS_ALTITUDE: string;
    DT_CONTINUOUS_ALTITUDE_STATISTICS: string;
    DT_INSTANTANEOUS_SKIP_SPEED: string;
    DT_CONTINUOUS_SKIP_SPEED_STATISTICS: string;
    DT_CONTINUOUS_RUN_POSTURE: string;
    DT_CONTINUOUS_RUN_POSTURE_STATISTICS: string;
    DT_ACTIVITY_FEATURE_JUMPING_ROPE: string;
    DT_ACTIVITY_FEATURE_BASKETBALL: string;
    DT_ACTIVITY_FEATURE_FREEDIVING: string;
    DT_ACTIVITY_FEATURE_BREATH_HOLDING_TRAIN: string;
    DT_ACTIVITY_FEATURE_BREATH_HOLDING_TEST: string;
    DT_INSTANTANEOUS_FREEDIVING_ASCENT_SPEED: string;
    DT_INSTANTANEOUS_FREEDIVING_DESCENT_SPEED: string;
    DT_CONTINUOUS_FREEDIVING_ASCENT_SPEED_STATISTICS: string;
    DT_CONTINUOUS_FREEDIVING_DESCENT_SPEED_STATISTICS: string;
    DT_ACTIVITY_FEATURE_ROWING: string;
    DT_INSTANTANEOUS_STROKE_RATE: string;
    DT_INSTANTANEOUS_PEDALING_RATE: string;
    DT_CONTINUOUS_STROKE_RATE_STATISTICS: string;
    DT_CONTINUOUS_PEDALING_RATE_STATISTICS: string;
    DT_RESISTANCE: string;
    DT_RESISTANCE_STATISTICS: string;
    DT_VO2MAX: string;
    DT_VO2MAX_STATISTICS: string;
    DT_INSTANTANEOUS_SWIMMING_STROKE_RATE: string;
    DT_CONTINUOUS_SWIMMING_STROKE_RATE_STATISTICS: string;
    DT_INSTANTANEOUS_SWIMMING_SWOLF: string;
    DT_CONTINUOUS_SWIMMING_SWOLF_STATISTICS: string;
    DT_ACTIVITY_FEATURE_SWIMMING_OPEN_WATER: string;
    DT_ACTIVITY_FEATURE_SWIMMING_POOL: string;
    DT_ACTIVITY_FEATURE_SKIING: string;
    DT_ACTIVITY_FEATURE_SNOWBOARDING: string;
    DT_ACTIVITY_FEATURE_GOLF: string;
    POLYMERIZE_CONTINUOUS_WORKOUT_DURATION: string;
    POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS: string;
    POLYMERIZE_STEP_COUNT_DELTA: string;
    POLYMERIZE_DISTANCE_DELTA: string;
    POLYMERIZE_CALORIES_CONSUMED: string;
    POLYMERIZE_CALORIES_EXPENDED: string;
    POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE: string;
    POLYMERIZE_CONTINUOUS_POWER_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_SPEED_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS: string;
    POLYMERIZE_HYDRATION: string;
}

export interface updateHRReq {
    healthRecordId: string;
    options: Options;
    dataCollector: DataCollector[];
    sampleSets: SamplePoint[];
    samplePoints: SamplePoint[]; 
}

export interface addHRReq {
    options: Options;
    dataCollector: DataCollector[];
    sampleSets: SamplePoint[];
    samplePoints: SamplePoint[];  
}

export interface Field {
    fieldName: string;
    fieldValue: number;
}

export interface deleteHRReq {
    options?: Options;
    isDeleteSubData?: boolean;
    dataType?: string;
    dataTypes?: DataOption[];
    activityRecordIds: activityRecordIds[];
}

export interface getHRReq {
    options: Options;
    dataType: string;
    dataTypes: DataOption[];
}

export interface HealthRecordReply {
    healthRecords: HealthRecord[];
}

export interface createDeviceInfo {
    deviceManufacturer: string;
    modelName: string;
    uuid: string;
    deviceType: number;
    isBleDevice?: boolean;
    platformType?: number;
}

export interface DeviceInfo {
    deviceIdentifier: string;
    deviceType: number;
    deviceTypeString: string;
    manufacturer: string;
    modelName: string;
    platformType: number;
    uuid: string;
    isFromBleDevice: boolean;
}

export interface CreateAppReq {
    detailsUrl: string;
    domainName: string;
    packageName: string;
    version: string;
}

export interface HealthRecord {
    dataCollector: DataCollector;
    startTime: number;
    endTime: number;
    fieldValue: string;
    fieldValues: Map<string, Value>;
    HealthRecordId: string;
    metaData: string;
    subDataDetails: SampleSet[];
    SubDataSummary: SamplePoint[];
}

export interface Value {
    activityType: string;
    doubleValue: number;
    floatValue: number;
    intValue: number;
    longValue: number;
    stringValue: string;
    getFormat: number;
    getMap: Map<string, MapValue>;
    getMapValue: string;
    isSet: boolean;
}

export interface MapValue {
    asFloatValue: number;
    asIntValue: number;
    asLongValue: number;
    asStringValue: string;
    getFormat: string;
}

export interface AddActivityRecordReq {
    activityRecord: ActivityRecordReq;
    sampleSet?: SampleSet[];
}

export interface deleteActivityRecordReq {
    startTime: number;
    endTime: number;
    dataTypes: DataOption[];
    timeUnit: string;
    isDeleteSubData: boolean;
    activityRecordIds: activityRecordIds[];
}

export interface activityRecordIds {
    activityRecord: string;
}

export interface BeginActivityRecordReq {
    startTime: number;
    timeUnit: string;
    timeZone: string;
    id: string;
    name: string;
    description: string;
    activityType: string;
    deviceInfo?: createDeviceInfo;
}

export interface GetActivityRecordReq {
    startTime: number;
    endTime: number;
    timeUnit: string;
    dataType: string;
}

export interface ActivityRecordReq {
    id: string;
    name: string;
    description: string;
    activityType: string;
    startTime: number;
    endTime: number;
    timeUnit: string;
    timeZone: string;
    activitySummary: ActivitySummary;
}

export interface ActivityRecord {
    startTime: number;
    endTime: number;
    timeUnit: string;
    timeZone: string;
    id: string;
    name: string;
    description: string;
    activityType: string;
    appInfo?: AppInfo;
    activitySummary: ActivitySummary;
}

export interface AppInfo {
    detailsUrl: string;
    domainName: string;
    packageName: string;
    version: string;
}

export interface ActivitySummary {
    paceSummary: PaceSummary;
    dataSummary: DataSummary[];
}

export interface PaceSummary {
    avgPace: number;
    bestPace: number;
    paceMap: object;
    britishPaceMap: object;
    partTimeMap: object;
    britishPartTimeMap: object;
    sportHealthPaceMap: object;
}

export interface DataSummary {
    dataCollector: DataCollector,
    samplePoints: SamplePoint[]
}

export interface SampleSet {
    dataCollector: DataCollector;
    samplePoints: SamplePoint[];
}

export interface SamplePoint {
    startTime: number;
    endTime: number;
    samplingTime?: number;
    fields: Field[];
    timeUnit: string;
}

export interface MetaData {
    metaDataKey: string;
    metaDataValue: string;
}

interface StartRecordReq {
    dataType: string;
}

interface endActivityRecord {
    activityRecordId: string;
    timeUnit: string;
}

interface StopRecordReq {
    dataType: string;
}

interface GetPermissionsReq {
    language: string;
    appId: string;
}

interface RevokeReq {
    appId: string;
    scopes: string[];
}

interface authReq {
    enableHealthAuth: boolean;
    scopes: string[];
}

interface CancelAuthReq {
    appId: string;
    scopes: string[];
}

interface CancelAuthAllReq {
    deleteData: boolean;
}

interface ScopeLangItem {
    label: string;
}

interface ReadReply {
    label: string;
}

export interface DataOption {
    dataType: string;
    hiHealthOption?: number;
}

export interface ReadReq {
    dataCollector: DataCollector;
    options: Options;
}

export interface HealthField {
    healthFieldName: string;
    healthFieldValue: number;
}

export interface DataCollector {
    dataType: string;
    dataGenerateType: number;
    name: string;
    dataStreamName?: string;
    deviceId?: string;
    isLocalized?: boolean;
    dataStreamId?: number;
    deviceInfo?: DeviceInfo;
    packageName?: string;
    standardByType?: string;
}

export interface Options {
    startTime: number;
    endTime: number;
    timeUnit: string;
    metaData?: string;
    fields?: Field[];
}

export interface InsertReq {
    dataCollector: DataCollector;
    sampleSet: SampleSets[];
}

export interface UpdateReq {
    dataCollector: DataCollector;
    sampleSet: SampleSets[];
    options: Options;
}

export interface SampleSets {
    metaData?: MetaData;
    startTime: number;
    endTime: number;
    fieldName: string;
    fieldValue: string;
    timeUnit: string;
    dataCollector: DataCollector;
}

export interface DeleteReq {
    dataCollector: DataCollector;
    options: Options;
}

export interface AddDataTypeReq {
    dataTypeName: string;
    fieldValue: string;
}

export interface AuthHuaweiId {
    accessToken: string;
    displayName: string;
    email?: string;
    familyName: string;
    givenName: string;
    idToken?: string;
    unionId: string;
    avatarUriString: string;
    expressionTimeSecs: number;
    openId: string;
    uid?: string;
    countryCode?: string;
    serviceCountryCode?: string;
    status: number;
    gender: Gender;
    describeContentsInAuthHuaweiId: number;
    authorizedScopes: string[];
    extensionScopes: string[];
    authorizationCode?: string;
    huaweiAccount?: Account;
}

export interface ReadDailySummationReq {
    startDate: number;
    endDate: number;
    dataType: string;
}

export interface ReadLatestDataReq {
    dataTypes: DataOption[];
}

export interface Account {
    type: string;
    name: string;
}

export declare enum Gender {
    UNKNOWN = -1,
    MALE = 0,
    FEMALE = 1,
    CONFIDENTIAL = 2,
}
