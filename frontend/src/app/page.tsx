import { FunctionComponent } from "react"

export interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <div className="mb-auto mt-8 pt-8 w-full border-t-2 border-white">Home</div>
    </>
  )
}

export default Home