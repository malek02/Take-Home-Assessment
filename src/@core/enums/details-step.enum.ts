import * as Yup from "yup";

export enum StepsEnum {
  Details,
  MediaSelection,
  Summary,
}

export const stepsItems: StepsEnum[] = [
  StepsEnum.Details,
  StepsEnum.MediaSelection,
  StepsEnum.Summary,
];


export function toTitle(item: StepsEnum): string {
  switch (item) {
    case StepsEnum.Details:
      return "Brand and Campaign Details";
    case StepsEnum.MediaSelection:
      return "Media Selection";
    case StepsEnum.Summary:
      return "Summary and Workflow Launch";
    default:
      return "";
  }
}

export function toDescription(item: StepsEnum): string {
  switch (item) {
    case StepsEnum.Details:
      return "Fill details such as the brand name, campaign goal, and creative brief.";
    case StepsEnum.MediaSelection:
      return "Select and deselect multiple photos and videos from a gallery";

    default:
      return "";
  }
}

export function toValidation(type: StepsEnum): Yup.AnyObjectSchema | undefined {
  switch (type) {
    case StepsEnum.Details:
      return Yup.object().shape({
        brandName: Yup.string()
          .required("Please fill in this field")
          .max(34, "Name must be at most 34 characters")
          .min(2, "Name must be at least 2 characters"),
        campaignName: Yup.string()
          .required("Please fill in this field")
          .max(34, "Name must be at most 34 characters")
          .min(2, "Name must be at least 2 characters"),
        campaignGoal: Yup.string()
          .required("Please fill in this field")
          .max(34, "Campaign Goal must be at most 34 characters")
          .min(2, "Campaign Goal must be at least 2 characters"),
        creativeBrief: Yup.string().required("Please fill in this field"),

        brandWebsite: Yup.string()
          .url("Please enter a valid URL")
          .required("Please fill in this field"),
      });
    case StepsEnum.MediaSelection:
      return Yup.object()
        .shape({
          selectedImage: Yup.array()
            .of(Yup.string())
            .test(
              "selectedImage",
              "At least one Image ",
              (obj) => {
        
                return (obj && obj.length > 0);
              }
            ),
          selectedVideo: Yup.array().of(Yup.string()).test(
            "selectedVideo",
            "At least one Video ",
            (obj) => {
      
              return (obj && obj.length > 0);
            }
          ),
        })
        .test("one-not-empty", "At least one Image or video", (obj) => {
          const { selectedImage, selectedVideo } = obj || {};
     
          return (
            (selectedImage && selectedImage.length > 0) ||
            (selectedVideo && selectedVideo.length > 0)
          );
        });

  }
}
