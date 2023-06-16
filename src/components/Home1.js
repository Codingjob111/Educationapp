import React, { useState, useEffect } from "react";
import "./Home1.css";


const Home1 = () => {
  const companyNames = [
    "😊 Apple Inc.",
    "😃 Samsung Electronics Co., Ltd.",
    "🙂 Microsoft Corporation",
    "😄 Alphabet Inc. (Google)",
    "😁 Amazon.com Inc.",
    "😆 Facebook Inc.",
    "😎 Intel Corporation",
    "😍 IBM Corporation",
    "😉 Oracle Corporation",
    "🤩 Cisco Systems Inc.",
    "😇 Adobe Inc.",
    "🥳 Dell Technologies Inc.",
    "😄 Hewlett Packard Enterprise Co.",
    "😊 Sony Corporation",
    "😃 Panasonic Corporation",
    "🙂 LG Electronics Inc.",
    "😄 Toshiba Corporation",
    "😁 Nokia Corporation",
    "😆 Fujitsu Ltd.",
    "😎 NEC Corporation",
    "😍 Lenovo Group Ltd.",
    "😉 Huawei Technologies Co. Ltd.",
    "🤩 Hitachi Ltd.",
    "😇 Xerox Corporation",
    "🥳 Sharp Corporation",
    "😄 Brother Industries Ltd.",
    "😊 Canon Inc.",
    "😃 Ricoh Company Ltd.",
    "🙂 Konica Minolta Inc.",
    "😁 SAP SE",
    "😆 Salesforce.com Inc.",
    "😎 VMware Inc.",
    "😍 Adobe Systems Inc.",
    "😉 Intuit Inc.",
    "🤩 Workday Inc.",
    "😇 ServiceNow Inc.",
    "🥳 Square Inc.",
    "😄 Atlassian Corporation Plc",
    "😊 Autodesk Inc.",
    "😃 Activision Blizzard Inc.",
    "🙂 Electronic Arts Inc.",
    "😁 Nintendo Co. Ltd.",
    "😆 Ubisoft Entertainment SA",
    "😎 Take-Two Interactive Software Inc.",
    "😍 Sony Interactive Entertainment LLC",
    "😉 NTT Data Corporation",
    "🤩 Tata Consultancy Services Ltd. (TCS)",
    "😇 Infosys Ltd.",
    "🥳 Wipro Ltd.",
    "😄 HCL Technologies Ltd.",
    "😊 Tech Mahindra Ltd.",
    "😃 Cognizant Technology Solutions Corp.",
    "🙂 Capgemini SE",
    "😁 Accenture plc",
    "😆 IBM India Private Limited",
    "😎 Microsoft India Private Limited",
    "😍 Amazon Web Services Inc.",
    "😉 Google LLC",
    "🤩 Oracle India Private Limited",
    "😇 Cisco Systems India Private Limited",
    "🥳 Dell India Pvt. Ltd.",
    "😄 HP India Sales Pvt. Ltd.",
    "😊 Adobe Systems India Pvt. Ltd.",
    "😃 Intel Technology India Pvt. Ltd.",
    "🙂 Nokia Solutions and Networks India Pvt. Ltd.",
    "😁 Huawei Telecommunications (India) Co. Pvt. Ltd.",
    "😆 Panasonic India Pvt. Ltd.",
    "😎 Samsung India Electronics Pvt. Ltd.",
    "😍 Sony India Pvt. Ltd.",
    "😉 Lenovo India Pvt. Ltd.",
    "🤩 Hitachi India Pvt. Ltd.",
    "😇 Fujitsu India Pvt. Ltd.",
    "🥳 SAP India Pvt. Ltd.",
    "😄 VMware Software India Pvt. Ltd.",
    "😊 Intuit India Software Solutions Pvt. Ltd.",
    "😃 Salesforce.com India Pvt. Ltd.",
    "🙂 Workday Software India Pvt. Ltd.",
    "😁 ServiceNow India Development Center Pvt. Ltd.",
    "😆 Square India Pvt. Ltd.",
    "😎 Adobe Systems Software Ireland Ltd.",
    "😍 VMware International Ltd.",
    "😉 Microsoft Ireland Operations Ltd.",
    "🤩 Intel Shannon Ltd.",
    "😇 Oracle EMEA Ltd.",
    "🥳 Google Ireland Ltd.",
    "😄 Amazon Data Services Ireland Ltd.",
    "😊 IBM Ireland Limited",
    "😃 Apple Distribution International Ltd.",
    "🙂 Facebook Ireland Ltd.",
    "😁 Samsung Electronics Europe Logistics B.V.",
    "😆 Fujitsu Services Holdings Plc",
    "😎 Capgemini Technology Services India Ltd.",
    "😍 Accenture Solutions Pvt. Ltd.",
    "😉 Tech Mahindra Business Services Ltd.",
    "🤩 Cognizant Technology Solutions India Pvt. Ltd.",
    "😇 Tata Consultancy Services Asia Pacific Pte. Ltd.",
    "🥳 Infosys Technologies Ltd.",
    "😄 Wipro Technologies Ltd.",
    "😊 HCL Technologies India Pvt. Ltd.",
    "😃 NTT Data Global Delivery Services Pvt. Ltd."
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) =>
        activeIndex === companyNames.length - 1 ? 0 : activeIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [companyNames.length]);



  return (
    <div className="home-container">
      <h1 className="look">OUR PARTNERS!</h1>
      <div className="company-card">
        <div >
          <im className="look1"
           
            src={[companyNames[activeIndex]]}
           
          />
        </div>
        <div className="company-name">{companyNames[activeIndex]}</div>
      </div>
    </div>
  );
};

export default Home1;






/*import React, { useState, useEffect } from "react";
import "./Home1.css";

const Home1 = () => {
  const companyNames = [
    "😊 Tencent Holdings",
    "😃 JD.com",
    "🙂 Baidu, Inc",
    "😊 Tencent Holdings",
    "😃 JD.com",
    "🙂 Baidu, Inc",
    "😄 Xiaomi Corporation",
    "😁 NEC Corporation",
    "😆 Hitachi, Ltd.",
    "😎 Mitsubishi  Corporation",
    "😍 Fujifilm Holdings Corporation",
    "😉 Brother Industries, Ltd.",
    "🤩 Canon Inc.",
    "😇 Ricoh Company, Ltd.",
    "🥳 Lexmark International, Inc.",
    "😄 Xerox Corporation",
    "😊 Symantec Corporation ",
    "😃 McAfee",
    "🙂 Check Point Software Technologies",
    "😄 Palo Alto Networks",
    "😁 Intellectsoft",
    "😆 Atos SE",
    "😎 NTT Data Corporation",
    "😍 CGI Inc.",
    "😉 Accenture",
    "🤩 Deloitte",
    "😇 PricewaterhouseCoopers (PwC)",
    "🥳 Ernst & Young (EY)",
    "😄 KPMG International",
    "😊 Infosys Limited",
    "😃 Tata Consultancy Services (TCS)",
    "🙂 IBM",
    "😁 Microsoft",
    "😆 Amazon Web Services",
    "😎 Google",
    "😍 Oracle Corporation",
    "😉 Salesforce",
    "🤩 Cisco Systems",
    "😇 Adobe Inc."
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) =>
        activeIndex === companyNames.length - 1 ? 0 : activeIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [companyNames.length]);

  return (
    <div className="code124">
     
        {companyNames.map((name, index) => (
          <div
            className={index === activeIndex ? "slide active" : "slide"}
            key={index}
          >
            <h1 className="co"> {name}</h1>
           
          </div>
        ))}
      </div>
     
  );
};

export default Home1;*/










/*import React, { useState, useEffect } from "react";
import "./Home1.css";

const Home1 = () => {
  const companyNames = [
    "😊 Tencent Holdings",
    "😃 JD.com",
    "🙂 Baidu, Inc",
    "😄 Xiaomi Corporation",
    "😁 NEC Corporation",
    "😆 Hitachi, Ltd.",
    "😎 Mitsubishi  Corporation",
    "😍 Fujifilm Holdings Corporation",
    "😉 Brother Industries, Ltd.",
    "🤩 Canon Inc.",
    "😇 Ricoh Company, Ltd.",
    "🥳 Lexmark International, Inc.",
    "😄 Xerox Corporation",
    "😊 Symantec Corporation ",
    "😃 McAfee",
    "🙂 Check Point Software Technologies",
    "😄 Palo Alto Networks",
    "😁 Intellectsoft",
    "😆 Atos SE",
    "😎 NTT Data Corporation",
    "😍 CGI Inc.",
    "😉 Accenture",
    "🤩 Deloitte",
    "😇 PricewaterhouseCoopers (PwC)",
    "🥳 Ernst & Young (EY)",
    "😄 KPMG International",
    "😊 Infosys Limited",
    "😃 Tata Consultancy Services (TCS)",
    "🙂 IBM",
    "😁 Microsoft",
    "😆 Amazon Web Services",
    "😎 Google",
    "😍 Oracle Corporation",
    "😉 Salesforce",
    "🤩 Cisco Systems",
    "😇 Adobe Inc."
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex === companyNames.length - 1 ? 0 : activeIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="code1">
     
      <div className="slider-containers">
     
        {companyNames.map((name, index) => (
          <div className={index === activeIndex ? "slide active" : "slide"} key={index}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home1;


*/