import { useContext } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

import {
  FormContainer,
  MinusIcon,
  MinutesAmountInput,
  PlusIcon,
  TaskInput,
  WrapperMinutesAmount
} from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register, control } = useFormContext()

  function handleDecrementMinutesAmount(amount: number) {
    if (amount > 0) {
      return amount - 5
    }
  }

  function handleIncrementMinutesAmount(amount: number) {
    if (amount < 60) {
      return amount + 5
    }
  }

  return (
    <FormContainer>
      <label htmlFor="">Vou trabalhar em</label>
      <TaskInput
        id="task"
        {...register("task")}
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Sistema de turismo" />
        <option value="Sistema de galeria" />
        <option value="Landing pages" />
      </datalist>

      <label htmlFor="">durante</label>
      <Controller
        name="minutesAmount"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => {
          return (
            <WrapperMinutesAmount>
              <MinusIcon onClick={() => onChange(handleDecrementMinutesAmount(value))} />
              <MinutesAmountInput
                type="number"
                id="minutesAmount"
                {...register("minutesAmount", { valueAsNumber: true })}
                value={value}
                placeholder="00"
                disabled={!!activeCycle}
                step={5}
                min={5}
                max={60}
              />
              <PlusIcon onClick={() => onChange(handleIncrementMinutesAmount(value))} />
            </WrapperMinutesAmount>
          )
        }}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}