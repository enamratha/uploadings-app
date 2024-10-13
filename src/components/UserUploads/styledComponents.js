import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url('https://img.freepik.com/free-photo/white-paper-texture-background_23-2151025686.jpg?ga=GA1.1.48591340.1727965003&semt=ais_hybrid-rr-similar');
  background-size: cover;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 80vw;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 10px;
`
export const InputElement = styled.input`
  border: 1px solid;
  border-radius: 5px;
  height: 30px;
  padding: 5px;
`
export const SubmitBtn = styled.button`
  align-self: flex-start;
  background-color: #096feb;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  height: 30px;
  width: 60px;
`
export const Heading = styled.h1`
  font-weight: 500;
`
