import { Header } from "../../components/Header"
import logo from "../../assets/logo.svg"
import PostCard from "../../components/PostCard";
import style from './style.module.css'
import Post from "../../components/Post";
import HorizontalLine from "../../components/HorizontalLine";

const PostComment = () => {

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

  const handleBtnAction = () => {
    console.log('Botão de ação clicado');
  };

  const handleBtnClose = () => {
    console.log('Botão de ação clicado');
  };

  return (
    <>
      <Header
        logo={logo}
        btnAction={handleBtnAction}
        btnClose={handleBtnClose}
        labelAction="Logout"
      />
      <div className={style['post-comment-container']}>
        <PostCard
          id={listPost[0].id}
          author={listPost[0].author}
          btnComment={(id) => console.log(id)}
          btnDislike={(id) => console.log(id)}
          btnLike={(id) => console.log(id)}
          comment={listPost[0].comment}
          content={listPost[0].message}
          likes={listPost[0].like}
          dislikes={listPost[0].dislike}
          localLike={false}
          localDislike={false}
          rating
        />
        {/* <Post
          placeholder="Adicionar comentário"
          labelAction="Responder"
        /> */}
        <HorizontalLine />
        <div className={style['post-comment']}>
          {listPost.map((post) => (
            <PostCard
              id={post.id}
              author={post.author}
              btnComment={(id) => console.log(id)}
              btnDislike={(id) => console.log(id)}
              btnLike={(id) => console.log(id)}
              content={post.message}
              likes={post.like}
              dislikes={post.dislike}
              localLike={false}
              localDislike={false}
              rating={false}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default PostComment
