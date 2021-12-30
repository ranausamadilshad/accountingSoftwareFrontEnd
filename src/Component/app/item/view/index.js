/** @format */

import React, { useEffect, useState } from "react";
import PageNavigationTabs from "../../../../common/PageNavigationTabs";
import ItemsTable from "../../../ui/items/view/layout";
import * as itemsApi from "../../../../apis/items/items";
import useApi from "../../../../hooks/useApi";

const Items = () => {
  const { request, data,isLoading } = useApi(itemsApi.getItems);
  const singleItem = useApi(itemsApi.getSingleItem);
  const transactions = useApi(itemsApi.getItemTransactions);

  const [itemId, setItemId] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        await singleItem.request(itemId);
        console.log("Single Show Data", singleItem.data);
      } catch (_) {}
    }
    fetchData();
  }, [itemId]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       await transactions.request(itemId);
  //     } catch (_) {}
  //   }
  //   fetchData();
  // }, [itemId]);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  return (
    <>   
        <PageNavigationTabs
          tabs={[
            {
              title: "PRODUCT",
              render: () => (
                <span>
                  <ItemsTable
                    data={data}
                    itemId={itemId}
                    setItemId={setItemId}
                    singleItem={singleItem && singleItem.data}
                    transactions={transactions.data}
                  />
                </span>
              ),
            },
            {
              title: "UNITS",
              render: () => (
                <span>
                  <p>Units data</p>
                </span>
              ),
            },
          ]}
        />
    </>
  );
};

export default Items;
