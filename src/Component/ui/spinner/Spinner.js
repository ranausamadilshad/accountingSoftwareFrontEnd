import React ,{useState} from "react"
import FadeLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

 export default function Spinner(){
  let [color] = useState("#fff");
  const override = css`
  display: block;
  margin: 25% auto;
  border-color: blue;
`;

   return (
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",justifyItems:"center",justifyContent:"center"}}>     
 <FadeLoader color={color} css={override} size={50} /> </div>
   )
 }
