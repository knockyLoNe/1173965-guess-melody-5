import React, {PureComponent} from "react";
import AudioPlayer from "../../components/audio-player/audio-player";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };

      this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(id) {
      this.setState({
        activePlayerId: this.state.activePlayerId === id ? -1 : id
      });
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          return (
            <AudioPlayer
              src={src}
              isPlaying={id === activePlayerId}
              onPlayButtonClick={() => this.handleButtonClick(id)}
            />
          );
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
