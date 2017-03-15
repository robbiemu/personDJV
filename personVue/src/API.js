export const contracts = {
  login: {
    uri: 'http://localhost:8000/api-auth/',
    config: { headers: { 'Content-Type': 'application/json' } }
  },
  register: {
    uri: 'http://localhost:8000/users/',
    config: { headers: { 'Content-Type': 'application/json' } }    
  },
  people: {
    uri: 'http://localhost:8000/people/',
    config: { headers: { 'Content-Type': 'application/json' } }    
  }
}