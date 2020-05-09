import React from 'react'

class AnimatedCard extends React.Component {
  render() {
    const { position, digit, animation } = this.props;
    // console.log('AnimatedCard', position, digit, animation);
    return (
      <div className={`flipCard ${position} ${animation}`}>
        <span>{digit || '00'}</span>
      </div>
    );
  }
}

class StaticCard extends React.Component {
  render() {
    const { position, digit } = this.props;
    // console.log('StaticCard', position, digit);
    return (
      <div className={position}>
        <span>{digit || '00'}</span>
      </div>
    );
  }
}

export default class FlipUnit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shuffle: true,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {

    const { digit, pre_digit } = nextProps;

    if (digit !== this.props.digit && digit !== pre_digit)
      this.setState({
        shuffle: !this.state.shuffle,
      });
  }

  render() {
    const { digit, pre_digit, title } = this.props;
    // const { shuffle } = this.props;
    const { shuffle } = this.state;

    let now = digit;
    let before = pre_digit;

    // add zero
    if (now < 10) now = `0${now}`;
    if (before < 10) before = `0${before}`;

    return (
      <div className={'flipUnitContainer'}>
        <StaticCard
          position={'upperCard'}
          digit={now}
        />

        <StaticCard
          position={'lowerCard'}
          digit={before}
        />

        <AnimatedCard
          position={'first'}
          digit={shuffle ? before : now}
          animation={shuffle ? 'fold' : 'unfold'}
        />

        <AnimatedCard
          position={'second'}
          digit={!shuffle ? before : now}
          animation={!shuffle ? 'fold' : 'unfold'}
        />

        <div className='ContainerTitle'>{title}</div>

      </div>
    );
  }
}