import styled from 'styled-components'

export const Container = styled.div`
  background-image: url('https://img.freepik.com/free-photo/white-paper-texture-background_23-2151025686.jpg?ga=GA1.1.48591340.1727965003&semt=ais_hybrid-rr-similar');
  background-size: cover;
  min-height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`
export const Heading = styled.h1`
  font-weight: 500;
`
export const UploadingsList = styled.ul`
  padding-left: 25px;
  padding-right: 25px;
  list-style-type: none;
  width: 100%;
  text-align: center;
  margin-top: 0;
  min-height: 70vh;
  background-color: #e8ebe9;
`
export const UploadedHead = styled.li`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #f5f7f6;
`
export const UploadedItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-top: 1px solid;
`
export const HeadParams = styled.h3`
  width: 33%;
`
export const LogoutBtn = styled.button`
  background-color: #096feb;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  height: 30px;
  width: 60px;
`
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
