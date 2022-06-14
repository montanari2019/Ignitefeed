import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from "./App.modules.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>Sidebar</aside>

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
