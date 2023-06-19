import { w } from "windstitch";

export const Hero = w.div(`hero min-h-screen bg-base-200`);

export const HeroBody = w.div(`hero-content flex-col lg:flex-row-reverse`);

export const HeroSideText = w.div(`text-center lg:text-left`);

export const HeroTitle = w.h1(`text-5xl text-primary font-bold`);

export const HeroSubtitle = w.p(`py-6 text-primary`);

export const FormCard = w.div(
  `card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100`
);

export const FormBody = w.form(`card-body`);

export const InputBox = w.div(`form-control`);

export const LabelBox = w.label(`label`);

export const LabelText = w.span(`label-text`);

export const InputEntry = w.input(`input input-bordered`);

export const ButtonBox = w.div(`form-control mt-6`);

export const SubmitButton = w.button(`btn btn-primary`);

export const Anchor = w.a(`label-text-alt link link-hover`);
