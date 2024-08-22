import React from "react";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";

const HomePage = () => {
  const products = [
    {
      type: "MEN",
      image:
        "https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gd~4gG1PmD8cyuZ7DRoxPnXXdwZlLitoA9OayAxMujM7JFHvSOkA2xXp~igxm-LYInHt4mj1mlSLS2rTwcU3RzdUxIoIBK2-W0Ihe7hUgL1oQqLRRx1-13ANaJnxyD6ttirDK4dN1~bNe0jrECMFQaUJFmqsu-aK4Yw2X54PMiPCGUwHtW11dQQ2fRe9fN01Xu8F-fctWEihyA9R8Q2ohjdxzfaHJOoyKfIcsrr3KQANWLkAdVCai~2MBAG72tq~qCsoTGUTWE9HqE6hCFpW35H-kKAGinw7dwGW5UsYcidlZzW8hwSjlO~Ih4p9vJAV-qta6-aky8VkX-a0x1R~6Q__",
    },
    {
      
      type: "WOMEN",
      image:
        "https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2fwSY7nyNeNo9g~MnLMSm0oBDHl2HaL8LuXWuJUOc21sJALSI5QIqbmR84h0YKVssgYllwNozxegfdeajh3u5LzvSLS5Td7IV~1nY~j2zV8Gz9qr51LiRcEPXhShGr~UbBaDg~sia0FszzK28q9dxFAfIM9eokys6~CWfOAJz4ubj6aPSEi5TGUKBXlr7y0hscewTyTPGEAQX2CykMkC1lGGal33K08fa-BAFKyDB2rh-EI-2sjPfyY2alOY5h3ihR0uKJzDYuIg1Nvoy5g5xJheZjc5DEWWniv0fc1IM3Rfjibhk-UrY~Moj8xv9twdEdAY5I38Brkn4LsUSNFXQ__",
    },

    {
      type: "ACCESSORIES",
      image:
        "https://s3-alpha-sig.figma.com/img/5077/f785/cbfd4a6cf9efad13d9b5d66b1b7cbf4f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Li1ugHt-zWlsmkj0f3R~8L8ccgroPRHdcknxZ6IAT6g6WfNy695aRUKndZq8g~4G3I8BQiJCFKsLekmnJn-mn9lU1C2iCL2IVW3SUXtu8goBRJIw~HgHpHAsNt659mJJ8EYDkC1WxKP7xwDRUBnHd2u37PXMf0xlNNNA5Qj5kRomLW0TPoFabsTiJKxoyubG6bpfkOPkcy74LM-QXJorkrMCZZbyJ2ZP1SM9FlrUhH12EzogmhyVs~Qwp9RXm34uPZX6DkYEZr9~CA1XSthffz55T0A6csI1RWJiSuTtqrbQDVCKejgkyCGsOQVNeEW~B6izRoppjfPcgyN~4UALhA__",
    },

    {
      type: "KIDS",
      image:
        "https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PnLLx4e2YXOtp1T6VFoLbLgIhS8TZo4jxuIX6MVep-3ibnAJEa224KCXxYvOLk1pv~Sepd8ZJGWFVQzcTTgY2DO1JiNucr8JU7DPamsAxHrcsLybH9ZF1raG5~PhbQcyfWYzUafE95R3pkYp0llwmg-i~XBQBjGNaxV56bGV7JkmG7E~ebubnOjg43PagwOsjrOYl9yoVGz7ZIDEHst2aWHRRMwXkJnApUp5yOaY7fQiMhCTFprqZQEpy838S~AYqARMj6EURqenoe718PSAPpciF0NaweP2PPxPlR5Id4u1q20unfClnAXXnCOf9kH1nqSb6Mi9uxfTex6K9FDGBA__",
    },

    // Diğer ürünler
  ];

  const images = [
    "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1XpbFO7vfiRfiRjXyyZzu0dU95lTk1WcwLQrxHshnTtVyKOduYMExKOnBwjFDuuds2PK1yV0OXwxGlPa0TMEZx~vlCNBr8k7GqgItyp~dwujZU-ZQ0AJmFvl55iNdhgSbkmMCCBRYgnAqN6NjCr2SdDYonl-l5bH4lUH0pB3z0Ew2sFOi-R7AgTfoaC7HcYPhpfwQXvDQCzLo-YKBpZjaGrFsgENlWmtmXf5G~m7SCONXnrOf6rGVrNH-TJppu-A2k7tVBl8huhyUvqOdNR0DiNWOwGD~f2CBObTcFWarf68kjVOeuphDuQmpwiNZvufVTFFS~YtJrsKlgnACmHBA__",
    "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1XpbFO7vfiRfiRjXyyZzu0dU95lTk1WcwLQrxHshnTtVyKOduYMExKOnBwjFDuuds2PK1yV0OXwxGlPa0TMEZx~vlCNBr8k7GqgItyp~dwujZU-ZQ0AJmFvl55iNdhgSbkmMCCBRYgnAqN6NjCr2SdDYonl-l5bH4lUH0pB3z0Ew2sFOi-R7AgTfoaC7HcYPhpfwQXvDQCzLo-YKBpZjaGrFsgENlWmtmXf5G~m7SCONXnrOf6rGVrNH-TJppu-A2k7tVBl8huhyUvqOdNR0DiNWOwGD~f2CBObTcFWarf68kjVOeuphDuQmpwiNZvufVTFFS~YtJrsKlgnACmHBA__",
    "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1XpbFO7vfiRfiRjXyyZzu0dU95lTk1WcwLQrxHshnTtVyKOduYMExKOnBwjFDuuds2PK1yV0OXwxGlPa0TMEZx~vlCNBr8k7GqgItyp~dwujZU-ZQ0AJmFvl55iNdhgSbkmMCCBRYgnAqN6NjCr2SdDYonl-l5bH4lUH0pB3z0Ew2sFOi-R7AgTfoaC7HcYPhpfwQXvDQCzLo-YKBpZjaGrFsgENlWmtmXf5G~m7SCONXnrOf6rGVrNH-TJppu-A2k7tVBl8huhyUvqOdNR0DiNWOwGD~f2CBObTcFWarf68kjVOeuphDuQmpwiNZvufVTFFS~YtJrsKlgnACmHBA__",
  ];

  return (
    <div>
      <Slider images={images} />
      <div className="grid grid-cols-1 gap-4 mt-4 ">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
