// src/pages/Press.js
import React from 'react';
import CreamSection from '../components/CreamPress/CreamSection';
import PressData from '../TeamData/PressData';
import PressHero from '../components/PressHeroSection/PressHero';


const Press = () => {
  return (
    <div className="flexPage">
    <PressHero/>
    <CreamSection data={PressData} currPage={"page"}/>
    </div>
  );
}

export default Press;
// const imglinks=[
//   https://ibb.co/ssSztCG
// https://ibb.co/mtHnHbP
// https://ibb.co/Bg8pKhH
// https://ibb.co/zZ1xHNS
// https://ibb.co/4dW8kdJ
// https://ibb.co/F0RBqcG
// https://ibb.co/v3pRLxc
// https://ibb.co/zRcDMHZ
// https://ibb.co/WBDDzzL
// https://ibb.co/NtdcK64
// https://ibb.co/SKB3Jz5
// https://ibb.co/5n1q2ch
// https://ibb.co/Fx1smSv
// https://ibb.co/Y0MmPfx
// https://ibb.co/92RGy98
// https://ibb.co/gPbgqD4
// https://ibb.co/9Vd3TxQ
// https://ibb.co/qnDb1Hr
// ]