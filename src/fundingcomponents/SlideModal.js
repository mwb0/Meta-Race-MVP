import React, { useState, useEffect, useCallback, useContext } from "react";
import { Slide } from "./Slide";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  getNftTotalStaked,
  nftStake,
  nftUnstake,
  getNftTokenMunityMedals,
  getDaysToUnstake,
} from "../utils/Contract";
import { MyContext } from "../landingcomponents/MyContext";
import { FundingContext } from "./FundingContext";
import { Funding } from "./Funding";
import { StakeSettingModal } from "./StakeSettingModal";

export const SlideModal = () => {
  const AlertContext = useContext(MyContext);
  const [isconnect, SetIsconnect] = useState(false);
  const { tokenId, currentStaked } = useContext(FundingContext);
  const [nftTotalStaked, setNftTotalStaked] = useState(0);
  const [nftTokenMunityMedals, setNftTokenMunityMedals] = useState(0);
  const [daysToUnstake, setDaysToUnstake] = useState(0);
  const [stakeType, setStakeType] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const onSetModal = (visible) => {
    setModalShow(visible);
  };

  const context = useContext(FundingContext);

  return (
    <div
      className="SlideModal"
      style={
        isconnect !== true ? { minHeight: "200px" } : { marginTop: "310px" }
      }
    >
      <StakeSettingModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        stakeType={stakeType}
      />
      <div
        className="borderModal"
        style={
          isconnect !== true
            ? { height: "0px", width: "0px", display: "none" }
            : {}
        }
      >
        {isconnect === true ? (
          <div className="Slide">
            <Slide contextData={context} />
          </div>
        ) : (
          ""
        )}

        {isconnect === true ? (
          <div className="Modal">
            <div className="btnGroup btnGroup1">
              <div className=" ethBtn">
                <span className="iSpan">NFT Staked</span>
                <span className="cSpan">{nftTotalStaked}</span>
              </div>
              <div className=" ethBtn">
                <span className="iSpan">Munity Medals</span>
                <span className="cSpan">{nftTokenMunityMedals}</span>
              </div>
              <div className=" ethBtn">
                <span className="iSpan">Days to Unstake</span>
                <span className="cSpan">{daysToUnstake}</span>
              </div>
            </div>

            <div className="btnGroup btnGroup2">
              <div>
                <button
                  className="tabButton"
                  style={{
                    background: "none",
                    color: "#BABABA",
                  }}
                  onClick={async () => {
                    !currentStaked
                      ? setStakeType("nftStake")
                      : setStakeType("nftUnstake");
                    onSetModal(true);
                  }}
                >
                  {!currentStaked ? "Stake" : "Unstake"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
          // <div className="Modal2">
          //   <div className="btnGroup">
          //     <div>
          //       <div
          //         className="tabButton"
          //         style={{
          //           background: "none",
          //           color: "#BABABA",
          //         }}
          //         onClick={() => open()}
          //       >
          //         Connect Wallet
          //       </div>
          //     </div>
          //   </div>
          //   <div className="btnGroup">
          //     <div id="line1"></div>
          //   </div>
          //   <div className="btnGroup">
          //     <div className="text">
          //       <span id="text1">Description</span>
          //       <span id="text2">
          //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          //         do eiusmod tempor incididunt ut labore et dolore mmpor
          //         incididunt ut labore et dolore mLorem ipsum dolor sit amet,
          //         consectetur adipiscing elit, sed do eiusmod tempor incididunt
          //         ut labore et dolore mmpor incididunt ut labore et dolore m
          //       </span>
          //     </div>
          //   </div>
          // </div>
        )}
      </div>
    </div>
  );
};
