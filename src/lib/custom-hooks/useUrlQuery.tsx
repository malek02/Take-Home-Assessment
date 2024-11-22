'use client';

import { useQueryStates, parseAsArrayOf, parseAsString } from 'nuqs';

export function useUrlQuery() {
  return useQueryStates({
    brandName: parseAsString.withDefault(''),
    brandWebsite: parseAsString.withDefault(''),
    campaignName: parseAsString.withDefault(''),
    campaignGoal: parseAsString.withDefault(''),
    creativeBrief: parseAsString.withDefault(''),
    selectedImage: parseAsArrayOf(parseAsString).withDefault([]),
    selectedVideo: parseAsArrayOf(parseAsString).withDefault([]),
  });
}
