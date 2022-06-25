import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import stylesPost from "./Post.module.css";

export function Post({ author, content, publisherdAt }) {

  // console.log(publisherdAt)

  const publisherdDateFormatted = format(publisherdAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR
  })

  const publisherdDateRelativeToNow = formatDistanceToNow(publisherdAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={stylesPost.post}>
      <header>
        <div className={stylesPost.autor}>
          <Avatar src={author.avatarUrl} />

          <div className={stylesPost.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.office}</span>
          </div>
        </div>

        <time title={publisherdDateFormatted} dateTime={publisherdAt.toISOString()}>
          {publisherdDateRelativeToNow}
        </time>
      </header>

      <div className={stylesPost.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href={line.url}>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={stylesPost.formComment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={stylesPost.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
