import React, { Component } from 'react';
import Header from './components/common/Header';
import Input from './components/common/Input';
import Button from './components/common/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Input />
        <Button/>
      </div>
    );
  }
}

export default App;