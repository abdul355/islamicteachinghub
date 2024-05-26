import React from "react";

const Sawm = ({ id }) => {
  const pillars = {
    3: {
      title: "Sawm",
      description: "What is Sawm, or fasting?",
      content: [
        {
          content:
            "Fasting holds a profound significance in Islam, serving as a pillar of faith and a means of spiritual purification. Among the various forms of worship in Islam, fasting stands out as a deeply ingrained practice, emphasizing self-discipline, empathy, and devotion to Allah. Ramadan is the ninth month of the Islamic lunar calendar and holds a special place in the hearts of Muslims worldwide. It is renowned as the holiest month in Islam, distinguished by its spiritual significance, communal solidarity, and intense devotion to worship.",
        },
        {
          subtitle: "Fasting in Islam: A Pillar of Faith:",
          content:
            "Fasting, known as Sawmin Arabic, is one of the Five Pillars of Islam, alongside Shahada (declaration of faith), Salah (prayer), Zakat (charity), and Hajj (pilgrimage). It is a fundamental act of worship that Muslims are obligated to observe, demonstrating their submission to the will of Allah and their commitment to spiritual growth.",
        },
        {
          subtitle: "Purpose of Fasting: Spiritual Reflection and Discipline:",
          content:
            "The primary purpose of fasting in Islam goes beyond abstaining from food, drink, and other physical desires. It serves as a means of farming self-discipline, controlling one's desires, and developing empathy for the less fortunate. Fasting provides an opportunity for spiritual reflection, purification, and heightened consciousness of one's relationship with Allah. It offers a chance to repent for past sins, seek forgiveness, and strive for spiritual renewal. Through fasting, Muslims aim to attain Taqwa (God-consciousness), purify their souls, and draw closer to Allah.",
        },
        {
          subtitle:
            "Quranic verses outlining the obligation of fasting during Ramadan:",
          content:
            "O believers! Fasting is prescribed for you—as it was for those before you—so perhaps you will become mindful ˹of Allah˺ (2:183 QURAN).",
        },
        {
          content:
            "(Fast a) prescribed number of days. But whoever of you is ill or on a journey, then (let them fast) an equal number of days (after Ramadan). For those who can only fast with extreme difficulty, compensation can be made by feeding a needy person (for every day not fasted). But whoever volunteers to give more, it is better for them. And to fast is better for you, if only you knew. (2:184 QURAN)",
        },
        {
          content:
            "Ramaḍân is the month in which the Quran was revealed as a guide for humanity with clear proofs of guidance and the decisive authority. So whoever is present this month, let them fast. But whoever is ill or on a journey, then (let them fast) an equal number of days (after Ramadan). Allah intends ease for you, not hardship, so that you may complete the prescribed period and proclaim the greatness of Allah for guiding you, and perhaps you will be grateful. (2:185 QURAN)",
        },
        {
          content:
            "It has been made permissible for you to be intimate with your wives during the nights preceding the fast. Your spouses are a garment for you as you are for them. Allah knows that you were deceiving yourselves. So He has accepted your repentance and pardoned you. So now you may be intimate with them and seek what Allah has prescribed for you. (You may) eat and drink until you see the light of dawn breaking the darkness of night, then complete the fast until nightfall. Do not be intimate with your spouses while you are meditating in the mosques. These are the limits set by Allah, so do not exceed them. This is how Allah makes His revelations clear to people, so they may become mindful (of Him). (2:187 QURAN)",
        },

        {
          subtitle:
            "Hadiths narrated by Prophet Muhammad (peace be upon him) regarding the virtues and rewards of fasting.",
          content:
            "1: Abu Huraira reported Allah's Messenger (may peace be upon him) as saying: When there comes the month of Ramadan, the gates of mercy are opened, and the gates of Hell are locked and the devils are chained, (Sahih Muslim, Book 6 Hadith Number 2361). ",
        },
        {
          content:
            "2: Abu Huraira reported Allah's Messenger (may peace be upon him) as saying: Allah, the Majestic and the Exalted, said: Every act of the son of Adam is for him except fasting. It is done for My sake, and I will give a reward for it. By Allah in Whose Hand is the life of Muhammad, the breath of the observer of fast is sweeter to Allah than the fragrance of musk. (Sahih Muslim,Book 6, Number 2564)",
        },
        {
          content:
            "The cornerstone of fasting in Islam is abstaining from food, drink, and other physical needs from dawn (Fajr) until sunset (Maghrib). This includes refraining from smoking, sexual activity, and any behavior that may nullify the fast. Fasting extends beyond physical self-restraint and encompasses spiritual discipline, self-control, and mindfulness of Allah's commands.",
        },
        {
          subtitle: "Guidelines for Exemptions:",
          content:
            "While fasting is obligatory for most adult Muslims, certain individuals are exempted from fasting due to specific circumstances. Travelers, the sick, pregnant women, and menstruating women are among those exempted from fasting. They are required to make up for missed fasts at a later time or, if unable to do so, to provide a fidyah (compensation) as a form of charity.",
        },
        {
          subtitle: "Importance of Fulfilling Conditions:",
          content:
            "In addition to physical abstinence, fasting in Islam necessitates fulfilling certain conditions to ensure its validity. One such condition is the intention (niyyah) to fast, which should be sincere and made before dawn. The intention distinguishes fasting as an act of worship and underscores its spiritual significance. Avoiding actions that invalidate the fast is equally crucial. These include consuming food, drink, or medication intentionally, engaging in sexual activity, and deliberately inducing vomiting. It is incumbent upon fasting individuals to exercise caution and vigilance to preserve the sanctity of their fasts.",
        },
        {
          subtitle: "Spiritual Benefits of Fasting:",
          content:
            "Fasting during Ramadan serves as a means of cultivating taqwa, or God-consciousness, in the hearts of believers. By abstaining from food, drink, and other worldly pleasures, Muslims develop a heightened awareness of Allah's presence in their lives and strive to align their actions with His commands. Fasting fosters a sense of self-discipline and restraint, empowering individuals to overcome their base desires and strengthen their spiritual resolve.",
        },
        {
          content:
            "Moreover, fasting instills empathy and compassion for the less fortunate by allowing individuals to experience hunger and deprivation firsthand. This heightened awareness of the struggles of others encourages Muslims to engage in acts of charity and kindness, thereby fulfilling their obligation to support those in need and strengthen the bonds of community.",
        },
        {
          subtitle: "Additional Acts of Worship:",
          content:
            "In addition to fasting, Muslims are encouraged to engage in additional acts of worship during Ramadan to maximize its spiritual benefits. This includes performing extra prayers, such as Taraweeh, which are offered collectively in the evenings. The recitation of the Quran is also emphasized during Ramadan, with many Muslims striving to complete the entire Quran by the end of the month. Furthermore, charity (Zakat and Sadaqah) plays a significant role in Ramadan, as Muslims seek to purify their wealth and earn divine rewards by giving generously to those in need.",
        },
        {
          subtitle: "The Night of Power (Laylat al-Qadr):",
          content:
            "One of the most significant nights of Ramadan is the Night of Power (Laylat al-Qadr), which occurs during the last ten nights of the month. It is believed to be the night when the Quran was first revealed to Prophet Muhammad (peace be upon him) and is described as better than a thousand months in terms of its spiritual significance. Muslims dedicate this night to intense worship, seeking forgiveness, and supplicating to Allah for His mercy and guidance.",
        },
        {
          subtitle: "Diverse Cultural Practices and Traditions:",
          content:
            "Ramadan is celebrated in a countless of ways across different Muslim cultures and regions, each with its own unique customs and traditions. From special dishes and culinary delights to vibrant decorations and festive gatherings, Ramadan is a time of celebration and cultural expression. Muslims around the world come together to share in the spirit of Ramadan, regardless of their cultural background, creating a sense of unity and solidarity within the global Muslim community.",
        },
        {
          subtitle: "Importance of Communal Iftars and Taraweeh Prayers:",
          content:
            "Communal iftars, where Muslims gather to break their fast together at sunset, play a significant role in the social fabric of Ramadan. These gatherings provide an opportunity for friends, family, and neighbors to come together in fellowship and solidarity, sharing the blessings of the month. Similarly, Taraweeh prayers, performed in congregation during the evenings of Ramadan, foster a sense of unity and brotherhood among Muslims. These extended prayers not only strengthen one's connection with Allah but also serve as a communal act of worship that strengthens bonds within the community.",
        },
        {
          subtitle: "Strengthening Family Bonds and Fostering Community:",
          content:
            "Ramadan holds special significance for families, serving as a time for strengthening bonds and fostering a sense of togetherness. Families come together for suhoor (pre-dawn meal) and iftar, sharing meals and engaging in spiritual discussions and reflections. Children are taught the importance of fasting and encouraged to participate in acts of worship alongside their parents. Additionally, Ramadan provides an opportunity for families to engage in acts of charity and community service, instilling values of compassion, generosity, and empathy in the younger generation.",
        },
        {
          subtitle: "Embracing the Virtues of Fasting in Ramadan:",
          content:
            "Ramadan is not just a month of physical deprivation; it is a time of spiritual renewal and growth. Fasting during Ramadan is mandated in the Quran as a means of attaining righteousness and piety. It is a holistic practice that encompasses physical, spiritual, and communal dimensions, fostering self-discipline, empathy, and unity within the Muslim community.",
        },
        {
          content:
            "The observance of fasting during Ramadan yields manifold benefits for individuals and communities alike. Spiritually, fasting enables Muslims to deepen their connection with Allah, cultivate taqwa (God-consciousness), and purify their souls. Communal iftars and Taraweeh prayers foster unity and brotherhood among Muslims, strengthening the bonds of faith and solidarity.",
        },

        {
          content:
            "As Muslims, it is incumbent upon us to embrace the virtues of fasting and strive for spiritual growth during Ramadan. We must approach this blessed month with sincerity, intention, and devotion, seeking to maximize its spiritual rewards and blessings. Through fasting, prayer, Quranic recitation, and acts of charity, we can enhance our faith, deepen our spirituality, and draw closer to Allah.",
        },
        {
          content:
            "In essence, Ramadan is a time of profound reflection, gratitude, and transformation for Muslims worldwide. Let us seize the opportunity afforded by this holy month to purify our hearts, strengthen our faith, and renew our commitment to serving Allah and humanity. May our fasting be accepted, our prayers answered, and our souls uplifted during this blessed time. ",
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
            fontSize: "3.5rem",
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
                {item.subtitle && (
                  <h3
                    style={{
                      fontSize: "2rem",
                      marginBottom: "0.5rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    {item.subtitle}
                  </h3>
                )}
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

export default Sawm;
