import { UseFormReturn, useForm } from "react-hook-form";
import { SupplierRegisterShipping } from "../../modules/supplier-register/components/supplier-register-shipping";
import { SupplierRegisterGeneralInfo } from "../../modules/supplier-register/components/supplier-register-general-info";
import { SupplierRegisterDocuments } from "../../modules/supplier-register";
import {
  JSXElementConstructor,
  ReactElement,
  RefAttributes,
  forwardRef,
} from "react";

export type SupplierRegisterSteps = "general" | "delivery" | "documents";
export type SupplierRegisterFormStep = {
  title: string;
  progressPersentage: number;
  step: SupplierRegisterSteps;
};

export const FormSteps: SupplierRegisterFormStep[] = [
  {
    title: "Основная информация",
    progressPersentage: 10,
    step: "general",
  },
  {
    title: "О доставке",
    progressPersentage: 50,
    step: "delivery",
  },
  {
    title: "Документы",
    progressPersentage: 70,
    step: "documents",
  },
];
