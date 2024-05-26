import React from "react";
import { useParams } from "react-router-dom";

const Zakat = () => {
  const { id } = useParams();
  const pillars = {
    4: {
      title: "Zakat",
      description: "Zakat is the giving of charity to help those in need.",
      content: [
        {
          subtitle: "Meaning",
          content:
            "Zakat is an obligatory act of worship for Muslims, typically involving donating about 2.5% of one's wealth annually.",
        },
        {
          subtitle: "Purpose",
          content:
            "Zakat aims to purify wealth and assist the less fortunate, fostering a sense of compassion and social responsibility within the Muslim community.",
        },
        {
          subtitle:
            "More information about Zakat will be added, InshaAllah, soon...........",
        },
      ],
    },
  };

  const pillar = pillars[id];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif", // You can replace this with your preferred font
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "800px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            marginTop: "2rem",
            fontFamily: "Georgia, serif", // You can replace this with your preferred font
          }}
        >
          {pillar.title}
        </h2>
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
    </div>
  );
};

export default Zakat;
