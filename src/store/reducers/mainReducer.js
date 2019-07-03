import { combineReducers} from 'redux'
import users from './users'
import reports from './reports'
import fauna from './fauna'
import flora from './flora'
import register from './register'

export default combineReducers({
  users,
  reports,
  flora,
  fauna,
  register
})
