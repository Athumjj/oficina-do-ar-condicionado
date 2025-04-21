import { FaFacebook, FaWaze, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[50%] bg-cyan-600 flex justify-center">
        <h1 className="absolute text-4xl text-white font-bold top-10 text-center">OFICINA DO AR CONDICIONADO</h1>
        <h3 className="absolute text-2xl md:text-3xl text-white top-25 mt-5 md:mt-0 text-center">Vendas de Equipamentos</h3>
        <img src="/logo.png" alt="logo" className="absolute top-35"/>
      </div>
      <div className="hidden md:block">
        <div className="absolute w-full text-white flex flex-row gap-x-4 justify-center bottom-15">
          <a href="https://wa.me/5519999185602" target="_blank"><button className="px-12 py-2 bg-green-600 rounded-md shadow font-bold"><FaWhatsapp className="size-22"/> WhatsApp</button></a>
          <a href="https://www.facebook.com/share/1BS5j2acrC/" target="_blank"><button className="px-12 py-2 bg-blue-900 rounded-md shadow font-bold"><FaFacebook className="size-22"/> Facebook</button></a>
          <a href="https://waze.com/ul?ll=-22.6046620, -47.4162390&navigate=yes" target="_blank"><button className="px-12 py-2 bg-blue-500 rounded-md shadow font-bold"><FaWaze className="size-22"/> Waze</button></a>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="absolute w-full text-white flex flex-col gap-y-4 justify-center items-center bottom-10">
          <a href="https://wa.me/5519999185602" target="_blank"><button className="px-12 py-2 w-50 bg-green-600 rounded-md shadow font-bold flex justify-center items-center"><FaWhatsapp className="size-11 mr-2"/> WhatsApp</button></a>
          <a href="https://www.facebook.com/share/1BS5j2acrC/" target="_blank"><button className="px-12 py-2 w-50 bg-blue-900 rounded-md shadow font-bold flex justify-center items-center"><FaFacebook className="size-11 mr-2"/> Facebook</button></a>
          <a href="https://waze.com/ul?ll=-22.6046620, -47.4162390&navigate=yes" target="_blank"><button className="px-12 py-2 w-50 bg-blue-500 rounded-md shadow font-bold flex justify-center items-center"><FaWaze className="size-11 mr-2"/> Waze</button></a>
        </div>
      </div>
    </div>
  )
}

export default App;
