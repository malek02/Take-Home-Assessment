"use client"
import React from "react";
import { Field, FieldProps } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

export interface InputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
  items?: { value: string; label: string }[];
  onchange?:(value:string)=>void
}

const InputField = ({
  name,
  type,
  label,
  placeholder,
  items,
  onchange
}: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Field name={name}>
        {({ meta, field, form }: FieldProps) => {
          return (
            <>
              {type == "text" && (
                <Input
                  onChange={(value) => {
                    onchange&&  onchange(value?.target?.value)
                    form.setFieldValue(name, value?.target?.value);
                  }}
                  onBlur={() => form.setFieldTouched(name)}
                  value={field.value}
                  placeholder={placeholder}
                  className={meta.touched && meta.error ? "border-red-500" : ""}
                />
              )}
              {type == "textarea" && (
                <Textarea
                  rows={4}
                  placeholder={placeholder}
                  value={field.value}
                  onBlur={() => form.setFieldTouched(name)}
                  onChange={(value) => {
                    onchange&&  onchange(value?.target?.value)
                    form.setFieldValue(name, value?.target?.value);
                  }}
                  className={meta.touched && meta.error ? "border-red-500" : ""}
                />
              )}
              {type == "select" && (
                <Select onValueChange={(value) => {
                  onchange&&  onchange(value)
                  form.setFieldValue(name, value);
         
                }}
                value={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
             
                      {items?.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
              {meta.touched && meta.error && (
                <Alert variant="destructive" className="flex items-center mt-2">
                  <AlertDescription>{meta.error}</AlertDescription>
                </Alert>
              )}
            </>
          );
        }}
      </Field>
    </div>
  );
};

export default InputField;
