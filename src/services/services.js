import axios from "axios";
import { message } from "antd";
import { API_KEY } from "../data/constants";

const errMsg = (code) => {
  if (code === 404) return "לא נמצא ";
  else if (code === 400) return "מידע שגוי או שמידע לא נשלח, ";
  else if (code === 503) return "שרת לא זמין  ";
  else if (code === 500) return "שגיאת שרת ";
  else if (code === 502) return "אחד מהפרטים או כמה אינם תקינים, ";
};
const loading = (msg, color, type) => {
  const key = "updatable";
  message.open({
    key,
    type: "loading",
    content: "טוען...",
  });
  setTimeout(() => {
    message.open({
      key,
      type: type,
      content: msg,
      duration: 2,
      style: {
        color: color,
        fontSize: "15px",
      },
    });
  }, 500);
};
const loadingMsg = (msg, color, type) => {
  const key = "updatable";
  message.open({
    key,
    type: type,
    content: msg,
    style: {
      color: color,
      fontSize: "15px",
    },
  });
};

const apiGet = async (url, body) => {
  try {
    let { data } = await axios({
      method: "GET",
      url,
      headers: {
        "x-api-key": localStorage[API_KEY],
      },
      data: body,
    });
    return data;
  } catch (err) {
    if(err.response.data.msg === "Token invalid or expired"){
    url !== 'https://faithful-tan-cape.cyclic.app/workers/workerInfo' && window.location.reload()
    }
    const codeErr = errMsg(err.response.status) || "";
    loadingMsg(codeErr + "היבוא נכשל!", "red", "error");
    console.log(err);
    throw err;
  }
};
const apiPost = async (url, body) => {
  try {
    let { data } = await axios({
      method: "POST",
      url,
      data: body,
      headers: {
        "x-api-key": localStorage[API_KEY],
      },
    });
    loading("העדכון בוצע!", "green", "success");
    return data;
  } catch (err) {
    if(err.response.data.msg === "Token invalid or expired"){
    window.location.reload()
    }
    const codeErr = errMsg(err.response.status) || "";
    loadingMsg(codeErr + "העדכון נכשל!", "red", "error");
    console.log(err);
    throw err;
  }
};
const apiPut = async (url, body) => {
  try {
    let { data } = await axios({
      method: "PUT",
      url,
      headers: {
        "x-api-key": localStorage[API_KEY],
      },
      data: body,
    });
    loading("העדכון בוצע!", "green", "success");
    return data;
  } catch (err) {
    if(err.response.data.msg === "Token invalid or expired"){
      window.location.reload()
      }
    const codeErr = errMsg(err.response.status) || "";
    loadingMsg(codeErr + "העדכון נכשל!", "red", "error");
    console.log(err);
    throw err;
  }
};
const apiDelete = async (url, body) => {
  console.log(url);
  try {
    let { data } = await axios({
      method: "DELETE",
      url,
      headers: {
        "x-api-key": localStorage[API_KEY],
      },
      data: body,
    });
    return data;
  } catch (err) {
    if(err.response.data.msg === "Token invalid or expired"){
      window.location.reload()
      }
    console.log(err);
    throw err;
  }
};
const apiPatch = async (url, body) => {
  try {
    let { data } = await axios({
      method: "PATCH",
      url,
      headers: {
        "x-api-key": localStorage[API_KEY],
      },
      data: body,
    });
    loading("העדכון בוצע!", "green", "success");
    return data;
  } catch (err) {
    if(err.response.data.msg === "Token invalid or expired"){
      window.location.reload()
      }
    const codeErr = errMsg(err.response.status) || "";
    loadingMsg(codeErr + "העדכון נכשל!", "red", "error");
    console.log(err);
    throw err;
  }
};

export { apiGet, apiPost, apiPut, apiDelete, apiPatch, loading, loadingMsg };