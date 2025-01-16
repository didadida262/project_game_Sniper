/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-25 01:16:22
 * @LastEditors: didadida262
 * @LastEditTime: 2025-01-16 15:49:07
 */
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { useTranslation, switchLanguage } from "@/i18n";
import ButtonTheme from "@/components/Theme/ButtonTheme";
import customToast from "@/components/customToast";

import SniperComp from "./sniper";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const { t } = useTranslation();
  useEffect(() => {
    // customToast.success("Mounted success!");
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
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
      <SniperComp />
    </div>
  );
}

export default App;
