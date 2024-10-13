import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {
  Container,
  Heading,
  UploadingsList,
  UploadedHead,
  UploadedItem,
  HeadParams,
  LogoutBtn,
  TopSection,
  BottomSection,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
}

class AdminPortal extends Component {
  state = {
    data: [],
    status: apiStatus.initial,
  }

  componentDidMount() {
    this.getUploads()
  }

  getUploads = async () => {
    this.setState({status: apiStatus.loading})
    const url = 'https://file-upload-api-3.onrender.com/uploads'
    const details = await fetch(url)
    const uploads = await details.json()
    uploads.splice(0, 3)
    this.setState({data: uploads, status: apiStatus.success})
  }

  renderData = () => {
    const {data} = this.state
    return (
      <UploadingsList>
        <UploadedHead>
          <HeadParams>NAME</HeadParams>
          <HeadParams>USERNAME</HeadParams>
          <HeadParams>UPLOADED MEDIA</HeadParams>
        </UploadedHead>
        {data.map(datum => (
          <UploadedItem>
            <p>{datum.name}</p>
            <p>{datum.username}</p>
            <a
              href={`https://file-upload-api-3.onrender.com/uploads/${datum.image}`}
              target="_blank"
              rel="noreferrer"
            >
              media
            </a>
          </UploadedItem>
        ))}
      </UploadingsList>
    )
  }

  renderLoader = () => (
    <div>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/admin-login')
  }

  render() {
    const {status} = this.state
    const cookie = Cookies.get('jwt_token')
    if (cookie === undefined) {
      return <Redirect to="/admin-login" />
    }
    return (
      <Container>
        <TopSection>
          <Heading>Admin Portal</Heading>
          <LogoutBtn onClick={this.onLogout} type="button">
            Logout
          </LogoutBtn>
        </TopSection>
        <BottomSection>
          {status === apiStatus.success
            ? this.renderData()
            : this.renderLoader()}
        </BottomSection>
      </Container>
    )
  }
}

export default AdminPortal
