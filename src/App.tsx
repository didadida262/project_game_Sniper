import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { useTranslation, switchLanguage } from "@/i18n";
import ButtonTheme from "@/components/Theme/ButtonTheme";
import customToast from "@/components/customToast";

import { ButtonCommon, EButtonType } from "./components/ButtonCommon";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const { t } = useTranslation();
  useEffect(() => {
    customToast.success("Mounted success!");
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center text-green-500 bg-bgPrimaryColor">
      <ToastContainer
        theme="dark"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        draggable={false}
        pauseOnHover={false}
        // className="toast-container"
        // toastClassName="dark-toast"
      />
      <span>{t("slogan")}</span>
      <ButtonCommon
        type={EButtonType.SIMPLE}
        onClick={() => {
          const lan = localStorage.getItem("language");
          switchLanguage(lan === "zh" ? "en-US" : "zh");
        }}
      >
        <span>切换语言</span>
      </ButtonCommon>
      <ButtonTheme />
    </div>
  );
}

export default App;
