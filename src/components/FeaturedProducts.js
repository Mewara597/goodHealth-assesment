export default function FeaturedProducts({ category, data }) {
  return (
    <>
      <div className="auto-group-hzly-5kV">
        <p className="bestsellers-biq">{category}</p>
        <div className="frame-20313-iYZ">View all</div>
      </div>
      <div className="horizontal-scroll-container">
        <div className="auto-group-hrpb-m13">
          {data.map(({ id, discount, title, imageSrc, rating, price, msp }) => (
            <div key={id} className="group-19130-HVB">
              <div className="group-18178-pED">
                <div className="group-18176-ZBo">
                  <div className="rectangle-27655-uFf" />
                  <div className="rectangle-27656-cfs" />
                  <div className="frame-20399-88R">
                    <img className="group-18176-e6m" src={imageSrc} alt="..." />
                  </div>
                </div>
              </div>
              <div className="group-18369-gJM">
                <img
                  className="rectangle-27652-DZB"
                  src="./assets/rectangle-27652-7TP.png"
                  alt="..."
                />
                <p className="item-40-Xpm">{discount}</p>
              </div>
              <img
                className="rectangle-27671-SB3"
                src="./assets/rectangle-27671-7qB.png"
                alt="..."
              />
              <p className="anti-ageing-combo-Asj">
                {title}
                <br />
              </p>
              <p className="item-47-5E1">({rating})</p>
              <p className="rs-999-rs-1598-Nyo">
                <span className="rs-999-rs-1598-Nyo-sub-0">{price}</span>
                <span className="rs-999-rs-1598-Nyo-sub-1"> </span>
                <span className="rs-999-rs-1598-Nyo-sub-2">{msp}</span>
              </p>
              <div className="group-19559-W6M">
                <img
                  className="ic-round-star-znD"
                  src="./assets/ic-round-star-P8d.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-vA5"
                  src="./assets/ic-round-star-ue9.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-rpR"
                  src="./assets/ic-round-star-bGm.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-bX7"
                  src="./assets/ic-round-star-aBT.png"
                  alt="..."
                />
                <img
                  className="ic-round-star-9Hj"
                  src="./assets/ic-round-star-mTF.png"
                  alt="..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
