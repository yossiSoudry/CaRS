import { useState } from "react";
import {
  PictureOutlined,
  FilePdfOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Modal, Space, Upload, message } from "antd";
import { useStateContext } from "../../../contexts/contextProvider";
import axios from "axios";
import ImgCrop from "antd-img-crop";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

const Files = ({ row, updateOne }) => {
  const { currentMode } = useStateContext();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState(row.images || []);
  const [filePDFList, setFilePDFList] = useState(row.files || []);

  const getBase64 = async (file) => {
    await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      setLoading(false);
    });
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const handlePDFChange = ({ fileList: newFilePDFList }) => {
    setFilePDFList(newFilePDFList);
  };

  const uploadRequest = ({ file }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ssgvr2ya");
    axios
      .post("https://api.cloudinary.com/v1_1/donev6ews/image/upload", formData)
      .then((response) => {
        console.log(response);
        let data = {
          name: response.data.original_filename,
          url: response.data.secure_url,
        };
        if (response.data.format !== "pdf") {
          row.images.push(data);
          // handleChange()
        } else {
          row.files.push(data);
          // handlePDFChange()
        }
        updateOne && updateOne(row);
        message.info("הקובץ נוסף בהצלחה");
      });
  };

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const deleteRequest = (file) => {
    let type = file.url.substring(file.url.lastIndexOf(".") + 1);
    console.log(type);
    if (type !== "pdf") {
      row.images.map((image, i) => {
        if (image.name === file.name) {
          row.images.splice(i, 1);
        }
      });
    } else {
      row.files.map((image, i) => {
        if (image.name === file.name) {
          row.files.splice(i, 1);
        }
      });
    }
    updateOne(row);
  };
  const showConfirm = (file) => {
    confirm({
      content: "הקובץ ימחק לצמיתות, נא לאשר!",
      icon: <ExclamationCircleOutlined />,
      autoFocusButton: "cancel",
      bodyStyle: { padding: "10px" },
      cancelText: "ביטול",
      okText: "אישור",
      centered: true,
      onOk() {
        deleteRequest(file);
        message.info("הקובץ הוסר בהצלחה");
      },
      onCancel() {
        return false;
      },
    });
  };

  return (
    <div className="bg-white rounded-md dark:bg-secondary dark:text-gray-200 p-4">
      <div className="flex items-center justify-center">
        <div className="flex-col">
          <h2 className="text-4xl text-center text-zinc-600 dark:text-zinc-400">
            תיקיית מסמכים
          </h2>
        </div>
      </div>
      <div className="mb-4 border-t-1 border-stone-200 dark:border-stone-500 pt-4 mt-4">
        <p className="font-semibold text-xl text-center mb-4">תמונות</p>
        <ImgCrop
          showGrid
          rotationSlider
          aspectSlider
          showReset
          aspect={2 / 1.2}
          quality={1}
          minZoom={0.9}
          maxZoom={5}
          resetText="איפוס"
          modalOk="אישור"
          modalCancel="ביטול"
          modalTitle="עריכת תמונה"
          className="bg-white rounded-md dark:bg-secondary dark:text-gray-200"
        >
          <Upload
            customRequest={uploadRequest}
            listType="picture-card"
            fileList={fileList}
            // onChange={handleChange}
            onPreview={handlePreview}
            accept="image/*"
            className="dark:text-slate-200"
            onRemove={showConfirm}
          >
            <div>
              {loading ? <LoadingOutlined /> : <PictureOutlined />}
              <div style={{ marginTop: 8 }}>הוספת תמונה</div>
            </div>
          </Upload>
        </ImgCrop>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
          className={`${
            currentMode === "dark" ? "dark" : "light"
          } bg-white rounded-md dark:bg-secondary dark:text-gray-200 p-4`}
        >
          <img alt="example" className="w-full" src={previewImage} />
        </Modal>
      </div>
      <div className="mb-4 border-t-1 border-stone-200 dark:border-stone-500 pt-4">
        <p className="font-semibold text-xl text-center mb-4">קבצים</p>
        <Upload
          customRequest={uploadRequest}
          fileList={filePDFList}
          // onChange={handlePDFChange}
          listType="picture-card"
          accept=".pdf"
          className="dark:text-slate-200"
          onRemove={showConfirm}
        >
          <div>
            {loading ? <LoadingOutlined /> : <FilePdfOutlined />}
            <div style={{ marginTop: 8 }}>הוספת קובץ</div>
          </div>
        </Upload>
      </div>
    </div>
  );
};
export default Files;
