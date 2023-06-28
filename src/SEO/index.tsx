import Head from "next/head";
import React from "react";
import image from "/public/media/Group 63.png";
function SEO() {
  return (
    <Head>
      <title>ViewVilla</title>
      <link rel="icon" type="image/png" href={image.src} />

      <meta
        name="description"
        content="Bizning ajoyib dachalarimzda hashamatli dam oling. Yuqori darajadagi qulayliklari va hayratlanarli manzaralari bilan bizning ajoyib dachamizni ijaraga oling. Hoziroq orzuingizdagi dachani bron qiling!

        Experience luxury and relaxation at our stunning villas. Rent our exquisite vacation homes with top-notch amenities and breathtaking views. Book your dream villa today!"
      />
      <meta
        name="keywords"
        content="viewvilla vewvilla view-villa viewvillauz viewvilla.uz dacha dachauz dacha.uz sijje sijjak tog villa  luxury villas, vacation homes, villa rentals, exquisite villas, luxury vacation rentals, villa accommodations, premium villas, luxurious retreats, stunning views, top-notch amenities, dream vacations"
      />

      <meta property="og:title" content="ViewVilla" />
      <meta
        property="og:description"
        content="Bizning ajoyib dachalarimzda hashamatli dam oling. Yuqori darajadagi qulayliklari va hayratlanarli manzaralari bilan bizning ajoyib dachamizni ijaraga oling. Hoziroq orzuingizdagi dachani bron qiling!"
      />
      <meta property="og:image" content={image.src} />
      <meta property="og:url" content="https://www.viewvilla.uz/" />
      <meta property="og:type" content="website" />
    </Head>
  );
}

export default SEO;
