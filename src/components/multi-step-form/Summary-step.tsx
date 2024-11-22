"use client";
import Image from "next/image"
import React from "react";
import { Briefcase, Globe, Target, FileText, Image as Picture, Video } from 'lucide-react'
import { StepsData } from "@/@core/models/steps-data";


export interface SummaryStepProps {
  values: StepsData;
}

export default function SummaryStep({values}:SummaryStepProps) {
  const imageStyle = {
    borderRadius: "4px",
    border: "1px solid #fff",
  };
  
  return (
    <div className=" w-full h-full font-[family-name:var(--font-geist-sans)]">
       <div className="grid gap-4">
       <div className="bg-primary p-2 flex flex-col items-center justify-center text-primary-foreground text-white rounded-xl">
        <div className="text-2xl font-bold">{values?.brandName}</div>
        <a
          href={values?.brandWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white break-all flex items-center gap-1"
        >
          <Globe className="h-4 w-4" />
          {values?.brandWebsite}
        </a>
      </div>
        <div className="flex justify-between items-center ">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-500" />
              Campaign
            </h3>
            <p className="text-gray-600">{values?.campaignName}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              Goal
            </h3>
            <p className="text-gray-600">{values?.campaignGoal}</p>
          </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5 text-yellow-500" />
              Creative Brief
            </h3>
            <div className="h-20  w-full overflow-auto rounded border p-2">
              <p className=" break-all text-gray-600">{values?.creativeBrief}</p>
            </div>
          </div>
          <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <Picture className="h-5 w-5 text-indigo-500" />
              Selected Images
            </h3>
          <div className="grid grid-cols-2 max-h-[180px] overflow-auto md:grid-cols-3 gap-2">
            {values?.selectedImage.map((url:string, index:number) => (
              <div key={index} className="relative aspect-video rounded-md overflow-hidden">
                <Image
                  src={url}
                  alt={`Campaign media ${index + 1}`}
                  style={imageStyle}
                   layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <Video className="h-5 w-5 text-red-500" />
              Selected Videos
            </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[160px] overflow-auto">
            {values?.selectedVideo.map((url:string, index:number) => (
              <div key={index} className="w-full h-full  rounded-md ">
                <video
                  src={url}
                  controls
                
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
        </div>
    </div>
  );
}
