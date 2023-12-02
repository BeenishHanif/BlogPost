import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import { format } from "date-fns";
import Home from "./Home";
import NewPosts from "./NewPosts";
import About from "./About";
import { useEffect, useState } from "react";
import Slider from "./Slider";
import PostPage from "./PostPage";
import api from "./api/posts";
import Footer from "./Footer";
import EditPost from "./EditPost";

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editImage, setEditImage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          //not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`ERROR: ${err.message}`);
        }
      }
    };
    fetchData();
  }, []);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMM dd,yyy pp");
    const updatedPost = {
      id,
      title: editTitle,
      datetime,
      description: editDescription,
      image: editImage,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) =>
          post.id === id
            ? {
                ...response.data,
              }
            : post
        )
      );
      setEditDescription("");
      setEditTitle("");
      setEditImage("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const idpost = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const id = idpost.toString();
    const datetime = format(new Date(), "MMM dd,yyy pp");
    const newPost = {
      id,
      datetime,
      title: postTitle,
      description: postDescription,
      image: postImage,
    };
    try {
      const response = await api.post("/posts", newPost);
      console.log(response);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostDescription("");
      setPostImage("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  const handleDelete = (id) => {
    try {
      api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <Header />
      <Slider />
      <Routes>
        <Route exact path="/" element={<Home posts={posts} />}></Route>
        <Route
          exact
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        ></Route>
        <Route
          path="/edit/:id"
          element={
            <EditPost
              posts={posts}
              editDescription={editDescription}
              editTitle={editTitle}
              editImage={editImage}
              setEditImage={setEditImage}
              postImage={postImage}
              setPostImage={setPostImage}
              setEditTitle={setEditTitle}
              setEditDescription={setEditDescription}
              handleEdit={handleEdit}
            />
          }
        ></Route>
        <Route
          exact
          path="/post"
          element={
            <NewPosts
              handleSubmit={handleSubmit}
              setPostTitle={setPostTitle}
              setPostDescription={setPostDescription}
              postDescription={postDescription}
              postTitle={postTitle}
              postImage={postImage}
              setPostImage={setPostImage}
            />
          }
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
