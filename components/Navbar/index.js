import React from "react";
import Link from "next/link";

export default function Navbar() {
	return (
		<main>
			<div className="navbar">
				<div className="navbarlinks">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="29"
						height="28"
						viewBox="0 0 29 28"
						fill="none"
					>
						<path
							d="M18.8297 9.36777V0.300835H9.56526V9.36777H0.300781V18.6322H9.56526V27.6992H18.8297V18.6322H28.0942V9.36777H18.8297ZM18.8297 18.4347H9.56526V9.5667H18.8297V18.4347Z"
							fill="#0166FF"
						/>
					</svg>
					<Link href="/dashboard">
						<div>Dashboard</div>
					</Link>
					<Link href="/records">
						<div>Records</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
