import { atom } from "jotai";
import { UserTypes } from "../interface/types";
import { User } from "../types/interfaces";
import { Deployment } from "../types/interfaces";

export const isLoggedInAtom = atom(false);
export const userType = atom<UserTypes | null>(null);

export const userAtom = atom<User | null>(null);

export const selectedProductAtom = atom<Deployment | null>(null);
