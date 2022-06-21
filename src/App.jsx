import { Header } from "./components/Header";
import { Post } from "././components/Post/Post";
import { Sidebar } from "./components/SideBar/SideBar";


import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post
            author="Ikaro Montanari"
            comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam provident aspernatur excepturi tenetur veniam, explicabo tempore sapiente quis vel, incidunt officiis enim porro iure minima, neque vitae. Repudiandae, laudantium cumque."
          />

          <Post
            author="Adam Bortolozo"
            comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam provident aspernatur excepturi tenetur veniam, explicabo tempore sapiente quis vel, incidunt officiis enim porro iure minima, neque vitae. Repudiandae, laudantium cumque."
          />
        </main>
      </div>
    </div>
  );
}
