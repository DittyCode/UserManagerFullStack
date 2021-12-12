import { SlowBuffer } from 'buffer';
import { useEffect, useState } from 'react';
function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3000/api/v1/users')
			.then(res => res.json())
			.then(data => console.log(data));
	});

	return <h1>Title!</h1>;
}

export default App;
