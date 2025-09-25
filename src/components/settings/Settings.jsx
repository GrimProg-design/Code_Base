import "./Settings.css"

import Switch from "./components/Switch"

export default function Settings() {
    return (
        <div className="boxes-wrapper settings-wrapper">
            <p>Settings</p>
            <div className="switch-wrapper">
                <Switch/>
                <Switch/>
                <Switch/>
            </div>
        </div>
    )
}