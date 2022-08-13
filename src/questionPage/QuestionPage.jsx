import React, { useState } from 'react'
import logo from '../logo.png'
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from 'react';
import BackDrop from '../backDrop/BackDrop';


axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const QuestionPage = () => {
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const toastError = (error) => {
    toast.error(error, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    setResponse(null);
  };

  useEffect(()=> {
    const fetchData = async (params) => {
      try {
        setLoading(true);
        const result = await axios.get('https://api.ctelecom.ir/Public/Poll/Answer');
        console.log(result)
        // const data=result.data
        // const resultCode=result.data.Result
        // if (resultCode === ResultCodeEnum.Ok) {
        //   setResponse(data);
        // } else if (sendToLogin.includes(resultCode)) {
        //   toastError(data.Message);
        //   localStorage.removeItem("token");
        //   navigate("/", { replace: true });
        // } else {
        //   toastError(data.Message);
        // }
      } catch (error) {
        toastError(error.message);
      } finally {
        setLoading(false);
       
      }
    };

    fetchData()
  },[])


  return (
    <>
    {loading && <BackDrop />}
    {!loading && <div className="questionpageMainDiv">
      <div className="questionpageFirstDiv">
        <div className="questionPageInformaitionDiv">
          
          <div className="questionPagePhoneNumberDiv">
          <div className="questionPageSpanDiv">
            <span>شماره تلفن:</span>
            <span>09121111111</span>
          </div>
          </div>
          <div className="questionPageLogoDiv">
            <img src={logo} alt="" className="questionPageLogo" />
          </div>
        </div>
        <div className="questionpageQuestionDiv">
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
          <h1>asdasd</h1>
        </div>
      </div>
      <div className="questionpageSecondDiv">
        <button className="questionPageSubmit">ثبت</button>
      </div>
    </div>}
    </>
  )
}

export default QuestionPage