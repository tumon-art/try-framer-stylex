import { useState } from "react";

export default function Otp(){
    const [otp, setOtp] = useState(["", "", "", ""]);

    return <form>
        {otp.map((each,i)=> <input value={each} type="text" />)}
    </form>
}