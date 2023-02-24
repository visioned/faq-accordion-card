import { Card } from "./components/Card";
import desktopBox from "./assets/illustration-box-desktop.svg";
import mobile from "./assets/illustration-woman-online-mobile.svg";

function App() {
  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-b from-[#af67e9] to-[#6565e7]">
      <div className="relative flex flex-row ">
        <Card />
        <div className="">
          <img
            src={desktopBox}
            alt=""
            className="hidden lg:block absolute h-[190px] bottom-[115px] left-[-102px] animate-bounce z-30"
          />
          <img
            src={mobile}
            alt=""
            className="lg:hidden absolute h-[165px] w-auto top-[-115px] left-[50px] animate-bounce z-30"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
