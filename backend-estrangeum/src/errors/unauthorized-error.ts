import { ApplicationError } from "@/protocols";

export function unauthorizedError(): ApplicationError {
  return {
    name: "UnauthorizedError",
    message: "unauthorized",
  };
}
