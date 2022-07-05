import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Carlos Roberto" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum magnam corporis architecto porro et nemo nostrum cupiditate perferendis non aspernatur vel iusto, ducimus laborum reiciendis laudantium ratione? Quidem, voluptas?"
          />

          <Post 
            author="Jonas Receba" 
            content="Accusantium illum magnam corporis architecto porro et nemo"
          />
        </main>
      </div>
    </>
  )
}