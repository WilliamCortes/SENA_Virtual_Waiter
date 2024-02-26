import { Success, Info, Warning, Error } from "@/constants/icons.constant";
import { TMessage } from "../message.component";

export const initialState: TMessage = {
  text: "",
  type: "info",
  duration: 3000,
};

export const iconByType = {
  info: Info,
  success: Success,
  warning: Warning,
  error: Error,
};
