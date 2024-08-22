import Hero from '../Components/Hero';
import GetData from '../Components/GetData';
import Exclusive from '../Components/Exclusive';
import ExclusiveOffers from '../Components/ExclusiveOffers';
function Shop() {
  return (
    <div>
      <Hero />
      <GetData endPoint={'popularwomen'}>Popular In Women</GetData>
      <Exclusive />
      <GetData endPoint={'newcollection'}>New Collection</GetData>
      <ExclusiveOffers />
    </div>
  );
}

export default Shop;
