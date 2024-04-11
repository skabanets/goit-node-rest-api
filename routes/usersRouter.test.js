import mongoose from "mongoose";
import request from "supertest";

import { app } from "../app";
import { createUser, findUser } from "../services/usersServices";

const { DB_HOST } = process.env;

describe("test routes", () => {
  let server = null;

  beforeAll(async () => {
    server = app.listen(4444);
    await mongoose.connect(DB_HOST);
  });

  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });

  test("test login route", async () => {
    const newUser = {
      email: "kabanets97@gmail.com",
      password: "123456",
    };

    const user = await createUser(newUser);

    const loginUser = {
      email: "kabanets97@gmail.com",
      password: "123456",
    };

    const res = await request(app).post("/api/users/login").send(loginUser);
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeTruthy();

    const { token } = await findUser(user._id);
    expect(res.body.token).toBe(token);

    expect(res.body.user.email).toBeTruthy();
    expect(res.body.user.subscription).toBeTruthy();

    expect(typeof res.body.user.email).toBe("string");
    expect(typeof res.body.user.subscription).toBe("string");
  });
});
