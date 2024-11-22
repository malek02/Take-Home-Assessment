'use client';

import React from 'react';
import InputField from '../ui/inputField';
import { useUrlQuery } from '@/lib/custom-hooks/useUrlQuery';

export default function DetailsStep() {
  const [{}, setQuery] = useUrlQuery();
  const detailsList = [
    {
      label: 'Brand Name *',
      name: 'brandName',
      placeHolder: 'Brand Name...',
      type: 'text',
      onchange: (value: string) => {
        setQuery({ brandName: value });
      },
    },
    {
      label: 'Brand Website *',
      name: 'brandWebsite',
      placeHolder: 'https://...',
      type: 'text',
      onchange: (value: string) => {
        setQuery({ brandWebsite: value });
      },
    },
    {
      label: 'Campaign Name *',
      name: 'campaignName',
      placeHolder: 'Campaign Name...',
      type: 'text',
      onchange: (value: string) => {
        setQuery({ campaignName: value });
      },
    },
    {
      label: 'Campaign Goal *',
      name: 'campaignGoal',
      placeHolder: 'Goal...',
      type: 'select',
      items: [
        { value: 'Maximize Conversions', label: 'Maximize Conversions' },
        { value: 'Awareness', label: 'Awareness' },
      ],
      onchange: (value: string) => {
        setQuery({ campaignGoal: value });
      },
    },
    {
      label: 'Creative Brief *',
      name: 'creativeBrief',
      placeHolder: 'Fill Your Creative Brief',
      type: 'textarea',
      onchange: (value: string) => {
        setQuery({ creativeBrief: value });
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4 ">
      {detailsList.map(field => (
        <InputField
          key={field.label}
          name={field.name}
          type={field.type}
          label={field.label}
          items={field?.items}
          placeholder={field.placeHolder}
          onchange={field?.onchange}
        />
      ))}
    </div>
  );
}
