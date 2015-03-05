var React = require('react');
var b = require('b_').with('y-input');

var Style = require('./index.css!');

var YInput = {
	displayName: 'y-input',

	__onFocus: function() {
		this.setState({focused: true});
	},

	__onBlur: function() {
		this.setState({focused: false});
	},

	__onMouseEnter: function() {
        this.setState({hovered: true});
    },

    __onMouseLeave: function() {
        this.setState({hovered: false});
    },

	getInitialState: function() {
		return {
			checked: this.props.checked,
			disabled: this.props.disabled,
			hovered: false,
			focused: this.props.focused,
			userInput: ''
		};
	},

	toggle: function (e) {
		if (this.state.disabled) { return; }
		this.setState({ checked: !this.state.checked });
	},
	clearInput: function () {
		this.setState({ userInput: '' });
	},
	handleChange: function(e) {
		this.setState({userInput: e.target.value});
    },
	render: function () {
		var selectClasses = b({
			theme: this.props.theme || 'normal',
			size: this.props.size || 'm',
			checked: this.state.checked,
			disabled: this.state.disabled,
			hovered: this.state.hovered,
			focused: this.state.focused
		});

		return (
			<span
				className={selectClasses}
				onClick={this.toggle}
				onMouseEnter={this.__onMouseEnter}
                onMouseLeave={this.__onMouseLeave}
				>
				<span className={b('box')}>
					<input
						ref="textInput"
						value={this.state.userInput}
            			onChange={this.handleChange}
						className={b('control')}
						placeholder={this.props.placeholder}
						onFocus={this.__onFocus}
						onBlur={this.__onBlur}/>

					<i className={b('clear', {visible: this.state.userInput && this.props.clearable})}
						onClick={this.clearInput}/>
				</span>
			</span>
		);
	}
};

module.exports = React.createClass(YInput);
module.exports.Class = YInput;
