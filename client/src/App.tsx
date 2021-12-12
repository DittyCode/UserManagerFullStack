import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Welcome from './pages/Welcome/Welcome';
import { useSelector } from 'react-redux';
import { fetchUsers } from './store/users-slice';
import { useDispatch } from 'react-redux';
import Settings from './pages/Settings/Settings';
import CreateUser from './pages/CreateUser/CreateUser';

function App() {
	const users = useSelector(state => state);
	const dispatch = useDispatch();
	console.log(users);
	const [data, setData] = useState({});

	useEffect(() => {
		const data = dispatch(fetchUsers());
		setData(data);
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/' element={<Welcome />} />
			<Route path='/:id' element={<h1>id!</h1>} />
			<Route path='/create' element={<CreateUser />} />
			<Route path='/settings' element={<Settings />} />
		</Routes>
	);
}

export default App;
