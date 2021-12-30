import React from 'react'
import PageNavigationTabs from '../../common/PageNavigationTabs'
import PurcahseOrderDetail from './purcahseOrderDetail'
import './PurchaseOrder.css'

const PurchaseOrderScreen = () => {
    return (
        <>
         <PageNavigationTabs
         tabs={[{title:"Orders",render:()=><PurcahseOrderDetail/>}]}
         />
        </>
    )
}

export default PurchaseOrderScreen;
