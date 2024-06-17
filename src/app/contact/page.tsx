import { FunctionComponent } from "react"

export interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <>
      <div className="mt-8 pt-8 w-full border-t-2 border-white">
        <div className="mb-auto mt-16">Contact</div>
      </div>
    </>
  )
}

export default Contact