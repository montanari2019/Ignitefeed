import stylesComments from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export function Comment({ comment }) {
  return (
    <div className={stylesComments.comment}>
      <Avatar hasBorder={false} src="https://github.com/montanari2019.png" />

      <div className={stylesComments.commentBox}>
        <div className={stylesComments.commentContent}>
          <header>
            <div className={stylesComments.authorAndTime}>
              <strong>Ikaro Montanari</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>

          </header>

          <p>{comment}</p>

        </div>

        <footer>
          <button>
            <ThumbsUp size={20} /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
