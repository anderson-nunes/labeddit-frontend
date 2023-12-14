import Button from "../Button"
import style from './style.module.css'

type PostProps = {
  labelAction: string
  placeholder: string
}


const Post = (props: PostProps) => {
  return (
    <div>
      <textarea
        className={style['post-textarea']}
        placeholder={props.placeholder}
        name=""
        id=""
        cols={30}
        rows={10}>

      </textarea>
      <Button
        onClick={() => console.log('Post')}
        type="button"
        variant="primary">
        {props.labelAction}
      </Button>
    </div>
  )
}

export default Post
