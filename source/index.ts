import argon2, { argon2id } from "argon2";

export const hash = async (plain: string): Promise<string> =>
  argon2.hash(plain, { type: argon2id });

export const verify = async (hash: string, plain: string): Promise<boolean> =>
  argon2.verify(hash, plain, { type: argon2id });
