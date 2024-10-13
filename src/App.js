import {Switch, Route} from 'react-router-dom'

import UserUploads from './components/UserUploads'
import AdminLogin from './components/AdminLogin'
import AdminPortal from './components/AdminPortal'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={UserUploads} />
    <Route path="/admin-login" component={AdminLogin} />
    <Route path="/admin-portal" component={AdminPortal} />
  </Switch>
)

export default App
