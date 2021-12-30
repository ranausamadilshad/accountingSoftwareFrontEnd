import React from 'react'
import ReportsScreen from './ReportsScreen'

const Reports = ({reportSidebar, setReportSidebar}) => {
    return (
        <>
         <ReportsScreen reportSidebar={reportSidebar} setReportSidebar={setReportSidebar}/>   
        </>
    )
}

export default Reports
