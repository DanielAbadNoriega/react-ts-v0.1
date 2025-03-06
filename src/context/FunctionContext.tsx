import {createContext, useContext, useState, ReactNode } from "react";

type FunctionType = {
    id: string;
    name: string;
    permission: string[]
}