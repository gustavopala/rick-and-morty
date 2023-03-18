import SearchBar from "./SearchBar";
import { NavLink } from 'react-router-dom';

export default function Nav({ onSearch }) {
    return (
        <NavLink>
            <SearchBar onSearch={onSearch} />
            <NavLink to="/">logout</NavLink>
            <NavLink to='/about'><h3>about</h3></NavLink>
            <NavLink to='/favorite'><h3>favorites</h3></NavLink>
            <NavLink to='/home' ><h3>home</h3></NavLink>
        </NavLink>
    );
}
