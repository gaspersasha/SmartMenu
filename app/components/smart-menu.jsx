import React from 'react';

class SmartMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            listVisible: false,
            title: this.props.title,
            position: {},
            ico: 'down'
        };
    }

    open = (e) => {
        this.setState({
            listVisible: !this.state.listVisible,
            position: this.getPosition(e.target),
        });
        document.addEventListener("click", this.close);
        window.addEventListener('scroll', this.close);
    };

    close = () => {
        this.setState({
            listVisible: false,
            ico: 'down'
        });
        document.removeEventListener("click", this.close);
        window.removeEventListener('scroll', this.close);
    };

    select(item){
        this.setState({ title: item.title});
    }

    getPosition(e){
        let el = e.classList.contains('SS-title') ? e : e.closest('.SS-title');
        let elementOffset = el.getBoundingClientRect();
        return this.calculatePosition(elementOffset);
    }

    calculatePosition(el){
        let result = {};
        let wHeight = document.documentElement.clientHeight;
        let calcHeight = el.height * this.props.list.length;
        let calcBottom = wHeight - (el.height + el.top);

        if(calcHeight < calcBottom){ // drop down
            result.top = el.height + el.top + 'px';
            result.left = el.left + 'px';
            result.width = el.width + 'px';
            this.setState({ ico: 'down'});

        }else if(calcHeight < el.top){ // drop up
            result.bottom = wHeight - el.top + 'px';
            result.left = el.left + 'px';
            result.width = el.width + 'px';
            this.setState({ ico: 'up'});

        }else{

            if(el.top < calcBottom){ //to bottom
                  result.top = el.top  + 'px';
                  result.height = calcBottom  - 20 + 'px';

            }else{
                result.bottom = calcBottom  + 'px'; //to top
                result.height = el.top - 20 + 'px';
            }
            if(( el.width * 2) <  el.left){
                result.right = el.right - el.left + 'px';
                this.setState({ ico: 'left'});

            }else{
                result.left = el.right + 'px';
                this.setState({ ico: 'right'});
            }
        }

        console.log(result);
        return result;
    }

    render(){
        return (
            <div className='SS-container'>
                <div className='SS-title' onClick={this.open}>
                    <span>{this.state.title}</span>
                    <i className={`ico arrow-${this.state.ico}`}></i>
                </div>
                <div className={'SS-list' + (this.state.listVisible ? ' opened' : ' closed')} style={this.state.position}>
                     {this.renderItems()}
                </div>
            </div>
        );
    }

    renderItems(){
        let render = [];
        for (let i = 0; i < this.props.list.length; i++){
            let item = this.props.list[i];
            render.push(<div key={i} className='item' onClick={this.select.bind(this, item)}>{item.title}</div>);
        }
        return render;
    }
}

module.exports = SmartMenu;
