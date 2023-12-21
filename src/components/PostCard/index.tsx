import style from './style.module.css'
import iconLike from '../../assets/icon-like.svg'
import iconDislike from '../../assets/icon-dislike.svg'
import iconComment from '../../assets/icon-comment.svg'
import humanNumber from 'human-number'

type PostCardProps = {
  id: string
  author: string
  content: string
  like: number
  dislike: number
  comment?: number
  btnLike: (id: string) => void
  btnDislike: (id: string) => void
  btnComment?: (id: string) => void
}

const PostCard = (props: PostCardProps) => {
  return (
    <div className={style['post-card-container']}>
      <div className={style['post-card-author']}>
        <p>{props.author}</p>
      </div>
      <div className={style['post-card-content']}>
        <p>{props.content}
        </p>
      </div>
      <div className={style['post-card-actions-container']}>
        <div className={style['post-card-actions-item']}>
          <button onClick={() => props.btnLike(props.id)}>
            <img src={iconLike} alt="icone de like" />
          </button>
          <span className={style['post-card-total']}>
            {humanNumber(props.like - props.dislike)}
          </span>
          <button onClick={() => props.btnDislike(props.id)}>
            <img src={iconDislike} alt="icone dislike" />
          </button>

        </div>
        <div className={style['post-card-actions-item']}>
          {props.comment && (
            <button onClick={() => props.btnComment &&
              props.btnComment(props.id)}>
              <img src={iconComment} alt="icone comentário" />
              <span className={style['post-card-total']}>
                {humanNumber(props.comment)}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default PostCard
