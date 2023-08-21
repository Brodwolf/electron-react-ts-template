import { EnumInputType } from "../../enum/EnumInputType";

export interface InputProps {
  id?: string;
  name: string;
  label?: string;
  register: any;
  disabled?: boolean;
  type: EnumInputType;
}
