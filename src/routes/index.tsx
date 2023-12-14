import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Posts from '../pages/posts'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router