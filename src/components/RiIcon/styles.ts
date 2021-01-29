import { FaSearch } from "react-icons/fa";
import { AiFillDelete, AiFillEdit, AiOutlineCloudUpload } from "react-icons/ai";
import styled from 'styled-components';


const styledIcon = (Icon: any) => styled(Icon)`
  color: gray;
  cursor: pointer;
  :hover,
  :focus {
    opacity: 0.9;
    color: green;
  }
`;

export const ICDeleteIconStyled = styled(AiFillDelete)`
  color: gray;
  cursor: pointer;
  :hover,
  :focus {
    opacity: 0.9;
    color: red;
  }
`;

export const ICEditIconStyled = styledIcon(AiFillEdit);
export const ICSearchStyled = styledIcon(FaSearch);
export const ICUploadStyled = styledIcon(AiOutlineCloudUpload);

