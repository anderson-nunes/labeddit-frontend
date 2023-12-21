import { Header } from "../../components/Header"
import logo from "../../assets/logo.svg"
import Post from "../../components/Post";
import style from './style.module.css'
import HorizontalLine from "../../components/HorizontalLine";
import PostCard from "../../components/PostCard";

const listPost = [
  {
    id: 'u001',
    author: 'Anderson',
    message: 'suhsaushuashahsas',
    like: 5,
    dislike: 1,
    comment: 5
  },
  {
    id: 'u002',
    author: 'Everton',
    message: 'suhsaushuashahsas',
    like: 12,
    dislike: 2,
    comment: 10
  },
  {
    id: 'u003',
    author: 'Ketlen',
    message: 'suhsaushuashahsas',
    like: 5,
    dislike: 1,
    comment: 8
  },
  {
    id: 'u004',
    author: 'Patricia',
    message: 'suhsaushuashahsas',
    like: 15,
    dislike: 2,
    comment: 10
  },
]


const Posts = () => {

  const handleBtnAction = () => {
    console.log('Botão de ação clicado');
  };

  return (
    <>
      <Header
        logo={logo}
        btnAction={handleBtnAction}
        labelAction="Logout"
      />
      <div className={style['post-container']}>
        <Post
          labelAction="Postar"
          placeholder="Escreva seu post..."
        />
        <HorizontalLine />
        <div className={style['post-card']}>
          {listPost.map((post) => (
            <PostCard
              id={post.id}
              author={post.author}
              btnComment={(id) => console.log(id)}
              btnDislike={(id) => console.log(id)}
              btnLike={(id) => console.log(id)}
              comment={post.comment}
              content={post.message}
              like={post.like}
              dislike={post.dislike}
            />
          ))}
        </div>
      </div >
    </>
  )
}

export default Posts
