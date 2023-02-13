import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle() {

  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput 
            id="task" 
            {...register("task")}
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
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
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}