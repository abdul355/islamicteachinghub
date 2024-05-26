import React from "react";
import { useParams } from "react-router-dom";
import Shahada from "./Shahada";
import Salah from "./Salah";
import Sawm from "./Sawm";
import Zakat from "./Zakat";
import Hajj from "./Hajj";

const PillarDetails = () => {
  const { id } = useParams();
  const pillars = {
    1: Shahada,
    2: Salah,
    3: Sawm,
    4: Zakat,
    5: Hajj,
  };

  const pillar = pillars[id];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "84vh",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
      }}
    >
      {id === "1" ? (
        <Shahada id={id} />
      ) : id === "2" ? (
        <Salah id={id} />
      ) : id === "3" ? (
        <Sawm id={id} />
      ) : id === "4" ? (
        <Zakat id={id} />
      ) : id === "5" ? (
        <Hajj id={id} />
      ) : (
        <div style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {pillar.title}
          </h2>
          {pillar.titleArabic && (
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                marginTop: "1rem",
              }}
            >
              {pillar.titleArabic}
            </h3>
          )}
          <p
            style={{
              fontSize: "1.6rem",
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            {pillar.description}
          </p>
          {pillar.content && (
            <div style={{ textAlign: "left" }}>
              {pillar.content.map((item, index) => (
                <div key={index}>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "0.5rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    {item.subtitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.3rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.content}
                  </p>
                  {item.items && (
                    <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                      {item.items.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          style={{ marginBottom: "5px", fontSize: "18px" }}
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <footer
        style={{
          marginTop: "auto",
          textAlign: "center",
          paddingTop: "20px",
          borderTop: "1px solid #ccc",
          width: "100%",
        }}
      >
        {/* Your footer content here */}
      </footer>
    </div>
  );

  //   const pillar = pillars[id];

  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         minHeight: "84vh",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         padding: "0 20px",
  //       }}
  //     >

  //       <div style={{ textAlign: "center", maxWidth: "800px" }}>
  //         <h2
  //           style={{
  //             fontSize: "2.5rem",
  //             marginBottom: "1.5rem",
  //             marginTop: "2rem",
  //           }}
  //         >
  //           {pillar.title}
  //         </h2>
  //         {pillar.titleArabic && (
  //           <h3
  //             style={{
  //               fontSize: "1.5rem",
  //               marginBottom: "1.5rem",
  //               marginTop: "1rem",
  //             }}
  //           >
  //             {pillar.titleArabic}
  //           </h3>
  //         )}
  //         <p
  //           style={{
  //             fontSize: "1.6rem",
  //             lineHeight: "1.8",
  //             textAlign: "center",
  //           }}
  //         >
  //           {pillar.description}
  //         </p>
  //         {pillar.content && (
  //           <div style={{ textAlign: "left" }}>
  //             {pillar.content.map((item, index) => (
  //               <div key={index}>
  //                 <h3
  //                   style={{
  //                     fontSize: "1.3rem",
  //                     marginBottom: "0.5rem",
  //                     marginTop: "1.5rem",
  //                   }}
  //                 >
  //                   {item.subtitle}
  //                 </h3>
  //                 <p
  //                   style={{
  //                     fontSize: "1.3rem",
  //                     lineHeight: "1.6",
  //                   }}
  //                 >
  //                   {item.content}
  //                 </p>
  //                 {item.items && (
  //                   <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
  //                     {item.items.map((subItem, subIndex) => (
  //                       <li
  //                         key={subIndex}
  //                         style={{ marginBottom: "5px", fontSize: "18px" }}
  //                       >
  //                         {subItem}
  //                       </li>
  //                     ))}
  //                   </ul>
  //                 )}
  //               </div>
  //             ))}
  //           </div>
  //         )}
  //       </div>

  //       <footer
  //         style={{
  //           marginTop: "auto",
  //           textAlign: "center",
  //           paddingTop: "20px",
  //           borderTop: "1px solid #ccc",
  //           width: "100%",
  //         }}
  //       >
  //         {/* Your footer content here */}
  //       </footer>
  //     </div>
  //   );
};

export default PillarDetails;
