'use client';

import React, { useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Form, Formik } from 'formik';
import { StepsEnum, stepsItems, toDescription, toTitle, toValidation } from '@/@core/enums/details-step.enum';
import MediaSelection from '@/components/multi-step-form/media-selection-step';
import DetailsStep from '@/components/multi-step-form/details-step';
import SummaryStep from '@/components/multi-step-form/Summary-step';
import { useQueryState, parseAsInteger } from 'nuqs';
import { useUrlQuery } from '@/lib/custom-hooks/useUrlQuery';

export default function Home() {
  const [currentStep, setCurrentStep] = useQueryState<StepsEnum>('step', parseAsInteger.withDefault(0));

  const [{ brandName, brandWebsite, campaignName, campaignGoal, creativeBrief, selectedImage, selectedVideo }, setQuery] = useUrlQuery();

  useEffect(() => {
    if ((!brandName || !brandWebsite || !campaignName || !campaignGoal || !creativeBrief) && currentStep !== StepsEnum.Details) {
      setCurrentStep(StepsEnum.Details);
    } else if ((!selectedImage.length || !selectedVideo.length) && currentStep === StepsEnum.Summary) {
      setCurrentStep(StepsEnum.MediaSelection);
    }
  }, []);

  return (
  
      <>
      <div className=" w-full h-full drop-shadow-xl py-[2%] px-[10%] font-[family-name:var(--font-geist-sans)]">
        <Formik
          key={'key'}
          initialValues={{
            brandName,
            brandWebsite,
            campaignName,
            campaignGoal,
            creativeBrief,
            selectedImage,
            selectedVideo,
          }}
          validationSchema={toValidation(currentStep)}
          onSubmit={async (__, helpers) => {
            currentStep === StepsEnum.Details && setCurrentStep(StepsEnum.MediaSelection);
            currentStep === StepsEnum.MediaSelection && setCurrentStep(StepsEnum.Summary);
            currentStep === StepsEnum.Summary &&
              (await setQuery({
                brandName: '',
                brandWebsite: '',
                campaignName: '',
                campaignGoal: '',
                creativeBrief: '',
                selectedImage: [],
                selectedVideo: [],
              }),
              console.log('Workflow launched successfully!'),
              await setCurrentStep(StepsEnum.Details),
              helpers.setValues({
                brandName: '',
                brandWebsite: '',
                campaignName: '',
                campaignGoal: '',
                creativeBrief: '',
                selectedImage: [],
                selectedVideo: [],
              }),
              helpers.setTouched({
                brandName: false,
                brandWebsite: false,
                campaignName: false,
                campaignGoal: false,
                creativeBrief: false,
                selectedImage: false,
                selectedVideo: false,
              }));
          }}
        >
          {values => {
            return (
              <Form className="w-full h-full flex flex-col justify-center   ">
                <Card className="w-full h-full flex flex-col ">
                  <CardHeader>
                    <div className="flex justify-between items-center  mb-2">
                      {stepsItems.map((step, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
                            index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                          }`}
                        >
                          {index + 1}
                        </div>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="overflow-auto flex-1">
                    {currentStep !== StepsEnum.Summary && (
                      <>
                        <h2 className="text-lg font-semibold mb-1">{toTitle(currentStep)}</h2>
                        <h3 className="text-sm text-gray-400">{toDescription(currentStep)}</h3>
                      </>
                    )}
                    {currentStep == StepsEnum.Details && <DetailsStep />}
                    {currentStep == StepsEnum.MediaSelection && <MediaSelection values={values} />}
                    {currentStep == StepsEnum.Summary && <SummaryStep values={values.values} />}
                  </CardContent>
                  <CardFooter className="flex justify-between z-50">
                    <Button
                      type="button"
                      disabled={currentStep === StepsEnum.Details}
                      variant="outline"
                      onClick={() => {
                        currentStep === StepsEnum.MediaSelection && setCurrentStep(StepsEnum.Details);
                        currentStep === StepsEnum.Summary && setCurrentStep(StepsEnum.MediaSelection);
                      }}
                    >
                      Previous
                    </Button>
                    {currentStep === StepsEnum.Summary ? (
                      <Button
                        onClick={() =>
                          toast('Workflow launched successfully!', {
                            description: 'You can create again now',
                            action: {
                              label: 'Log',
                              onClick: () => console.log('Undo'),
                            },
                          })
                        }
                        type="submit"
                      >
                        Launch Workflow
                      </Button>
                    ) : (
                      <Button type="submit">Next</Button>
                    )}
                  </CardFooter>
                </Card>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Toaster className="z-50" />
      </>
  
  );
}
