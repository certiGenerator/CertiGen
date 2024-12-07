// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./event.css";

// const Event = () => {
//   const [templates, setTemplates] = useState([]);
//   const [svgContent, setSvgContent] = useState("");

//   useEffect(() => {
//     const fetchTemplates = async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/api/templates");
//         const templateNames = res.data.map((name) => ({ name, content: null }));

//         const fetchPreviews = await Promise.all(
//           templateNames.map(async (template) => {
//             try {
//               const previewRes = await axios.get(
//                 `http://localhost:8000/templates/${template.name}`,
//                 { responseType: "text" }
//               );
//               return { ...template, content: previewRes.data };
//             } catch (err) {
//               console.error(`Error fetching preview for ${template.name}:`, err);
//               return template; // Return without content in case of error
//             }
//           })
//         );

//         setTemplates(fetchPreviews);
//       } catch (err) {
//         console.error("Error fetching templates:", err);
//       }
//     };

//     fetchTemplates();
//   }, []);

//   const handleTemplateSelect = (templateName) => {
//     axios
//       .get(`http://localhost:8000/api/templates/${templateName}`, {
//         responseType: "text",
//       })
//       .then((res) => {
//         console.log(`Full SVG content for ${templateName}:`, res.data);
//         setSvgContent(res.data);
//       })
//       .catch((err) => {
//         console.error(`Error fetching full SVG for ${templateName}:`, err);
//       });
//   };

//   return (
//     <div className="container">
//       <header className="header">
//         <div className="logo">
//           <div className="logo-icon">🔵</div>
//           <h1>CertiGen</h1>
//         </div>
//         <div className="account">ACCOUNT</div>
//       </header>
//       <main className="main">
//         <h2>Pick Your Perfect Certificate Template!</h2>
//         <div className="template-grid">
//           {templates.length > 0 ? (
//             templates.map((template) => (
//               <div className="template-card" key={template.name}>
//                 {template.content ? (
//                   <>
//                     <div
//                       className="template-card-preview"
//                       dangerouslySetInnerHTML={{ __html: template.content }}
//                     />
//                     <button onClick={() => handleTemplateSelect(template.name)}>
//                       {/* Use {template.name.replace(".svg", "")} */}
//                       <div
//       className="button-svg-preview"
//       dangerouslySetInnerHTML={{ __html: template.content }}
//     />
//                     </button>
//                   </>
//                 ) : (
//                   <p>Loading {template.name}...</p>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p>No templates available</p>
//           )}
//         </div>
//         {svgContent && (
//           <div
//             className="template-editor"
//             dangerouslySetInnerHTML={{ __html: svgContent }}
//           />
//         )}
//       </main>
//     </div>
//   );
// };

// export default Event;


import React, { useEffect, useState } from "react";
import axios from "axios";

const Event = () => {
  const [templates, setTemplates] = useState([]);
  const [svgContent, setSvgContent] = useState("");

  // Fetch template list from backend
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/templates")
      .then((res) => {
        console.log("Templates fetched:", res.data); // Log the data
        setTemplates(res.data);
      })
      .catch((err) => {
        console.error("Error fetching templates:", err);
      });
  }, []);

  const getTemplatePreview = (templateName) => {
    axios
      .get(`http://localhost:8000/templates/${templateName}`, { responseType: "text" })
      .then((res) => {
        // Store the SVG content with the template name
        setTemplates((prev) =>
          prev.map((template) =>
            template === templateName ? { name: templateName, content: res.data } : template
          )
        );
      })
      .catch((err) => {
        console.error(`Error fetching preview for ${templateName}:`, err);
      });
  };
  
  // Fetch preview for all templates after the initial fetch
  useEffect(() => {
    templates.forEach((template) => getTemplatePreview(template));
  }, [templates]);

  // Fetch and display selected template
  const handleTemplateSelect = (templateName) => {
    axios
      .get(`http://localhost:8000/templates/${templateName}`, { responseType: "text" })
      .then((res) => {
        console.log("SVG content fetched:", res.data); // Log the data
        setSvgContent(res.data);
      })
      .catch((err) => {
        console.error("Error fetching SVG content:", err);
      });
  };

  return (
    <div>
      <h1>Certificate Editor</h1>
      <div>
        <h2>Choose a Template</h2>
        {templates.length > 0 ? (
    templates.map((template) =>
      template.content ? (
        <div key={template.name} style={{ margin: "10px", display: "inline-block" }}>
          <div dangerouslySetInnerHTML={{ __html: template.content }} />
          <button onClick={() => handleTemplateSelect(template.name)}>
            Use {template.name.replace(".svg", "")}
          </button>
        </div>
      ) : (
        <p key={template}>Loading {template.name}...</p>
      )
    )
  ) : (
    <p>No templates available</p>
  )}
      </div>

      <div>
        {svgContent && (
          <div
            dangerouslySetInnerHTML={{ __html: svgContent }}
            style={{ border: "1px solid #ccc", padding: "20px", marginTop: "20px" }}
          />
        )}
      </div>
    </div>
  );
};

export default Event;
