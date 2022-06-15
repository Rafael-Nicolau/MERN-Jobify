import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Error, Landing } from "./pages";
import {
  Stats,
  SharedLayout,
  Profile,
  AllJobs,
  AddJob,
} from "./pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="profile" element={<Profile />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
