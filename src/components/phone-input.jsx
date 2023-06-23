import React, { useState } from "react";
// import phone-input that downloaded from "https://www.geeksforgeeks.org/how-to-add-phone-number-input-in-react-js/"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function PhoneInputGfg({phone, setPhone}) {

	return (
		<div>
			<PhoneInput
				country={"tr"}
				value={phone}
				onChange={phone => setPhone(phone)}
			/>
		</div>
	);
}