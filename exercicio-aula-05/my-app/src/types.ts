import React from "react";

export type Card = {
    id: number;
    nome: string;
    rm: number;
    avatar: string;
  };
  

export type CabecalhoProps ={
    paginaprops:string;
}

export type ConteudoProps ={
    children: React.ReactNode;

}