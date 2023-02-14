import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../..";

import { 
  FormContainer, 
  MinutesAmountInput, 
  TaskInput 
} from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

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
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        {...register("minutesAmount", { valueAsNumber: true })}
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}