import {atom} from "jotai";
import { UserTypes } from "../interface/types";


export const isLoggedInAtom = atom(false);
export const userType = atom<UserTypes | null>(null);