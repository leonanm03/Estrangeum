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
import { useState } from "react";

export default function SigninPage() {
  const [disabled, setDisabled] = useState(false);
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!body.email || !body.password) {
      alert("Preencha todos os campos!");
      return;
    }

    console.log(body);

    setDisabled(true);
  }

  function handleChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
    console.log(body);
  }

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
            <FormBody onSubmit={handleSubmit}>
              <InputBox>
                <LabelBox>
                  <LabelText>Email</LabelText>
                </LabelBox>
                <InputEntry
                  data-test="email"
                  disabled={disabled}
                  name="email"
                  value={body.name}
                  type="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                />
              </InputBox>

              <InputBox>
                <LabelBox>
                  <LabelText>Senha</LabelText>
                </LabelBox>
                <InputEntry
                  data-test="password"
                  disabled={disabled}
                  name="password"
                  value={body.password}
                  type="password"
                  placeholder="Senha"
                  onChange={handleChange}
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
