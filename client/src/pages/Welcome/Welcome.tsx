import Navbar from './../../components/Navbar/Navbar';
import UsersList from '../../components/Users/UsersList';
const Welcome = () => {
	return (
		<main className='main'>
			<Navbar />
			<UsersList />
		</main>
	);
};

export default Welcome;
