import {Component} from 'react'
import {Link} from 'react-router-dom'

import {
  Container,
  Form,
  InputContainer,
  InputElement,
  SubmitBtn,
  Heading,
} from './styledComponents'

class UserUploads extends Component {
  render() {
    return (
      <Container>
        <Form
          action="https://file-upload-api-3.onrender.com/upload"
          method="POST"
          encType="multipart/form-data"
        >
          <Heading>User Submission Form</Heading>
          <InputContainer>
            <label htmlFor="nameInput">Name:</label>
            <InputElement
              htmlFor="nameInput"
              type="text"
              placeholder="name"
              name="name"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="usernameInput">Username:</label>
            <InputElement
              htmlFor="usernameInput"
              type="text"
              placeholder="social media handle"
              name="socialMediaHandle"
            />
          </InputContainer>
          <input type="file" name="profileImage" />
          <br />
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </Form>
        <Link to="/admin-login">Login as admin</Link>
      </Container>
    )
  }
}

export default UserUploads
