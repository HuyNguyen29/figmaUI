import React, { useContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import Constants from '../Services/Constants';
import { ReportWidget } from "disprzcomponents"
import ReportColumnTypes from "../Models/ReportColumnTypes";
import config from 'react-global-configuration';

function DisplayReport() {
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState([]);
    //const [downloadingReport, setDownloadingReport] = useState(props.location.state ? props.location.state.exportInProgress : false);
    const [isFetchingData, setIsFetchingData] = useState(true);
    const [maxItems, setMaxItems] = useState(25);
    const [offset, setOffset] = useState(0);
    const accessToken = ""
    const currentReport = JSON.parse(sessionStorage.getItem(Constants.REPORT_DATA));
    const [configData, setConfigData] = useState({})
    const [toLoginDate, setToLoginDate] = useState(null)
    const [fromLoginDate, setFromLoginDate] = useState(null);

    const toDate = new Date();
    const fromDate = new Date(toDate);
    fromDate.setDate(toDate.getDate() - 91);

    const reportWidget = useRef(null);

    useEffect(() => {
        setToLoginDate(toDate);
        setFromLoginDate(fromDate);
    }, [])

   

    let columns = [
        {
            key: 'userName',
            name: 'User ID',
            sortable: true,
            cls: "half-string",
            type: ReportColumnTypes.STRING
        },
        {
            key: 'userFullName',
            name: 'User Name',
            sortable: true,
            cls: "half-string",
            type: ReportColumnTypes.STRING
        },
        {
            key: 'userStatus',
            name: 'User Status',
            sortable: false,
            cls: "half-string",
            filterable: true,
            filterType: "list",
            options: [{ key: 1, label: "Active" }, { key: 2, label: "Inactive" }, { key: 3, label: "Locked" }],
            type: ReportColumnTypes.STRING
        },
        {
            key: 'loginStatus',
            name: 'Login Status',
            sortable: false,
            cls: "half-string",
            filterable: true,
            filterType: "list",
            options: [{ key: 1, label: "Logged in at least once" }, { key: 2, label: "Not logged in" }],
            type: ReportColumnTypes.STRING
        },
        {
            key: 'loginCount',
            name: 'No. of Sign-ins',
            sortable: true,
            cls: "half-string",
            type: ReportColumnTypes.STRING
        },
        {
            key: 'timeSpent',
            name: 'Total Time Spent (mins)',
            // filterable: true,
            sortable: true,
            cls: "half-string",
            type: ReportColumnTypes.STRING
        },
        {
            key: 'webTimeSpent',
            name: 'Web Time Spent (mins)',
            // filterable: true,
            sortable: true,
            cls: "half-string",
            type: ReportColumnTypes.STRING
        },
        {
            key: 'appTimeSpent',
            name: 'App Time Spent (mins)',
            // filterable: true,
            sortable: true,
            cls: "half-string",
            type: ReportColumnTypes.STRING
        },
        {
            key: 'webcount',
            name: 'Web Sign-ins',
            cls: "half-string",
            sortable: true,
            type: ReportColumnTypes.STRING
        },
        {
            key: 'appcount',
            name: 'App Sign-ins',
            cls: "half-string",
            sortable: true,
            type: ReportColumnTypes.STRING
        },
        {
            key: 'firstLoginTime',
            name: 'First Login Time',
            cls: "half-string",
            sortable: false,
            dateFormat: "MMM D, YYYY [at] h:mm A",
            type: ReportColumnTypes.DATE
        },
        {
            key: 'lastLoginTime',
            name: 'Last Login Time',
            cls: "half-string",
            sortable: true,
            dateFormat: "MMM D, YYYY [at] h:mm A",
            type: ReportColumnTypes.DATE
        },
    ];

    const getKey = (key) => {
        if (key.split(' ').length === 1) {
            return `${key[0].toLowerCase()}${key.substring(1)}`;
        } else {
            let tempkey = key.split(' ').join('_');
            return `${tempkey[0].toLowerCase()}${tempkey.substring(1)}`;
        }
    }




    


    const loadData = (offset) => {
        setOffset(offset);
        setIsFetchingData(true);
    }

    const to = toLoginDate?.toLocaleDateString() || toDate.toLocaleDateString();
    const from = fromLoginDate?.toLocaleDateString() || fromDate.toLocaleDateString();

    const queryParam = {
        fromTimePeriod: from,
        toTimePeriod: to,
        offset: 0,
        fetchCount: 25,
        timezoneOffsetInMins: toDate.getTimezoneOffset(),
        includeTotalCount: true
    };
    

    return (
        <div className="display-reportwidget-container">
        <ReportWidget
            ref={reportWidget}
            ctrCls={"loginreport"}
            queryParams={queryParam}
            searchable={true}
            isSearchFilterAsButton={true}
            identifierColumn={"key"}
            //disableExportButton={downloadingReport}
            searchPlaceholderText={"Search"}
            showAdvancedSearch={true}
            analyticsColumns={columns}
            showTimeDurationFilter={true}
            defaultTimePeriodValue={'last quarter'}
            searchFilterLabel={'Filter'}
            user={{"userId":11689,"dbPointer":"Dev","userName":"nirav001","firstName":"Nirav","lastName":"Doshi"}}
            exportData={{
                downloadAnalyticsUrl: `https://localhost:44346/api/Demo`,
                excludeCredentials: true,
                fileName: "LoginReport",
            }}
            limitedUserDefinedFieldsSummaryFetchAPIUrl={`https://disprzpipeline.disprz.com/demoservice/api/service/getFilteredData`}
            url={`https://disprzpipeline.disprz.com/demoservice/api/service/getreportdata`}
        />
        </div>)
        
}

export default DisplayReport;