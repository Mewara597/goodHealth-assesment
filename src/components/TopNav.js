import { useEffect } from "react";

export default function TopNav() {
  let time = new Date().getHours() + ":" + new Date().getMinutes();

  useEffect(() => {
    time = new Date().getHours() + ":" + new Date().getMinutes();
  }, [time]);

  return (
    <div className="auto-group-8bsm-94V">
      <div className="browser-bar-android-chrome-1F7">
        <div className="background-urH">
          <div className="android-status-bar-pyF">
            <div className="item-12-30-NE5">{time}</div>
            <img
              className="signal-cellular-9Gm"
              src="./assets/signal-cellular.png"
              alt="..."
            />
            <img
              className="signal-wifi-EZ7"
              src="./assets/signal-wifi.png"
              alt="..."
            />
            <img
              className="battery-full-Lc9"
              src="./assets/battery-full.png"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="item-1678952854169-1-Qc1" />
      <div className="frame-20310-gJd">
        <div className="group-20530-BWH">
          <img
            className="majesticons-home-8wK"
            src="./assets/majesticons-home.png"
            alt="..."
          />
          <div className="markhsitemcount-Sh7">1</div>
        </div>
      </div>
      <div className="frame-20398-qjF">
        <img
          className="saturn-new-logo-white-3-Mhb"
          src="./assets/saturn-new-logo-white-3.png"
          alt="..."
        />
      </div>
    </div>
  );
}
