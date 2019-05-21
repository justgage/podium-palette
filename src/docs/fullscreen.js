import React, { Component } from 'react';

class Fullscreen extends Component {
  state = { showing: false };

  render() {
    return (
      <div
        className="cursor-pointer"
        onClick={() => this.setState({ showing: !this.state.showing })}
      >
        <button className="btn btn--primary p-3">
          click to see fullscreen
        </button>
        <div
          className={[
            this.state.showing ? ['w-screen', 'h-screen'].join(' ') : '',
            'w-14',
            'h-10',
            'opacity-75',
            'bg-black',
            'fixed',
            'pin-r',
            'pin-t',
            'transition-all',
            'z-max',
            'text-black',
            'text-right',
            'flex',
            'flex-col',
            'items-center',
            'justify-center'
          ].join(' ')}
        >
          <div className="text-white mb-3">.w-screen .w-height</div>
        </div>
      </div>
    );
  }
}

export default Fullscreen;
