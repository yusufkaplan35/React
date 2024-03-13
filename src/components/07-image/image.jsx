import React from 'react'
import imageFrontend from "./frontend.jpg";
import imageHome from "./home.svg";
import imageSalesForce from "./salesforce.png";
const Image = () => {
  return (
    <div>
        <h2>Static images</h2>
        <p>Eger image ler public klasoru icindeyse ve herhangi bir optimizasyona ihtiyac yoksa bu yontem kullanilabilir</p>
        <img src="img/vite.svg" alt=""/>
        <h2>Dynamic image imports</h2>
        <p>
            Image nerede olursa olsun import edilebilir. 
            Eger image boyutu 10Kb ve altindaysa resim dosyasi base64 olarak kodlanip javascrript icine alinir. Diger durumlarda image public klasoru icine kaydedilir.
            Bu islemler npm run build ve npm run preview islemleri sonucunda gorulebilir. development ortaminda optimizasyon gerceklesmez
        </p>
        <img src={imageFrontend} alt=""/>
        <img src={imageHome} alt=""/>
        <img src={imageSalesForce} alt=""/>
        <img src="data:image/png;base64,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" alt=""/>
        
    </div>
  )
}
export default Image