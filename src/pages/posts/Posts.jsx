
import { useState } from "react";
import { Column, Container, DeleteButton, Input, MainPostWrapper, MainWrapper, PostButton, PostError, PostID, PostTheme, PostWrapper } from "./postStyles";
import { Wrapper } from "../../components/header/styles";

const inputs = [
    { name: "theme", placeholder: "Post Theme" },
    { name: "title", placeholder: "Title" },
    { name: "description", placeholder: "Description" },
  ];

const keys = {}
inputs.forEach((input) => {
    keys[input.name] = ''
})


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [values, setValues] = useState(keys)
  const [error, setError] = useState('')

  const addPost = () => {
    if(values.theme && values.title && values.description){
        setPosts([...posts, {...values, id: Date.now()}])
        setError('')
        setValues(keys)
        button.classList.add('addButtonNotActive')
        button.classList.remove('addButton')
    }else{
        setError('Ви ввели не всі дані')
    }
    
  };

  let button = document.querySelector('button')

  const activeButton = () => {   
    if(values.theme && values.title && values.description){
      button.classList.remove('addButtonNotActive')
      button.classList.add('addButton')
      console.log(1)
    }else{
      button.classList.add('addButtonNotActive')
    }
  }
  const deletePost = (id) => {
    const del = posts.filter((post) => post.id !== id);
    setPosts(del);
  };
  const onChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setValues({...values, [name]: value})
  }
  return (
    <MainWrapper>
      <MainPostWrapper>
        <Wrapper>
          <h1>Posts</h1>
        </Wrapper>
        <Container>
          <Column>
            {inputs.map((input) => (
              <Input
                onKeyUp ={activeButton}
               value={values[input.name]}
                onChange={onChange}
                key={input.name}
                {...input}
                type="text"

              />
            ))}

            <button className="addButtonNotActive" onClick={addPost}>
              Create Post
            </button>
            {error && <PostError>Error: {error} </PostError>}
          </Column>
          {posts.map((post) => (
            <PostWrapper key={post.id}>
              <div>
                <article>
                  <PostTheme>{post.theme}</PostTheme>
                  <p>{post.title}</p>
                  <p>{post.description}</p>
                </article>
              </div>
              <PostButton>
                <DeleteButton
                  onClick={() => deletePost(post.id)}
                >
                  Delete Post
                </DeleteButton>
              </PostButton>
              <PostID>
                <p>Post ID:{post.id}</p>
              </PostID>
            </PostWrapper>
          ))}
        </Container>
      </MainPostWrapper>
    </MainWrapper>
  );
};

export default Posts;
