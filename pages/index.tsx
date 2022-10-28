import Seo from '../components/Seo/Seo'
import Input from '../components/Input/Input'

export default function Home() {
  return (
    <>
      <Seo
        title="HOME | PAGE"
        description="the first home page of carFord website"
      />

      <main className='w-full h-full grid grid-cols-default'>
        <div className='bg-slate-500'>
          <img
            src="https://images.unsplash.com/photo-1620310289900-5c34a0c687f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="signIn left image that is"
          />
        </div>
        <div>
          <header>
            <h1>CarFord</h1>
            <p>An application to join a car to the person</p>
          </header>

          <form>
            <Input />
            <Input />

            <button>Sign In</button>
          </form>
        </div>
      </main>
    </>
  )
}
