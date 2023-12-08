/* ==================================== Audit Log ======================================== *
 * Title: Logo Component
 * Author: Hashan
 * Created on: 8 Dec 2023
 * Description: Logo component for the UI
/* ======================================================================================== */

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: ["#487de7", "#70369d", "#487de7"],
          transition: { duration: 5, repeat: Infinity },
        }}
      >
        HM
      </MotionLink>
    </div>
  );
};

export default Logo;
