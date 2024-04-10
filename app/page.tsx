import Info from "./components/Info";
import Option from "./components/Option";
import Type from "./components/Type";
import Shares from "./components/Shares";
import TradeValue from "./components/TradeValue";
import Buy from "./components/Buy";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex w-screen justify-center">
      <div className="w-[410px] h-[845.93px] flex flex-col border-[#352F3D] rounded-3xl p-5 gap-6 bg-[#2A2136]"> 
      <Option/>
      <Info/>
      <Type/>
      <hr className="border-[#352F3D]"/>
      <Shares/>
      <hr className="border-[#352F3D]"/>
      <TradeValue/>
      <Buy/>
      <Footer/>
        </div>
    </div>
  );
}
