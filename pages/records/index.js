import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Recorb from "@/components/Recorb";
import Recorbleft from "@/components/Recorbleft";

export default function Records() {
	return (
		<>
			<Navbar />
			<div className="flex justify-center m-auto">
				<Recorb />
				<Recorbleft />
			</div>
		</>
	);
}
