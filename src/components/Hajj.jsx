import React from "react";
import { useParams } from "react-router-dom";

const Hajj = () => {
  const { id } = useParams();
  const pillars = {
    5: {
      title: "Hajj",
      description:
        "Hajj, the pilgrimage to Mecca, is one of the Five Pillars of Islam.",
      content: [
        {
          subtitle: "Significance",
          content:
            "Hajj is a mandatory religious duty for Muslims who are physically and financially able to undertake it.",
        },
        {
          subtitle: "Rituals",
          content:
            "It involves several rituals, symbolizing unity, equality, and submission to the will of Allah.",
        },
        {
          subtitle:
            "More information about Hajj will be added, InshaAllah, soon...........",
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

export default Hajj;
