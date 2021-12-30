import React, { useEffect, useState } from "react";
import PageNavigationTabs from "../../../../common/PageNavigationTabs";
import ItemsTable from "../../../ui/items/adjust/layout";
import * as itemsApi from "../../../../apis/items/items";
import useApi from "../../../../hooks/useApi";

const ItemsScreen = () => {
  const { request, data } = useApi(itemsApi.getItems);
  const singleItem = useApi(itemsApi.getSingleItem);
  const transactions = useApi(itemsApi.getItemTransactions);

  const [itemId, setItemId] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        await singleItem.request(itemId);
      } catch (_) {}
    }
    fetchData();
  }, [itemId]);
  useEffect(() => {
    async function fetchData() {
      try {
        await transactions.request(itemId);
      } catch (_) {}
    }
    fetchData();
  }, [itemId]);
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
                  singleItem={singleItem.data}
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

export default ItemsScreen;
