import React from "react";
import Link from "next/link";

export default function Dashb() {
	return (
		<main>
			<div className="dashboard">
				<div className="threebox">
					<div className="cash">
						<div className="whitelogo">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="none"
							>
								<path
									d="M14.5345 7.47163V0.703369H7.61885V7.47163H0.703125V14.3873H7.61885V21.1556H14.5345V14.3873H21.4503V7.47163H14.5345ZM14.5345 14.2399H7.61885V7.62013H14.5345V14.2399Z"
									fill="white"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="43"
								height="16"
								viewBox="0 0 43 16"
								fill="none"
							>
								<path
									d="M7.32289 7.60974H13.9265V13.2162C12.5907 14.5144 10.5588 15.1917 8.18832 15.1917C3.57895 15.1917 0.681641 12.5389 0.681641 8.26822C0.681641 3.9975 3.57895 1.32596 7.90611 1.32596C10.3143 1.32596 12.1392 2.05969 13.4185 3.24496L11.7441 5.12633C10.8411 4.33615 9.46765 3.82818 7.92492 3.82818C5.23456 3.82818 3.44726 5.54023 3.44726 8.26822C3.44726 11.0903 5.30982 12.7459 8.28238 12.7459C9.46765 12.7459 10.54 12.5389 11.4243 11.8804V9.94263H7.32289V7.60974Z"
									fill="white"
								/>
								<path
									d="M25.8784 9.79212C25.8784 9.96145 25.8784 10.3565 25.8595 10.5635H17.8825C18.1647 12.0874 19.2183 12.9528 20.9115 12.9528C22.1156 12.9528 23.188 12.5013 23.8841 11.6359L25.5209 13.0281C24.5802 14.3262 23.0751 15.1352 20.7234 15.1352C17.2805 15.1352 15.2486 13.0281 15.2486 9.7545C15.2486 6.49973 17.4498 4.37378 20.5917 4.37378C24.1287 4.37378 25.8784 6.63142 25.8784 9.79212ZM20.5917 6.53735C19.2747 6.53735 18.2212 7.19583 17.9013 8.68212H23.3385C23.188 7.55329 22.379 6.53735 20.5917 6.53735Z"
									fill="white"
								/>
								<path
									d="M27.5716 14.9283V0.66748H30.1679V14.9283H27.5716Z"
									fill="white"
								/>
								<path
									d="M37.0449 15.154C34.0347 15.154 32.0781 13.0657 32.0781 9.77331C32.0781 6.48091 34.0535 4.41141 36.932 4.41141C37.9856 4.41141 39.2461 4.71243 40.0927 5.54023V0.66748H42.6514V14.9283H40.1303V13.9311C39.3214 14.9095 38.042 15.154 37.0449 15.154ZM37.6093 12.8211C38.5876 12.8211 39.6036 12.426 40.1303 11.4665V8.06126C39.6036 7.21465 38.55 6.74431 37.5529 6.74431C35.9161 6.74431 34.7496 7.8355 34.7496 9.77331C34.7496 11.6735 35.8784 12.8211 37.6093 12.8211Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
					<div className="whitebox">
						<div className="boxtop">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								fill="none"
							>
								<circle cx="4" cy="4" r="4" fill="#84CC16" />
							</svg>
							Your Income
						</div>
						<div className="bottominfo">
							<div className="tugrug">1,200,000₮</div>
							<div className="yia">Your income amount</div>
							<div className="arrow">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 11.7806C15.461 11.8504 15.3783 11.9057 15.2872 11.9434C15.1962 11.9812 15.0986 12.0006 15 12.0006C14.9014 12.0006 14.8038 11.9812 14.7128 11.9434C14.6218 11.9057 14.539 11.8504 14.4694 11.7806L12.75 10.0603V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V10.0603L9.53063 11.7806C9.3899 11.9214 9.19903 12.0004 9 12.0004C8.80098 12.0004 8.61011 11.9214 8.46938 11.7806C8.32865 11.6399 8.24959 11.449 8.24959 11.25C8.24959 11.051 8.32865 10.8601 8.46938 10.7194L11.4694 7.71937C11.539 7.64964 11.6218 7.59432 11.7128 7.55658C11.8038 7.51884 11.9014 7.49941 12 7.49941C12.0986 7.49941 12.1962 7.51884 12.2872 7.55658C12.3783 7.59432 12.461 7.64964 12.5306 7.71937L15.5306 10.7194C15.6004 10.789 15.6557 10.8717 15.6934 10.9628C15.7312 11.0538 15.7506 11.1514 15.7506 11.25C15.7506 11.3486 15.7312 11.4462 15.6934 11.5372C15.6557 11.6283 15.6004 11.711 15.5306 11.7806Z"
										fill="#84CC16"
									/>
								</svg>
								32% from last amount
							</div>
						</div>
					</div>
					<div className="whitebox">
						<div className="boxtop">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								fill="none"
							>
								<circle cx="4" cy="4" r="4" fill="#0166FF" />
							</svg>
							Total Expenses
						</div>
						<div className="bottominfo">
							<div className="tugrug">-1,200,000₮</div>
							<div className="yia">Your income amount</div>
							<div className="arrow">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M12 21.75C10.0716 21.75 8.18657 21.1782 6.58319 20.1068C4.97982 19.0355 3.73013 17.5127 2.99218 15.7312C2.25422 13.9496 2.06114 11.9892 2.43735 10.0979C2.81355 8.20655 3.74215 6.46927 5.10571 5.10571C6.46928 3.74215 8.20656 2.81355 10.0979 2.43734C11.9892 2.06114 13.9496 2.25422 15.7312 2.99218C17.5127 3.73013 19.0355 4.97981 20.1068 6.58319C21.1782 8.18657 21.75 10.0716 21.75 12C21.7473 14.585 20.7192 17.0634 18.8913 18.8913C17.0634 20.7192 14.585 21.7473 12 21.75ZM15.5306 12.2194C15.461 12.1496 15.3783 12.0943 15.2872 12.0566C15.1962 12.0188 15.0986 11.9994 15 11.9994C14.9014 11.9994 14.8038 12.0188 14.7128 12.0566C14.6218 12.0943 14.539 12.1496 14.4694 12.2194L12.75 13.9397V8.25C12.75 8.05109 12.671 7.86032 12.5303 7.71967C12.3897 7.57902 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.57902 11.4697 7.71967C11.329 7.86032 11.25 8.05109 11.25 8.25V13.9397L9.53063 12.2194C9.3899 12.0786 9.19903 11.9996 9 11.9996C8.80098 11.9996 8.61011 12.0786 8.46938 12.2194C8.32865 12.3601 8.24959 12.551 8.24959 12.75C8.24959 12.949 8.32865 13.1399 8.46938 13.2806L11.4694 16.2806C11.539 16.3504 11.6218 16.4057 11.7128 16.4434C11.8038 16.4812 11.9014 16.5006 12 16.5006C12.0986 16.5006 12.1962 16.4812 12.2872 16.4434C12.3783 16.4057 12.461 16.3504 12.5306 16.2806L15.5306 13.2806C15.6004 13.211 15.6557 13.1283 15.6934 13.0372C15.7312 12.9462 15.7506 12.8486 15.7506 12.75C15.7506 12.6514 15.7312 12.5538 15.6934 12.4628C15.6557 12.3717 15.6004 12.289 15.5306 12.2194Z"
										fill="#FF304C "
									/>
								</svg>
								32% from last amount
							</div>
						</div>
					</div>
				</div>
				<div className="incomeexpense">
					<div className="twobox">
						<div className="boxtop">Income Expense</div>
						<div className="infobottom2">
							<div className="indepth1">
								<div className="chartnumbers">
									<div>3,000,000</div>
									<div>2,000,000</div>
									<div>1,000,000</div>
									<div>0</div>
								</div>
								<div className="chart">
									<div className="chartthingy">
										<div className="greenorange">
											<div className="green"></div>
											<div className="orange"></div>
										</div>
										<div className="date">Jul</div>
									</div>
									<div className="chartthingy">
										<div className="greenorange">
											<div className="green"></div>
											<div className="orange"></div>
										</div>
										<div className="date">Jul</div>
									</div>
									<div className="chartthingy">
										<div className="greenorange">
											<div className="green"></div>
											<div className="orange"></div>
										</div>
										<div className="date">Jul</div>
									</div>
									<div className="chartthingy">
										<div className="greenorange">
											<div className="green"></div>
											<div className="orange"></div>
										</div>
										<div className="date">Jul</div>
									</div>
									<div className="chartthingy">
										<div className="greenorange">
											<div className="green"></div>
											<div className="orange"></div>
										</div>
										<div className="date">Jul</div>
									</div>
									<div className="chartthingy">
										<div className="greenorange">
											<div className="green"></div>
											<div className="orange"></div>
										</div>
										<div className="date">Jul</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="twobox">
						<div className="boxtop">Income expense</div>
						<div className="infobottom2">
							<div className="indepth">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="156"
									height="156"
									viewBox="0 0 156 156"
									fill="none"
								>
									<path
										d="M78 16C86.142 16 94.2042 17.6037 101.726 20.7195C109.249 23.8353 116.083 28.4022 121.841 34.1594C127.598 39.9166 132.165 46.7514 135.281 54.2736C138.396 61.7958 140 69.8581 140 78C140 86.142 138.396 94.2042 135.281 101.726C132.165 109.249 127.598 116.083 121.841 121.841C116.083 127.598 109.249 132.165 101.726 135.281C94.2042 138.396 86.1419 140 78 140C69.858 140 61.7958 138.396 54.2736 135.281C46.7514 132.165 39.9166 127.598 34.1594 121.841C28.4021 116.083 23.8352 109.249 20.7195 101.726C17.6037 94.2042 16 86.1419 16 78C16 69.858 17.6037 61.7958 20.7195 54.2736C23.8353 46.7514 28.4022 39.9166 34.1594 34.1594C39.9166 28.4021 46.7515 23.8352 54.2737 20.7195C61.7959 17.6037 69.8581 16 78 16L78 16Z"
										stroke="#16BDCA"
										stroke-width="32"
									/>
								</svg>
								<div className="dottedinfo">
									<div className="dotrow">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
										>
											<circle cx="6" cy="6" r="6" fill="#16BDCA" />
										</svg>
										Nothing yet.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="history">
					<div className="boxtop">History</div>
					<div className="lastrecordsrow">
						<div className="onelrrow">
							<div className="lrleft">
								<svg
									className="moneyy"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
								>
									<path
										d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z"
										fill="white"
									/>
								</svg>
								<div className="wordslr">
									<div>Lending & Renting</div>
									<div className="lending">3 hours ago</div>
								</div>
							</div>
							<div className="withdrawal">- 1,000₮</div>
						</div>
						<div className="onelrrow">
							<div className="lrleft">
								<svg
									className="moneyy"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
								>
									<path
										d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z"
										fill="white"
									/>
								</svg>
								<div className="wordslr">
									<div>Lending & Renting</div>
									<div className="lending">3 hours ago</div>
								</div>
							</div>
							<div className="withdrawal">- 1,000₮</div>
						</div>
						<div className="onelrrow">
							<div className="lrleft">
								<svg
									className="moneyy"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
								>
									<path
										d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z"
										fill="white"
									/>
								</svg>
								<div className="wordslr">
									<div>Lending & Renting</div>
									<div className="lending">3 hours ago</div>
								</div>
							</div>
							<div className="withdrawal">- 1,000₮</div>
						</div>
						<div className="onelrrow">
							<div className="lrleft">
								<svg
									className="moneyy"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
								>
									<path
										d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z"
										fill="white"
									/>
								</svg>
								<div className="wordslr">
									<div>Lending & Renting</div>
									<div className="lending">3 hours ago</div>
								</div>
							</div>
							<div className="withdrawal">- 1,000₮</div>
						</div>
						<div className="onelrrow">
							<div className="lrleft">
								<svg
									className="moneyy"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
								>
									<path
										d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z"
										fill="white"
									/>
								</svg>
								<div className="wordslr">
									<div>Lending & Renting</div>
									<div className="lending">3 hours ago</div>
								</div>
							</div>
							<div className="withdrawal">- 1,000₮</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
