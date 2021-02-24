import React from "react";
import {
  ICDeleteIconStyled,
  ICEditIconStyled,
  ICSearchStyled,
  ICUploadStyled,
  ICLoading,
} from "./styles";

export const RiIcon = {
  IcSearch: (props: any) => (
    <ICSearchStyled {...props} title="Buscar" size="30px" />
  ),
  IcEdit: (props: any) => (
    <ICEditIconStyled {...props} title="Editar" size="30px" />
  ),
  IcDelete: (props: any) => (
    <ICDeleteIconStyled {...props} title="Remover" size="30px" />
  ),
  IcUpload: (props: any) => (
    <ICUploadStyled {...props} title="Baixar" size="30px" />
  ),
  IcLoading: (props: any) => (
    <ICLoading {...props} title="Carregando" size="30px" />
  ),
};
