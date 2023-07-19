import "./App.css";
import FeaturedAds from "./components/FeaturedAds";
import FeaturedProducts from "./components/FeaturedProducts";
import Services from "./components/Services";
import TopNav from "./components/TopNav";
import WellnessCards from "./components/WellnessCards";

function App() {
  const bestSellers = [
    {
      id: 1,
      title: "Anti-ageing Combo",
      imageSrc: "./assets/group-18176-poT.png",
      price: "Rs. 999",
      discount: "-40%",
      msp: "Rs. 1,598",
      rating: 4.7,
    },
    {
      id: 2,
      title: "Anti-ageing Combo",
      imageSrc: "./assets/group-18176-poT.png",
      price: "Rs. 999",
      discount: "-40%",
      msp: "Rs. 1,598",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Anti-ageing Combo",
      imageSrc: "./assets/group-18176-poT.png",
      price: "Rs. 999",
      discount: "-40%",
      msp: "Rs. 1,598",
      rating: 4.7,
    },
  ];

  let months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "july",
    "aug",
    "sep",
    "okt",
    "nov",
    "dec",
  ];

  return (
    <div className="home-screen-tracker-user-M8d">
      <TopNav />
      <div className="welcome-june-GJm">
        <span className="welcome-june-GJm-sub-0">Welcome,</span>
        <span className="welcome-june-GJm-sub-1"> </span>
        <span className="welcome-june-GJm-sub-2">
          {months[new Date().getMonth()]}!
        </span>
      </div>
      <div className="auto-group-vbtt-Rcu">
        <Services />

        <WellnessCards />

        <FeaturedAds />

        <FeaturedProducts data={bestSellers} category="Bestsellers" />

        <div className="auto-group-p1u7-JKb">
          <p className="hair-care-pYq">Hair Care</p>
          <div className="frame-20353-MHs">View all</div>
        </div>
        <div className="horizontal-scroll-container">
          <div className="auto-group-fvph-R2q">
            <div className="group-19560-Xbf">
              <div className="group-18178-GZF">
                <div className="group-18176-QvM">
                  <div className="rectangle-27655-Z2Z" />
                  <div className="rectangle-27656-5Fo" />
                  <img
                    className="group-18176-CbK"
                    src="./assets/group-18176-Wzm.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="group-18369-shT">
                <img
                  className="rectangle-27652-QxH"
                  src="./assets/rectangle-27652-Y73.png"
                  alt="..."
                />
                <p className="item-40-xD7">-40%</p>
              </div>
              <img
                className="rectangle-27671-Tff"
                src="./assets/rectangle-27671-nY1.png"
                alt="..."
              />
              <p className="anti-ageing-combo-oDj">
                Anti-ageing Combo
                <br />
              </p>
              <div className="group-19559-hpu">
                <img
                  className="ic-round-star-nrM"
                  src="./assets/ic-round-star-cfs.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-vSm"
                  src="./assets/ic-round-star-uPX.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-4Yy"
                  src="./assets/ic-round-star-d8m.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-boo"
                  src="./assets/ic-round-star-jNh.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-wcm"
                  src="./assets/ic-round-star-mfw.png"
                  alt="..."
                />
              </div>
              <p className="item-47-t2D">(4.7)</p>
              <p className="rs-999-rs-1598-ndP">
                <span className="rs-999-rs-1598-ndP-sub-0">Rs. 999</span>
                <span className="rs-999-rs-1598-ndP-sub-1"> </span>
                <span className="rs-999-rs-1598-ndP-sub-2">Rs. 1,598</span>
              </p>
            </div>
            <div className="group-19130-Nzu">
              <div className="group-18178-ujw">
                <div className="group-18176-ehX">
                  <div className="rectangle-27655-Cyw">
                    <div className="rectangle-27655-Cyw-bg" />
                  </div>
                  <div className="rectangle-27656-fcd" />
                  <img
                    className="group-18176-azV"
                    src="./assets/group-18176-VQd.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="group-18369-T2h">
                <img
                  className="rectangle-27652-at1"
                  src="./assets/rectangle-27652-3eR.png"
                  alt="..."
                />
                <p className="item-40-7sw">-40%</p>
              </div>
              <img
                className="rectangle-27671-2k1"
                src="./assets/rectangle-27671-DVb.png"
                alt="..."
              />
              <p className="anti-ageing-combo-y9T">
                Anti-ageing Combo
                <br />
              </p>
              <p className="item-47-GPT">(4.7)</p>
              <p className="rs-999-rs-1598-a9F">
                <span className="rs-999-rs-1598-a9F-sub-0">Rs. 999</span>
                <span className="rs-999-rs-1598-a9F-sub-1"> </span>
                <span className="rs-999-rs-1598-a9F-sub-2">Rs. 1,598</span>
              </p>
              <div className="group-19559-NjK">
                <img
                  className="ic-round-star-4s3"
                  src="./assets/ic-round-star-o7w.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-opd"
                  src="./assets/ic-round-star-pFb.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-LpZ"
                  src="./assets/ic-round-star-HqK.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-gNd"
                  src="./assets/ic-round-star-17o.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-cn5"
                  src="./assets/ic-round-star-u77.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="group-19130-AHo">
              <div className="group-18178-WMf">
                <div className="group-18176-eyf">
                  <div className="rectangle-27655-Ah7" />
                  <img
                    className="group-18176-6Ks"
                    src="./assets/group-18176-zGZ.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="group-18369-BMK">
                <img
                  className="rectangle-27652-XAH"
                  src="./assets/rectangle-27652.png"
                  alt="..."
                />
                <p className="item-40-TJq">-40%</p>
              </div>
              <img
                className="rectangle-27671-xmP"
                src="./assets/rectangle-27671-j4M.png"
                alt="..."
              />
              <p className="anti-ageing-combo-HYm">
                Anti-ageing Combo
                <br />
              </p>
              <p className="item-47-P61">(4.7)</p>
              <p className="rs-999-rs-1598-tHf">
                <span className="rs-999-rs-1598-tHf-sub-0">Rs. 999</span>
                <span className="rs-999-rs-1598-tHf-sub-1"> </span>
                <span className="rs-999-rs-1598-tHf-sub-2">Rs. 1,598</span>
              </p>
              <img
                className="group-19559-Hj7"
                src="./assets/group-19559.png"
                alt="..."
              />
            </div>
          </div>
        </div>
        <span className="understanding-hair-UYh">
          Understanding Hair
          <span className="viewall">View all</span>
        </span>
        <div className="horizontal-scroll-container">
          <div className="auto-group-xvjj-Qoj">
            <div className="group-19569-8jj">
              <div className="frame-20286-ykM">
                <div className="group-19540-v9o">
                  <p className="groom-to-perfection-aloe-vera-hair-mask-for-mens-hair-care-1ww">
                    Groom to Perfection: Aloe Vera Hair Mask for Men's Hair Care
                  </p>
                  <p className="by-mars-by-ghc-on-jun-22-2022-6iV">
                    By Mars by GHC on Jun 22, 2022
                  </p>
                </div>
                <div className="group-19559-tuF">
                  <p className="coffee-for-hair-growth-brew-up-longer-thicker-hair-with-coffee-pH7">
                    Coffee for Hair Growth: Brew Up Longer, Thicker Hair with
                    Coffee
                  </p>
                  <p className="by-mars-by-ghc-on-jun-22-2022-Wfj">
                    By Mars by GHC on Jun 22, 2022
                  </p>
                </div>
                <div className="auto-group-t9ph-Lem">
                  <div className="group-19560-gid">
                    <p className="maximizing-hair-growth-and-health-7-benefits-of-biotin-hair-gummies-Psw">
                      Maximizing Hair Growth and Health: 7 Benefits of Biotin
                      Hair Gummies
                    </p>
                    <p className="by-mars-by-ghc-on-jun-22-2022-Vg5">
                      By Mars by GHC on Jun 22, 2022
                    </p>
                  </div>
                  <div className="group-19561-vFb">
                    <p className="vitamin-e-tabs-for-hair-get-lustrous-hair-in-no-time-EXB">
                      Vitamin E tabs for hair: Get Lustrous Hair In No Time!
                    </p>
                    <p className="by-mars-by-ghc-on-jun-22-2022-kEd">
                      By Mars by GHC on Jun 22, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="skin-care-ocD">Skin Care</p>
        <div className="horizontal-scroll-container">
          <div className="auto-group-pt9b-777">
            <div className="group-19560-Dvq">
              <div className="group-18178-NHw">
                <div className="group-18176-JxH">
                  <div className="rectangle-27655-GeD" />
                  <div className="frame-20399-o8M">
                    <img
                      className="group-18176-WoT"
                      src="./assets/group-18176.png"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="group-18369-yS9">
                <img
                  className="rectangle-27652-7oF"
                  src="./assets/rectangle-27652-2oK.png"
                  alt="..."
                />
                <p className="item-40-f45">-40%</p>
              </div>
              <img
                className="rectangle-27671-mN1"
                src="./assets/rectangle-27671-Cyo.png"
                alt="..."
              />
              <p className="anti-ageing-combo-J73">
                Anti-ageing Combo
                <br />
              </p>
              <div className="group-19559-CTK">
                <img
                  className="ic-round-star-5n1"
                  src="./assets/ic-round-star-THB.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-d2q"
                  src="./assets/ic-round-star-Jnd.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-A2m"
                  src="./assets/ic-round-star-rwj.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-uFF"
                  src="./assets/ic-round-star-FtV.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-eCq"
                  src="./assets/ic-round-star-qEh.png"
                  alt="..."
                />
              </div>
              <p className="item-47-z1o">(4.7)</p>
              <p className="rs-999-rs-1598-GV7">
                <span className="rs-999-rs-1598-GV7-sub-0">Rs. 999</span>
                <span className="rs-999-rs-1598-GV7-sub-1"> </span>
                <span className="rs-999-rs-1598-GV7-sub-2">Rs. 1,598</span>
              </p>
            </div>
            <div className="group-19130-aRF">
              <div className="group-18178-iGZ">
                <div className="group-18176-FnH">
                  <div className="rectangle-27655-p4h" />
                  <div className="frame-20399-8r5">
                    <img
                      className="group-18176-eZX"
                      src="./assets/group-18176-57o.png"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="group-18369-uVT">
                <img
                  className="rectangle-27652-dwF"
                  src="./assets/rectangle-27652-Ytq.png"
                  alt="..."
                />
                <p className="item-40-MsF">-40%</p>
              </div>
              <img
                className="rectangle-27671-GDX"
                src="./assets/rectangle-27671-ypd.png"
                alt="..."
              />
              <p className="anti-ageing-combo-Q4q">
                Anti-ageing Combo
                <br />
              </p>
              <p className="item-47-uGV">(4.7)</p>
              <p className="rs-999-rs-1598-ocm">
                <span className="rs-999-rs-1598-ocm-sub-0">Rs. 999</span>
                <span className="rs-999-rs-1598-ocm-sub-1"> </span>
                <span className="rs-999-rs-1598-ocm-sub-2">Rs. 1,598</span>
              </p>
              <div className="group-19559-nND">
                <img
                  className="ic-round-star-5MK"
                  src="./assets/ic-round-star-Luf.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-p41"
                  src="./assets/ic-round-star-KeR.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-M3w"
                  src="./assets/ic-round-star-6Cq.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-tpZ"
                  src="./assets/ic-round-star-EtZ.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-EtR"
                  src="./assets/ic-round-star-BZ3.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="group-19130-mdT">
              <div className="group-18178-Wb3">
                <div className="group-18176-FYd">
                  <div className="rectangle-27655-c8H" />
                  <div className="frame-20399-jCu">
                    <img
                      className="group-18176-qmj"
                      src="./assets/group-18176-ijT.png"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="group-18369-hJ9">
                <img
                  className="rectangle-27652-2rD"
                  src="./assets/rectangle-27652-5Tw.png"
                  alt="..."
                />
                <p className="item-40-NfB">-40%</p>
              </div>
              <img
                className="rectangle-27671-HXF"
                src="./assets/rectangle-27671-5z1.png"
                alt="..."
              />
              <p className="anti-ageing-combo-cpR">
                Anti-ageing Combo
                <br />
              </p>
              <p className="item-47-j8M">(4.7)</p>
              <p className="rs-999-rs-1598-EL1">
                <span className="rs-999-rs-1598-EL1-sub-0">Rs. 999</span>
                <span className="rs-999-rs-1598-EL1-sub-1"> </span>
                <span className="rs-999-rs-1598-EL1-sub-2">Rs. 1,598</span>
              </p>
              <img
                className="group-19559-2v5"
                src="./assets/group-19559-mLm.png"
                alt="..."
              />
            </div>
          </div>
        </div>
        <p className="skin-talk-txH">Skin - Talk</p>
        <div className="horizontal-scroll-container">
          <div className="group-19568-9jo">
            <div className="frame-20284-1X7">
              <div className="group-19540-kUh">
                <p className="surprising-benefits-of-washing-your-face-with-salt-water-51B">
                  6 Surprising Benefits of Washing Your Face with Salt Water
                </p>
                <p className="by-mars-by-ghc-on-jun-22-2022-yMT">
                  By Mars by GHC on Jun 22, 2022
                </p>
              </div>
              <div className="group-19559-bdj">
                <p className="get-clear-radiant-skin-with-these-9-benefits-of-honey-for-pimples-XGV">
                  Get Clear, Radiant Skin with these 9 Benefits of Honey for
                  Pimples
                </p>
                <p className="by-mars-by-ghc-on-jun-22-2022-2DF">
                  By Mars by GHC on Jun 22, 2022
                </p>
              </div>
              <div className="auto-group-whwu-sDs">
                <div className="group-19560-cBT">
                  <p className="everything-you-need-to-know-about-saffron-benefits-for-skin-JKB">
                    Everything you need to know about Saffron Benefits for Skin
                  </p>
                  <p className="by-mars-by-ghc-on-jun-22-2022-AsB">
                    By Mars by GHC on Jun 22, 2022
                  </p>
                </div>
                <div className="group-19561-avu">
                  <p className="natural-ways-to-remove-tan-from-hands-tRo">
                    Natural ways to remove tan from hands
                  </p>
                  <p className="by-mars-by-ghc-on-jun-22-2022-CxH">
                    By Mars by GHC on Jun 22, 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-group-xl3x-ox5">
        <div className="frame-3910-xpy">
          <img
            className="skill-icons-instagram-4t1"
            src="./assets/skill-icons-instagram.png"
            alt="..."
          />
          <div className="join-our-10k-family-on-instagram-QBB">
            Join our 10K family on Instagram
          </div>
          <img className="vector-u7w" src="./assets/vector-xc1.png" alt="..." />
        </div>
        <div className="group-19567-1Rs">
          <div className="frame-20282-LDF">
            <div className="frame-20280-V69">
              <img
                className="majesticons-home-p8R"
                src="./assets/majesticons-home-tvm.png"
                alt="..."
              />
              <p className="home-k25">Home</p>
            </div>
            <div className="frame-20281-fuj">
              <img
                className="majesticons-home-1To"
                src="./assets/majesticons-home-3AH.png"
                alt="..."
              />
              <p className="track-LFB">Track</p>
            </div>
            <div className="frame-20282-UMP">
              <img
                className="majesticons-home-QVw"
                src="./assets/majesticons-home-7Kw.png"
                alt="..."
              />
              <p className="search-Kso">Search</p>
            </div>
            <div className="frame-20283-sPX">
              <img
                className="majesticons-home-RR3"
                src="./assets/majesticons-home-gQh.png"
                alt="..."
              />
              <p className="account-9bw">Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
