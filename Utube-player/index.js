// ASR: github reference: https://github.com/tjallingt/react-youtube

import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";

import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import "./styles.css";

// https://material-ui.com/components/links/
const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

const flexContainer = {
  display: "flex",
  flexDirection: "column", //
  padding: 0
};
// SR : created based on  DENSE concept given on this page
// https://material-ui.com/customization/density/
const denseContainer = {
  dense: true,
  padding: 0
};

const list = [
  {
    id: "a",
    fn: "https://www.youtube.com/watch?v=_Gnke2x3vT8",
    year: 1988
  },
  {
    id: "b",
    fn: "https://www.youtube.com/watch?v=Z8nUd5yM7Qs",
    year: 1990
  },
  {
    id: "c",
    fn: "https://www.youtube.com/watch?v=mGYUytLjJ8c",
    year: 1990
  }
];

class App extends Component {
  state = {
    url: "https://www.youtube.com/watch?v=Z8nUd5yM7Qs",
    pip: false,
    playing: true,
    controls: true,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  };

  //SR wrote this ...
  changeToNewVideo = (url, event) => {
    event.preventDefault();
    //alert(newUrl);
    this.setState({ url: url });
  };

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleStop = () => {
    this.setState({ url: null, playing: false });
  };

  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null
      },
      () => this.load(url)
    );
  };

  handleToggleLight = () => {
    this.setState({ light: !this.state.light });
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };

  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  handleEnablePIP = () => {
    console.log("onEnablePIP");
    this.setState({ pip: true });
  };

  handleDisablePIP = () => {
    console.log("onDisablePIP");
    this.setState({ pip: false });
  };

  handlePause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };

  handleSeekMouseDown = e => {
    this.setState({ seeking: true });
  };

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleProgress = state => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleEnded = () => {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  };

  handleDuration = duration => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };

  handleClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player));
  };

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip
    } = this.state;
    const SEPARATOR = " · ";

    return (
      <>
        <div>
          <ReactPlayer
            ref={this.ref}
            className="react-player"
            url={url}
            pip={pip}
            playing={playing}
            controls={controls}
          />
        </div>
        <br />
        <button onClick={this.handlePlayPause}>
          {playing ? "Pause" : "Play"}
        </button>
        <br />
        <table>
          <tbody>
            <tr>
              <th>Custom URL</th>
              <td>
                <input
                  ref={input => {
                    this.urlInput = input;
                  }}
                  type="text"
                  placeholder="Enter URL"
                />
                <button
                  onClick={() => this.setState({ url: this.urlInput.value })}
                >
                  Load
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <hr />
        <List style={flexContainer}>
          {list.map(item => (
            <ListItem style={denseContainer}>
              {/* passing parms to onClick : https://reactjs.org/docs/handling-events.html */}
              <Link
                href="#"
                onClick={event => this.changeToNewVideo(item.fn, event)}
                variant="body2"
              >
                {item.fn}
              </Link>
            </ListItem>
          ))}
          ddd333
        </List>
        <hr />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
