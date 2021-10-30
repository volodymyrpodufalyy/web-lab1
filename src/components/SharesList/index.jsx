import React from "react";

import { ShareCard } from "../index";
import "./SharesList.scss";

const SharesList = ({ shares }) => {
  return (
    <section className="section_shares">
      {shares.length ? (
        <ul className="shares__list">
          {shares.map((shareInfo) => (
            <li className="share" key={shareInfo.id}>
              <ShareCard card={shareInfo} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-shares">
          <h2>No shares found</h2>
        </div>
      )}
    </section>
  );
};

export default SharesList;
