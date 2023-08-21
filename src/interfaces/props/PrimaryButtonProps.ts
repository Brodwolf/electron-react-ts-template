import { EnumButtonType } from "../../enum/EnumButtonType";

export interface PrimaryButtonProps {
  isLoading: boolean;
  name: string;
  type: EnumButtonType;
  fluid?: boolean;
  onClick?: () => void;
}
