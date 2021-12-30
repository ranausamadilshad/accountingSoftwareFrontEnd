/** @format */

import React, { useEffect, useState } from "react";

import * as Yup from "yup";
import * as api from "../../../../apis/company/company";
import CreateCompanyScreen from "../../../ui/company/create/layout";
import useApi from "../../../../hooks/useApi";
import axios from "axios";

const validationSchema = Yup.object({
  busName: Yup.string().required("Required"),
  busTypeId: Yup.string().required("Required"),
  busCategoryId: Yup.string().required("Required"),
  phoneNo: Yup.number().required("Required"),
  // saleTaxNo: Yup.number().max(15),
  // incomeTaxNo: Yup.number().max(13),
});

const CreateCompany = () => {
  const getAllBusinessType = useApi(api.getAllBusinessType);
  const getAllBusinessCategory = useApi(api.getAllBusinessCategory);
  const [isLoading, setIsLoading] = useState(false);
  const [signatures, setSignatures] = useState();
  const { request, data } = useApi(api.getCompany);
  const [response, setResponse] = useState("");
  const [logos, setLogos] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [previewSig, setPreviewSig] = useState();
  const [error, setError] = useState();

  const initialValues = {
    busName: data && data.company && data.company.busName,
    phoneNo: data && data.company && data.company.phoneNo,
    email: data && data.company && data.company.email,
    saleTaxNo: data && data.company && data.company.saleTaxNo,
    incomeTaxNo: data && data.company && data.company.incomeTaxNo,
    busAddress: data && data.company && data.company.busAddress,
    busDescription: data && data.company && data.company.busDescription,
    busTypeId: data && data.company && data.company.busTypeId,
    busCategoryId: data && data.company && data.company.busCategoryId,
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        await getAllBusinessType.request();
        await getAllBusinessCategory.request();
        const { data } = await request();
        setLogos(data && data.company && data.company.logo);
        setPreviewImage(data && data.company && data.company.logo);

        setSignatures(data && data.company && data.company.signature);
        setPreviewSig(data && data.company && data.company.signature);

        console.log("server response data: ", data);
        setIsLoading(false);
      } catch (err) {
        console.log("response error: ", err);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const onSubmit = async (values) => {
    let formData = new FormData();
    formData.append("busName", values.busName);
    formData.append("phoneNo", values.phoneNo);
    formData.append("email", values.email);
    formData.append("saleTaxNo", values.saleTaxNo);
    formData.append("incomeTaxNo", values.incomeTaxNo);
    formData.append("busAddress", values.busAddress);
    formData.append("busDescription", values.busDescription);
    formData.append("busTypeId", values.busTypeId);
    formData.append("busCategoryId", values.busCategoryId);
    formData.append("logo", logos);
    formData.append("signature", signatures);

    setIsLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:8000/company/`,
        formData,
        {
          headers: {
            // Authorization: localStorage.getItem("token"),
            "Content-Type": `multipart/form-data`,
          },
        }
      );
      console.log("response", response);

      setResponse(data.message);
      setIsLoading(false);
    } catch (err) {
      console.log(err.response);
      setIsLoading(false);
    }
    try {
      const response = await axios.patch(
        `http://localhost:8000/company/`,
        formData,
        {
          headers: {
            // Authorization: localStorage.getItem("token"),
            "Content-Type": `multipart/form-data`,
          },
        }
      );
      console.log("response", response);
      setIsLoading(true);
      window.location.reload();
      setResponse(data.message);
    } catch (error) {
      setError(error.response);
      console.log(error.response);
    }
  };

  function handleLogo({ target }) {
    setPreviewImage(URL.createObjectURL(target.files[0]));
    setLogos(target.files[0]);
  }
  function handleSignature({ target }) {
    setSignatures(target.files[0]);
    setPreviewSig(URL.createObjectURL(target.files[0]));
  }

  return (
    <>
      <CreateCompanyScreen
        error={error}
        response={response}
        onSubmit={onSubmit}
        handleLogo={handleLogo}
        data={data}
        isLoading={isLoading}
        previewSig={previewSig}
        previewImage={previewImage}
        handleSignature={handleSignature}
        initialValues={initialValues}
        validationSchema={validationSchema}
        businessType={getAllBusinessType.data && getAllBusinessType.data}
        businessCategories={
          getAllBusinessCategory.data && getAllBusinessCategory.data
        }
      />
    </>
  );
};

export default CreateCompany;
