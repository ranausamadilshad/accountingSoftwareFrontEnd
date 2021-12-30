/** @format */

import React, { useEffect } from "react";
import * as api from "../../../../apis/parties/parties";
import { useState } from "react";
import PartiesScreen from "../../../ui/party/view/layout";
import useApi from "../../../../hooks/useApi";
import Spinner from "../../../ui/spinner/Spinner";


const Parties = () => {
  const [id, setId] = useState(0);
  const { request, data,isLoading } = useApi(api.getAllParties);
  const getSingleParty = useApi(api.getSingleParty);
  // const getSinglePartyTransaction = useApi(api.getSinglePartyTransaction);

  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        await getSingleParty.request(id);
      } catch (_) {}
    }
    fetchData();
  }, [id]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const { data } = await getSinglePartyTransaction.request(id);
  //     } catch (_) {}
  //   }
  //   fetchData();
  // }, [id]);

  return (
    <>
        {isLoading ? <Spinner/>:
      <PartiesScreen
        data={data && data}
        getSingleData={getSingleParty.data && getSingleParty.data}
        // getSingleTransaction={
        //   getSinglePartyTransaction.data && getSinglePartyTransaction.data
        // }
        id={id}
        setId={setId}
      />
}
    </>
  );
};

export default Parties;
