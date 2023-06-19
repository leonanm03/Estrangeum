import {
  Anchor,
  ButtonBox,
  FormBody,
  FormCard,
  Hero,
  HeroBody,
  HeroSideText,
  HeroSubtitle,
  HeroTitle,
  InputBox,
  InputEntry,
  LabelBox,
  LabelText,
  SubmitButton,
} from "@/styles/signStyle";
import Head from "next/head";

export default function SigninPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Hero>
        <HeroBody>
          <HeroSideText>
            <HeroTitle>Faça login agora!</HeroTitle>
            <HeroSubtitle>
              Não compartilhe sua senha com ninguém! A administração não pede
              sua senha!
            </HeroSubtitle>
          </HeroSideText>
          <FormCard>
            <FormBody>
              <InputBox>
                <LabelBox>
                  <LabelText>Email</LabelText>
                </LabelBox>
                <InputEntry
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </InputBox>

              <InputBox>
                <LabelBox>
                  <LabelText>Senha</LabelText>
                </LabelBox>
                <InputEntry
                  type="text"
                  placeholder="senha"
                  className="input input-bordered"
                />
              </InputBox>

              <LabelBox>
                <Anchor href="/sign-up">
                  Não tem uma conta? Cadastre-se agora!
                </Anchor>
              </LabelBox>

              <ButtonBox>
                <SubmitButton>Login</SubmitButton>
              </ButtonBox>
            </FormBody>
          </FormCard>
        </HeroBody>
      </Hero>
    </>
  );
}
