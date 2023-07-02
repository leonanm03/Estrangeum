import supertest from "supertest";
import app from "@/app";

const server = supertest(app);

describe("Health", () => {
  it("should return 200", async () => {
    const response = await server.get("/health");
    expect(response.status).toBe(200);
  });
});
