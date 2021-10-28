import React from "react";

import { Spin, ShareCard } from "../index";
import "./SharesList.scss";

const SharesList = ({shares}) => {


  if (!shares.length) {
    return <Spin />;
  }

  return (
    <section className="section_shares">
      <ul className="shares__list">
        {shares.map((shareInfo) => (
          <li className="share" key={shareInfo.id}>
            <ShareCard card={shareInfo} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SharesList;
