import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  OnDeleteComment: (comment: string) => void;
}

export function Comment({ content, OnDeleteComment }: CommentProps) {
  
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    OnDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                
                <div className={styles.commentContent}>
                  <header>
                    <div className={styles.authorAndTime}>
                      <strong>Diego Fernandes</strong>
                      <time title='01 de Julho às 16h17' dateTime='2022-07-01 16:17:40'>Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                      <Trash size={23} />
                    </button>
                  </header>

                  <p>{content}</p>
                  </div>
                   
                    <footer>
                        <button onClick={handleLikeComment}>
                          <ThumbsUp />
                          Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
            </div>
        </div>
    )
}