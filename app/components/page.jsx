import React from 'react';
import SmartMenu from 'SmartMenu';

let FirstList = [
    {
        title:'Hello',
        href:'',
    },
    {
        title:'My',
        href:'',
    },
    {
        title:'Name',
        href:'',
    },
    {
        title:'Is',
        href:'',
    },
    {
        title:'Sasha',
        href:'',
    },
];

let SecondList = [
    {
        title:'This',
        href:'',
    },
    {
        title:'Drops',
        href:'',
    },
    {
        title:'Down',
        href:'',
    },
    {
        title:'But',
        href:'',
    },
    {
        title:'If',
        href:'',
    },
    {
        title:'Has',
        href:'',
    },
    {
        title:'no',
        href:'',
    },
    {
        title:'space',
        href:'',
    },
    {
        title:'drops',
        href:'',
    },
    {
        title:'right >',
        href:'',
    },
];

let ThirdList = [
    {
        title:'This',
        href:'',
    },
    {
        title:'Drops',
        href:'',
    },
    {
        title:'Down',
        href:'',
    },
    {
        title:'But',
        href:'',
    },
    {
        title:'If',
        href:'',
    },
    {
        title:'Has',
        href:'',
    },
    {
        title:'no',
        href:'',
    },
    {
        title:'space',
        href:'',
    },
    {
        title:'drops',
        href:'',
    },
    {
        title:'left <',
        href:'',
    },
];

let FourthList = [
    {
        title:'This',
        href:'',
    },
    {
        title:'Always',
        href:'',
    },
    {
        title:'Goes',
        href:'',
    },
    {
        title:'Upper',
        href:'',
    },
    {
        title:'And',
        href:'',
    },
    {
        title:'Gets',
        href:'',
    },
    {
        title:'Parents',
        href:'',
    },
    {
        title:'Width',
        href:'',
    },
];

class Page extends React.Component{

    render(){
        return (
            <div>
                <div className='header'>
                    <div className='head-menu'>
                        <SmartMenu title='SmartMenu or SS' list={FirstList}/>
                    </div>
                    <sign>Created by <a target="_blank" href='https://github.com/gaspersasha'>gaspersasha</a></sign>
                </div>

                <div className='content'>
                    <div className='block block-left'>
                        <SmartMenu title='SS to Left' list={SecondList}/>
                    </div>
                    <div className='block block-right'>
                        <SmartMenu title='SS to Right' list={ThirdList}/>
                    </div>
                </div>

                <div className='footer'>
                    <SmartMenu title='SS to Bottom' list={FourthList}/>
                </div>

            </div>
        );
    }
}

module.exports = Page;

