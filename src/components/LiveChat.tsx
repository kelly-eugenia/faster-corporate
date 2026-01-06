import { useEffect } from "react";

export default function LiveChat() {
  useEffect(() => {
    if (document.getElementById("tidio-script")) return;

    const script = document.createElement("script");
    script.src = "//code.tidio.co/wapkrv0v3faazxmbosbfby29aapbklua.js";
    script.async = true;
    script.id = "tidio-script";
    document.body.appendChild(script);
  }, []);

  return null;
}
