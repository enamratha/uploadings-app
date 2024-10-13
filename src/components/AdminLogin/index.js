import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  Container,
  Form,
  InputContainer,
  InputElement,
  LoginBtn,
  Heading,
} from './styledComponents'

class AdminLogin extends Component {
  state = {
    name: '',
    password: '',
    showError: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value, showError: false})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value, showError: false})
  }

  submitForm = event => {
    event.preventDefault()
    const {name, password} = this.state
    if (name !== '' && password !== '') {
      Cookies.set('jwt_token', 'access_token', {expires: 1})
      const {history} = this.props
      history.replace('/admin-portal')
    } else {
      this.setState({showError: true})
    }
  }

  render() {
    const {name, password, showError} = this.state
    const cookie = Cookies.get('jwt_token')
    if (cookie !== undefined) {
      return <Redirect to="/admin-portal" />
    }
    return (
      <Container>
        <Form onSubmit={this.submitForm}>
          <Heading>Admin Login</Heading>
          <InputContainer>
            <label htmlFor="nameInput">Name:</label>
            <InputElement
              onChange={this.onChangeName}
              value={name}
              id="nameInput"
              type="text"
              placeholder="name"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="passwordInput">Password:</label>
            <InputElement
              onChange={this.onChangePassword}
              value={password}
              id="passwordInput"
              type="password"
              placeholder="password"
            />
          </InputContainer>
          <LoginBtn type="submit">Login</LoginBtn>
          {showError && <p>*Enter valid credentials</p>}
        </Form>
      </Container>
    )
  }
}

export default AdminLogin
