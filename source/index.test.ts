import "jest-extended";

import { hash, verify } from "./index";

test("#hash", () => {
  expect(hash("hash")).resolves.toBeString();
});

test("#verify", () => {
  expect(verify("$argon2i$v=19$m=4096,t=3,p=1$CznaGHJNby2/yIK0n3LKHg$PaALs/b8zegrT8+fc/a20gE5G83bDjr3WizFOSbLRns", "hash")).resolves.toBeTrue();
  expect(verify("$argon2i$v=19$m=4096,t=3,p=1$CznaGHJNby2/yIK0n3LKHg$PaALs/b8zegrT8+fc/a20gE5G83bDjr3WizFOSbLRns", "nash")).resolves.toBeFalse();
});
