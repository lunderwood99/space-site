import { FunctionComponent } from "react"
import { InstagramLink } from "../../atoms/InstagramLink/InstagramLink"

export const Header: FunctionComponent = () => {
    return (
        <div className="w-screen flex flex-row justify-end mt-4 mr-16">
            <InstagramLink />
        </div>
    )
}