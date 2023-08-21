import React from "react"
import { EnumInputType } from "../../enum/EnumInputType"
import { EnumButtonType } from "../../enum/EnumButtonType"
import { InputField } from "../../components/FormComponents/InputField"
import { PrimaryButton } from "../../components/Authentication/PrimaryButton"

export const Login = () => {
  return (
    <div className="flex flex-col space-y-3 px-5">
      <InputField name="user" label="teste" type={EnumInputType.TEXT} register={() => {}}/>
      <InputField name="user" label="teste" type={EnumInputType.TEXT} register={() => {}}/>
      <PrimaryButton isLoading={false} name="logar" type={EnumButtonType.BUTTON}/>
    </div>
  )
}