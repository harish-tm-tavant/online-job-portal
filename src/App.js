// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
	<BrowserRouter>
		<AuthProvider>
			<Routes>
				<Route path="/" element={<ProtectedRoute><JobList /></ProtectedRoute>} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				{/* Define other routes here */}
			</Routes>
		</AuthProvider>
	</BrowserRouter>
  );
}

export default App;
