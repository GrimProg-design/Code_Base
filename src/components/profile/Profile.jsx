import "./Profile.css"
import Avatar from "./avatar/Avatar"

export default function Profile(){
    return(
        <div className="boxes-wrapper profile-wrapper">
            <Avatar
                alt="Фото Вавилова Ильи"
                caption="Вавилов Илья"
            />
        </div>
    )
}