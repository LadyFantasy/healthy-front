import { lazy } from "react";

// Containers
const RecoverPassword = lazy(() => import("views/RecoverPassword"));

export default [
	{
		path: "/password/recover",
		component: RecoverPassword,
		exact: true,
	},
];
