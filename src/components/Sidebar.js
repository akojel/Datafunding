import React from 'react';
import { FaHome, FaInfoCircle, FaDashcube, FaMoneyBillWave, FaAnchor } from 'react-icons/fa';


class Sidebar extends React.Component {
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
            <FaInfoCircle />
            <a href="/buydata"><span>Buy Databundle</span></a>
            
          </li>
          <li
            className={activeItem === 'contact' ? 'active' : ''}
            onClick={() => this.handleItemClick('contact')}
          >
            <FaMoneyBillWave />
            <a href="/buyairtime"><span>Buy Airtime</span></a>
           
          </li>

          <li
            className={activeItem === 'gotvsubscription' ? 'active' : ''}
            onClick={() => this.handleItemClick('contact')}
          >
            <FaInfoCircle />
            <a href="/cable"><span>Gotvsubscription</span></a>
           
          </li>
          <li
            className={activeItem === 'wallet' ? 'active' : ''}
            onClick={() => this.handleItemClick('contact')}
          >
            <FaMoneyBillWave />
            <a href="/FundWallet"><span>Fund Wallet</span></a>
           
          </li>

          <li
            className={activeItem === 'wallet' ? 'active' : ''}
            onClick={() => this.handleItemClick('contact')}
          >
            <FaAnchor />
            <a href="/admin"><span>Admin</span></a>
           
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
