/** @format */

import React, { useEffect, useState } from "react";
import CreateItemsScreen from "../../../ui/items/create/layout";
import * as Yup from "yup";
import useApi from "../../../../hooks/useApi";
import axios from "axios";
import * as itemsApi from "../../../../apis/items/items";


const initialValues = {
  itemCode: "",
  itemCategoryId: "",
  itemName: "",
  itemUnitId: "",
  salePrice: "",
  purchasePrice: "",
  minStock: 0,
  location: "",
  stockAddedDate: "",
  openingStock: 0,
  stockPrice: 0,
};

const validationSchema = Yup.object({
  itemCategoryId: Yup.string().required("Required"),
  itemName: Yup.string().required("Required"),
  itemUnitId: Yup.string().required("Required"),
  salePrice: Yup.number().required("Required"),
  purchasePrice: Yup.number().required("Required"),
  stockPrice: Yup.number().when("openingStock", {
    is: (val) => val > 0,
    then: Yup.number().required().positive("Must be Positive"),
  }),
  stockAddedDate: Yup.string().when("openingStock", {
    is: (val) => val > 0,
    then: Yup.string().required(),
  }),
});

const CreateItems = () => {
  const getItemCategories = useApi(itemsApi.getItemCategories);
  const getItemUnits = useApi(itemsApi.getItemUnits);
  const [response1, setResponse] = useState("");
  const [itemImage, setItemImage] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        await getItemCategories.request();
        await getItemUnits.request();
        setIsLoading(false);

      } catch (_) {
        setIsLoading(false);

      }
    }
    fetchData();
  }, []);

  const onSubmit = async (values) => {
    console.log("Values", values);

    let formData = new FormData();
    formData.append("itemCode", values.itemCode);
    formData.append("itemCategoryId", values.itemCategoryId);
    formData.append("itemName", values.itemName);
    formData.append("itemUnitId", values.itemUnitId);
    formData.append("salePrice", values.salePrice);
    formData.append("purchasePrice", values.purchasePrice);
    formData.append("minStock", values.minStock);
    formData.append("itemLocation", values.location);
    formData.append("stockAddedDate", values.stockAddedDate);
    formData.append("openingStock", values.openingStock);
    formData.append("stockPrice", values.stockPrice);
    formData.append("itemImage", itemImage);
    setIsLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:8000/item/`,
        formData,
        {
          headers: {
            // Authorization: localStorage.getItem("token"),
            "Content-Type": `multipart/form-data`,
          },
        }
      );
      console.log("response", response);
      window.location.reload();
      setResponse(response);
      setIsLoading(false);

    } catch (error) {
      setErrorMessage(error.response);
      console.log(error.response);
      setIsLoading(false);

    }
  };

  function handleImage({ target }) {
    setPreviewImage(URL.createObjectURL(target.files[0]));
    setItemImage(target.files[0]);
  }

  return (
    <>
      
        <CreateItemsScreen
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
          response={response1}
          error={errorMessage}
          handleImage={handleImage}
          itemCategories={getItemCategories.data && getItemCategories.data}
          itemUnits={getItemUnits.data && getItemUnits.data}
          previewImage={previewImage}
          handleImage={handleImage}
        />
    </>
  );
};

export default CreateItems;
