import Head from "next/head";
import React from "react";
import image from "/public/media/Group 63.png";
import mainImage from "/public/media/b1.jpg";
import { NextSeo } from "next-seo";

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

      <meta
        name="google-site-verification"
        content="1v7glY_hKK9voGf0gtY3VFInBqFisba9M8LTPiQ0-2A"
      />

      <meta property="og:title" content="ViewVilla" />
      <meta
        property="og:description"
        content="Bizning ajoyib dachalarimzda hashamatli dam oling. Yuqori darajadagi qulayliklari va hayratlanarli manzaralari bilan bizning ajoyib dachamizni ijaraga oling. Hoziroq orzuingizdagi dachani bron qiling!
        
        Experience luxury and relaxation at our stunning villas. Rent our exquisite vacation homes with top-notch amenities and breathtaking views. Book your dream villa today!"
      />
      <meta property="og:image" itemProp="image" content={mainImage.src} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:url" content="https://www.viewvilla.uz" />
      <meta property="og:type" content="website" />

      <NextSeo
        title="ViewVilla"
        description="Bizning ajoyib dachalarimzda hashamatli dam oling. Yuqori darajadagi qulayliklari va hayratlanarli manzaralari bilan bizning ajoyib dachamizni ijaraga oling. Hoziroq orzuingizdagi dachani bron qiling!"
        openGraph={{
          title: "ViewVilla",
          description:
            "Bizning ajoyib dachalarimzda hashamatli dam oling. Yuqori darajadagi qulayliklari va hayratlanarli manzaralari bilan bizning ajoyib dachamizni ijaraga oling. Hoziroq orzuingizdagi dachani bron qiling!",
          images: [
            {
              url: mainImage.src,
              alt: "ViewVilla: seo image",
            },
          ],
          locale: "uz-Uz",
        }}
      />
    </Head>
  );
}

export default SEO;
