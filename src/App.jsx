

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./RootLayOut";
import Dashboard from "./page/Dashboard";
import Expenses from "./page/Expenses";
import Wallets from "./page/Wallets";
import Summary from "./page/Summary";
import Accounts from "./page/Accounts";
import Settings from "./page/Settings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="expenses" element={<Expenses/>}></Route>
        <Route path="wallets" element={<Wallets/>}></Route>
        <Route path="summary" element={<Summary/>}></Route>
        <Route path="accounts" element={<Accounts/>}></Route>
        <Route path="settings" element={<Settings/>}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App