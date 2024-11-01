import './App.css'
import Grandpa from './components/Family/Grandpa'
// import HookForm from './components/HookForm/HookForm'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StatefulForm/StateFulForm'

function App() {
  // const handleSignUpSubmit = data => {
  //   console.log('Sign Up', data)
  // }
  // const handleUpdateProfileSubmit = data => {
  //   console.log('Update Profile', data)
  // }
  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm
        handleSubmit={handleSignUpSubmit}
        formTitle={'Sign Up'}>
          <div>
            <h2>Sign Up Now</h2>
            <p>Get extra rewards!</p>
          </div>
        </ReuseableForm>
      <ReuseableForm
        handleSubmit={handleUpdateProfileSubmit}
        formTitle={'Profile Update'}
        submitBtnText={'Update'}>
          <div>
            <h2>Update Your Profile</h2>
            <p>Let&apos;s make your profile even better.</p>
          </div>
        </ReuseableForm> */}
        <Grandpa></Grandpa>
    </>
  )
}

export default App
