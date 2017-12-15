var TestComponent = React.createClass({
    render(){
        return (
            <div>
                Hello
            </div>
        );
    }
});

ReactDOM.render(
    <TestComponent />,
    document.getElementById('app')
) 