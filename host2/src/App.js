import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import("app2/App"));

export default () => {

	return (
		<div>
			<div style={{
				margin: "10px",
				padding: "10px",
				textAlign: "center",
				backgroundColor: "cyan"
			}}>
				<h1 >App 1</h1>
			</div>

			<Suspense fallback={"loading..."}>
				<RemoteApp />
			</Suspense>
		</div>

	);
};
