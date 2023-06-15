import React from 'react';
import { FaHome, FaInfoCircle, FaDashcube, FaMoneyBillWave, FaUser,  } from 'react-icons/fa';


class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
  }

  handleItemClick = (itemName) => {
    this.setState({ activeItem: itemName });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="sidebar">
        <ul>
          <li
            className={activeItem === 'home' ? 'active' : ''}
            onClick={() => this.handleItemClick('home')}
          >
            <FaHome />
        <a href="/home"><span>Home</span></a>
        
          </li>
          <li
            className={activeItem === 'contact' ? 'active' : ''}
            onClick={() => this.handleItemClick('contact')}
          >
            <FaDashcube />
            <a href="/board"><span>Dashboard</span></a>
           
          </li>
          <li
            className={activeItem === 'about' ? 'active' : ''}
            onClick={() => this.handleItemClick('about')}
          >
            <FaUser />
            <a href=""><span>Users</span></a>
            
          </li>
          <li
            className={activeItem === 'contact' ? 'active' : ''}
            onClick={() => this.handleItemClick('contact')}
          >
            <FaMoneyBillWave />
            <a href=""><span>Transactions</span></a>
           
          </li>

       
       

        </ul>
      </div>
    );
  }
}

export default Admin;