"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";


export type skills = {
    name: string;
    icon: string;
    link: string;
}

export function Card(skills: skills = { name: '', icon: '', link: ''}) {
    
  return (

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
          >
          <a href={skills.link} target="_blank">
            <img src={skills.icon}className="h-full w-full" alt="skills"/>
            </a>
        </CardItem>
        <div className="flex justify-between items-center">
        </div>
      </CardBody>
    </CardContainer>
  );
}
