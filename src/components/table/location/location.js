import axios from "axios";
import { useEffect } from "react";
import { xml2json } from "xml-js";

const Map = ({ lat, lng }) => {
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6760.739937148644!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2sil!4v1684275758595!5m2!1siw!2sil`;

  return (
    <>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

const Location = ({ plate }) => {
  let lat;
  let lng;

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    try {
      let url =
        "https://www.ituran.com/ituranwebservice3/Service3.asmx/GetAllPlatformsData_JSON?UserName=%D7%A9%D7%97%D7%A0%D7%A8%20%D7%9E%D7%95%D7%98%D7%95%D7%A8%D7%A11&Password=api@API123&ShowAreas=True&ShowStatuses=True&ShowMileageInMeters=False&ShowDriver=True";
      let resp = await axios.get(url);
      console.log(resp);
      let data = resp.data;
      console.log(data);
      // const xmlData = `${cars}`;
      // Parse the XML data and extract the required information
      // const data = xml2json(xmlData);
      const vehicleData =
        data?.ServiceAllPlatformData?.VehList?.[0]?.ServicePlatformData?.find(
          (vehicle) => vehicle.Plate[0] === plate
        );
      lat = vehicleData.LastLatitude;
      lng = vehicleData.LastLongitude;
    } catch (err) {
      alert("הבקשה נכשלה.");
    }
  };

  return <Map lat={lat} lng={lng}/>;
};

export default Location;
