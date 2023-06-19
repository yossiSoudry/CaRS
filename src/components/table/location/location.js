import axios from "axios";
import { useEffect, useState } from "react";
import { xml2json } from "xml-js";
import { apiGet } from "../../../services/services";
import { URL_CARS } from "../../../data/constants";


const Location = ({ plate }) => {
  plate = plate.replaceAll("-", "");
  console.log(plate);

  const [data, setData] = useState({});
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    const doApi = async () => {
      try {
        const locData = await apiGet(`https://www.ituran.com/ituranwebservice3/Service3.asmx/GetPlatformData_JSON?UserName=%D7%A9%D7%97%D7%A0%D7%A8%20%D7%9E%D7%95%D7%98%D7%95%D7%A8%D7%A11&Password=api@API123&Plate=${plate}&ShowAreas=True&ShowStatuses=True&ShowMileageInMeters=true&ShowDriver=false`);
        const jsonData = xml2json(locData.data, {
          compact: true,
          ignoreComment: true,
          spaces: 4,
        });
        const innerJsonData = JSON.parse(jsonData).string._text;
        const jsonD = JSON.parse(innerJsonData);
        console.log(jsonD);
        setData(jsonD);
        setLat(jsonD.LastLatitude);
        setLng(jsonD.LastLongitude);
        console.log(lat);
      } catch (error) {
        console.error(error);
      }
    };

    doApi();
  }, []);
  
  return <>{ <Map lat={lat} lng={lng} />}</>;
};

const Map = ({ lat, lng }) => {
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6760.739937148644!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2sil!4v1684275758595!5m2!1siw!2sil`;
console.log(lat, lng);
  return (
    <>
      <iframe
        src={embedUrl}
        width="100%"
        height="200%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};
export default Location;
