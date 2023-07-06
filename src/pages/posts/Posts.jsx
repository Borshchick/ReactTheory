import { useState } from "react";
import { Wrapper } from "../../components/header/styles";
import {
  Column,
  Container,
  CreateButton,
  DeleteButton,
  Input,
  MainPostWrapper,
  MainWrapper,
  PostButton,
  PostError,
  PostID,
  PostTheme,
  PostWrapper,
} from "./postStyles";

const inputs = [
  { name: "theme", placeholder: "Post Theme" },
  { name: "title", placeholder: "Title" },
  { name: "description", placeholder: "Description" },
];

const keys = {};
inputs.forEach((input) => {
  keys[input.name] = "";
});

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [values, setValues] = useState(keys);
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const addPost = () => {
    if (values.theme && values.title && values.description) {
      setPosts([...posts, { ...values, id: Date.now() }]);
      setError("");
      setValues(keys);
    } else {
      setError("Ви ввели не всі дані");
    }
  };

  const deletePost = (id) => {
    const del = posts.filter((post) => post.id !== id);
    setPosts(del);
  };
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newValues = { ...values, [name]: value };

    setValues(newValues);

    let filledValues = 0;

    Object.values(newValues).forEach((value) => {
      if (value) {
        filledValues++;
      }
    });

    setIsDisabled(filledValues !== 3);
  };
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
                value={values[input.name]}
                onChange={onChange}
                key={input.name}
                {...input}
                type="text"
              />
            ))}

            <CreateButton disabled={isDisabled} onClick={addPost}>
              Create Post
            </CreateButton>
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
                <DeleteButton onClick={() => deletePost(post.id)}>
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




// import { useDispatch, useSelector } from "react-redux";
// import { saveInputValue, validateForm } from "./FormAction";
// const Posts = () => {
//   const inputs = useSelector((state) => state.inputs);
//   const errors = useSelector((state) => state.errors);
//   const dispatch = useDispatch();
//   const handleInputChange = (event, inputName) => {
//     const value = event.target.value;
//     dispatch(saveInputValue(inputName, value));
//   };
//   const handlуSubmit = (event) => {
//     event.preventDefault();
//     dispatch(validateForm());
//   };
//   const addPost = () => {
//     console.log(inputs)
//   };
//   return (
//     <form onSubmit={handlуSubmit}>
//       <div>
//         <label>
//           Post Name
//           <input
//             type="text"
//             value={inputs.name}
//             onChange={(event) => handleInputChange(event, "name")}
//           />
//           {errors.name && <div>{errors.name}</div>}
//         </label>
//       </div>
//       <div>
//         <label>
//           Post Theme
//           <input
//             type="text"
//             value={inputs.theme}
//             onChange={(event) => handleInputChange(event, "theme")}
//           />
//           {errors.theme && <div>{errors.theme}</div>}
//         </label>
//       </div>
//       <div>
//         <label>
//           Description
//           <input
//             type="text"
//             value={inputs.description}
//             onChange={(event) => handleInputChange(event, "description")}
//           />
//           {errors.description && <div>{errors.description}</div>}
//         </label>
//       </div>
//       <div>
//         <button type="submit" onClick={addPost}>
//           Submit
//         </button>

//       </div>
//     </form>
//   );
// };

// export default Posts;
