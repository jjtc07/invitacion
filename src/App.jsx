import img2 from "./assets/img/img2.png";
import text from "./assets/img/text.png";
import location from "./assets/img/location.png";
import whatsapp from "./assets/img/whatsapp.png";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-nubes max-w-[440px] mx-auto pb-10">
      <div className="">
        <img src={img2} className="" alt="logo" />
      </div>
      <div className="  mx-8 rounded-xl px-2 text-center text-white text-2xl py-6">
        <img src={text} className="" alt="logo" />
        <p className="farsan-regular text-3xl text-black my-2 text-shadow">
          María y Jesús
        </p>

        <p className="atma-semibold text-xl text-shadow">
          Queremos que seas parte de este momento especial en nuestras vidas.
        </p>
        <p className="atma-semibold my-4 text-3xl text-shadow">
          ¡Acompáñanos en la revelación de género de nuestr♥︎ bebé!
        </p>

        <div className="flex justify-evenly">
          <div>
            <p className="text-[#E1BEE7] atma-semibold text-shadow">Sábado</p>
            <p className="roboto-bold leading-5 text-shadow">07</p>
            <p className="roboto-bold leading-5 text-shadow">DIC</p>
          </div>
          <div className="w-1 bg-amber-900"></div>
          <div>
            <p className="text-[#E1BEE7] atma-semibold text-shadow">Hora</p>
            <p className="roboto-bold leading-5 text-shadow">9:00 AM</p>
            <p className="roboto-bold leading-5 text-shadow">a 12:00 PM</p>
          </div>
        </div>

        <div className="mt-4">
          <span className="text-[#E1BEE7] atma-semibold text-shadow">
            Lugar:{" "}
          </span>
          <span className="roboto-bold text-xl text-shadow">
            CLUB PORTUGUÉS{" "}
          </span>
        </div>

        <img src={location} className="w-6 m-auto" alt="logo" />

        <a
          href="https://www.google.com/maps/place/Ent.+Club+Portugu%C3%A9s,+Ciudad+Guayana+8050,+Bol%C3%ADvar/@8.2838919,-62.7101315,17z/data=!3m1!4b1!4m6!3m5!1s0x8dcbfbbf6ceb45c7:0x7f16ec8beade1d1f!8m2!3d8.2838866!4d-62.7075566!16s%2Fg%2F11hzxjcpdd?hl=pt-PT&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="text-center px-4 py-2 bg-[#E1BEE7] rounded-xl text-base roboto-bold shadow-xl"
        >
          Ver ubicación
        </a>

        <p className="text-[#E1BEE7] atma-semibold mt-4 text-shadow">
          Vestimenta:
          <span className="roboto-bold text-xl text-white ml-3 text-shadow">
            CASUAL
          </span>
        </p>

        <a
          href="https://wa.link/a2x24y"
          target="_blank"
          rel="noreferrer"
          className="text-center px-4 py-2 bg-[#E1BEE7] rounded-xl text-base roboto-bold flex justify-center items-center mx-8 mt-8 shadow-xl"
        >
          Confirma tu asistencia aquí
          <img src={whatsapp} alt="whatsapp icon" className="w-6 ml-3" />
        </a>

        <p className="text-gray-700 atma-semibold my-4 text-lg text-shadow">
          Por favor confirmar su asistencia antes del viernes 29/11/2024.
        </p>
        <p className="text-gray-700 atma-semibold my-4 text-xl text-shadow">
          ¡Estaremos felices de contar con tu presencia!
        </p>
      </div>
    </div>
  );
}

export default App;
