import React from "react";

const Shahada = ({ id }) => {
  const pillars = {
    1: {
      title: "Shahada",
      titleArabic:
        "أشهدُ أنْ لا إلهَ إلاَّ اللهُ وأشهدُ أنَّ محمّداً رسولُ الله",
      description:
        "The Shahada is the declaration of faith in Islam, expressing the core belief in the oneness of God (Allah) and the prophethood of Muhammad (Peace Be Upon Him).",
      content: [
        {
          subtitle: "Pronunciation and Meaning",
          content:
            "أشهدُ أنْ لا إلهَ إلاَّ اللهُ وأشهدُ أنَّ محمّداً رسولُ الله (Pronounced as 'Ash-hadu alla ilaha illallah, wa ash-hadu anna Muhammadar-Rasulullah'). It translates to 'I testify that there is no god but Allah and I testify that Muhammad is the messenger of Allah.'",
        },
        {
          subtitle: "Importance",
          content:
            "The Shahada is the declaration of faith in Islam, expressing the core belief in the oneness of Allah (God) and the prophethood of Muhammad (Peace Be Upon Him). It is recited by Muslims as a testimony of their faith and commitment to Islam. This simple yet profound statement is the foundation of Islam and serves as a unifying creed for Muslims worldwide. Reciting the Shahada is considered a significant step in converting to Islam and is recited daily by Muslims in their prayers as a reaffirmation of their faith.",
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
        {pillar.titleArabic && (
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              marginTop: "1rem",
              fontFamily: "Georgia, serif", // You can replace this with your preferred font
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
    </div>
  );
};

export default Shahada;
