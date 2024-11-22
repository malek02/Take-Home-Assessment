"use client";
import Image from "next/image";
import React  from "react";
import { Checkbox } from "../ui/checkbox";
import { FieldArray, FormikProps } from "formik";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useUrlQuery } from "@/lib/custom-hooks/useUrlQuery";
import { StepsData } from "@/@core/models/steps-data";

export interface MediaSelectionProps {
  values: FormikProps<StepsData>;
}
export default function MediaSelection({ values }: MediaSelectionProps) {
  const imageStyle = {
    borderRadius: "4px",
    border: "1px solid #fff",
  };
  const [{}, setQuery] = useUrlQuery();
  const mediaAssets = [
    { url: "https://i.pinimg.com/236x/dc/90/f7/dc90f7f4081085317cc8c5e62444b038.jpg" },
    { url: "https://i.pinimg.com/236x/e1/27/bf/e127bf0afdbfebacb67cf4760544a6b8.jpg" },
    { url: "https://i.pinimg.com/236x/cc/c4/99/ccc499042e1ceee6cc85e8f3ef3e70b2.jpg" },
    { url: "https://i.pinimg.com/236x/40/2e/84/402e84ed7aeb12a4db3c1948fe20d696.jpg" },
    { url: "https://i.pinimg.com/236x/f2/2b/1c/f22b1c3b4471451a61a4cecef1eec6c1.jpg" },
    { url: "https://i.pinimg.com/236x/ea/a3/a1/eaa3a1a7247e0d920304f383343c52c7.jpg" },
    { url: "https://i.pinimg.com/236x/84/3b/42/843b421bae0db02215d3c955e0e1a93c.jpg" },
    { url: "https://i.pinimg.com/236x/80/21/ba/8021bae531b4d0a333565da4cf4232c6.jpg" },
    { url: "https://i.pinimg.com/236x/6f/da/92/6fda928a5c835c4d043b599c5f426d58.jpg" },
    { url: "https://i.pinimg.com/236x/cf/1b/98/cf1b98dccd0cb155a840e4ad0be3cef6.jpg" },

  ];

  const videoAssets = [
    { url: "https://videos.pexels.com/video-files/7895583/7895583-hd_1920_1080_30fps.mp4" },
    { url: "https://www.shutterstock.com/shutterstock/videos/3498819571/preview/stock-footage-monitor-agenda-events-using-scrum-software-on-desktop-computer.mp4" },
    { url: "https://videos.pexels.com/video-files/8633314/8633314-sd_640_360_30fps.mp4" },
    { url: "https://cdn.pixabay.com/video/2023/10/15/185092-874643408_large.mp4" },
    { url: "https://cdn.pixabay.com/video/2020/04/09/35573-407595474_large.mp4" },
  ];


  
  return (
    <div className=" w-full  flex flex-col gap-5 justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <div className=" w-full  flex flex-col gap-2  items-center">
        <h2 className="text-xl font-semibold ">Image - Gallery</h2>
        <div
          className={`flex overflow-auto p-2 max-h-[250px] gap-3 shadow-inner border justify-center items-center  flex-wrap rounded-lg ${
           values?.touched?.selectedImage &&  values?.errors?.selectedImage ? " border-red-500" : ""
          }`}
        >
          <FieldArray name="selectedImage">
            {({ push, remove }) =>
              mediaAssets?.map((asset) => {
                const isSelected = values?.values?.selectedImage?.includes(
                  asset.url
                );

                const handleToggleSelection = () => {
                  if (isSelected) {
                    remove(values?.values?.selectedImage.indexOf(asset.url));
                    setQuery({selectedImage:values?.values?.selectedImage?.filter((item:string)=>item !==asset.url)})
                  } else {
                    push(asset.url);
                    setQuery({selectedImage:[...values?.values?.selectedImage,asset.url]})
                  }
                 
                };

                return (
                  <div
                    key={asset.url}
                    className={` relative w-[220px] h-[200px] hover:opacity-60 hover:cursor-pointer`}
                  >
                    <div className="absolute top-1 right-1">
                      <Checkbox
                  
                        value={asset.url.toString()}
                        checked={isSelected}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            push(asset.url);
                            setQuery({selectedImage:[...values?.values?.selectedImage,asset.url]})
                          } else {
                            remove(
                              values?.values?.selectedImage?.indexOf(asset.url)
                            );
                            setQuery({selectedImage:values?.values?.selectedImage?.filter((item:string)=>item !==asset.url)})
                          }
                        }}
                      />
                    </div>
                    <Image
                      priority={true}
                      src={asset.url}
                      alt={asset.url}
               
                    
                      className={isSelected ? "opacity-20 ":""}
                      width={220}
                      height={200}
                      onClick={handleToggleSelection}
                      style={imageStyle}
                    />
                  </div>
                );
              })
            }
          </FieldArray>
        </div>
        {values?.touched?.selectedImage && values?.errors?.selectedImage && (
          <Alert variant="destructive" className="flex items-center mt-2">
            <AlertDescription>{values?.errors?.selectedImage}</AlertDescription>
          </Alert>
        )}
      </div>
      <div className=" w-full  flex flex-col gap-2  items-center">
        <h2 className="text-xl font-semibold ">Videos - Gallery</h2>
        <div
          className={`flex overflow-auto p-2 max-h-[260px] gap-3 shadow-inner border justify-center items-center flex-wrap rounded-lg ${
            values?.touched?.selectedVideo && values?.errors?.selectedVideo ? " border-red-500" : ""
          }`}
        >
          <FieldArray name="selectedVideo">
            {({ push, remove }) =>
              videoAssets?.map((asset) => {
                const isSelected = values?.values?.selectedVideo?.includes(
                  asset.url
                );

                const handleToggleSelection = () => {
                  if (isSelected) {
                    remove(values?.values?.selectedVideo.indexOf(asset.url));
                    setQuery({selectedVideo:values?.values?.selectedVideo?.filter((item:string)=>item !==asset.url)})
                  } else {
                    push(asset.url);
                    setQuery({selectedVideo:[...values?.values?.selectedVideo,asset.url]})
                  }
                  
                };

                return (
                  <div
                    key={asset.url}
                    className={` relative w-[220px] h-[200px]  hover:cursor-pointer`}
                  >
                    <div className="absolute top-1 right-1">
                      <Checkbox
                        value={asset.url.toString()}
                        checked={isSelected}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            push(asset.url);
                            setQuery({selectedVideo:[...values?.values?.selectedVideo,asset.url]})
                          } else {
                            remove(
                              values?.values?.selectedVideo?.indexOf(asset.url)

                            );
                            setQuery({selectedVideo:values?.values?.selectedVideo?.filter((item:string)=>item !==asset.url)})
                          }
                        }}
                      />
                    </div>
                    <video
                      src={asset.url}
                      controls
                      className={isSelected ? "opacity-20 ":""}
                      width={220}
                      height={200}
                   
                      onClick={handleToggleSelection}
                    />
                  </div>
                );
              })
            }
          </FieldArray>
        </div>
        {values?.touched?.selectedVideo && values?.errors?.selectedVideo && (
          <Alert variant="destructive" className="flex items-center mt-2">
            <AlertDescription>{values?.errors?.selectedVideo}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
