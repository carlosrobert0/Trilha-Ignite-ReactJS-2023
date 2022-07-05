import { Post } from "./Post"

export function App() {

  return (
    <>
      <Post 
        author="Carlos Roberto" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum magnam corporis architecto porro et nemo nostrum cupiditate perferendis non aspernatur vel iusto, ducimus laborum reiciendis laudantium ratione? Quidem, voluptas?"
      />

      <Post 
        author="Jonas Receba" 
        content="Accusantium illum magnam corporis architecto porro et nemo"
      />
    </>
  )
}