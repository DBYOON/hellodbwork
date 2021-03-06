import React, { Component }      from 'react';
import { Link }                  from 'react-router-dom';
//import ReactTimeout              from 'react-timeout';
import classNames                from 'classnames/bind';

//import styled                    from 'styled-components';
import Style                     from '../styles/Style.scss';
//import Animation from '../styles/Animation.scss';

import Platum                    from '../images/platum.png';
import Designhouse               from '../images/designhouse.png';
import Cia                       from '../images/cia.png';
import Scsr                      from '../images/scsr.png';
import Branded                   from '../images/branded.png';
import Iforu                     from '../images/i4u_4.png';
import Kbread                    from '../images/kbread.png';
import Goodrich                  from '../images/goodrich_3.png';
import Walnuts                   from '../images/walnuts.jpg';

import $                         from "jquery";

//window.$ = window.jQuery = jQuery;

const cx = classNames.bind(Style);

class WorkList extends Component{
    constructor(props){
        super(props);

        this.handleMouseOver     = this.handleMouseOver.bind(this);
        this.handleMouseHover    = this.handleMouseHover.bind(this);
        this.toggleHoverState    = this.toggleHoverState.bind(this);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);

        this.state               = {
            isMouseInside : false,
            hover         : false,
            isHovering    : false
        };
    }
    
    static defaultProps = {
        dev         : 'Git',
        codepen     : 'Codepen',
        event       : 'Event Page',
        platum      : 'Platum',
        designhouse : 'Designhouse Slowfoodfestival',
        skplanet    : 'SKplanet Blog(CIA)',
        csr         : 'Samsung CSR',
        bw          : 'Branded Works',
        iforu       : 'I4UWORKS Theme',
        ky          : 'KIM YOUNGMO',
        rich        : 'Rich&Co Blog',
        cw          : 'California Walnuts'

    }

    handleMouseOver = () => {
        $('li').hover(
            function(){
              $(this).find('img').addClass('work-ci-on').removeClass('work-ci-off').css('opacity','1');
              $(this).find('span:nth-child(3)').css('opacity','1');
            }, 
            function(){
              $(this).find('img').removeClass('work-ci-on').addClass('work-ci-off').css('opacity','0');
              $(this).find('span:nth-child(3)').css('opacity','0');
            }      
        );        
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
          isHovering: !state.isHovering
        };
    }

    onMouseEnterHandler(e){
        this.setState({
            isMouseInside: true
        });
        console.log('enter');

        $(e.currentTarget).one("mouseleave", function(e){
            this.onMouseLeaveHandler();
        }.bind(this));

    }


    onMouseLeaveHandler(){
        this.setState({
            isMouseInside: false
        });
        
        console.log('leave');
    }


    componentDidMount(){
        //console.log('componentDidMount : ??????????????? ??????????????? ??? ???????????? ??? ?????? ??? ???????????? ??????????????????. ??? ????????? ?????? JavaScript ?????????????????? ???????????????, setTimeout, setInterval ??? AJAX ?????? ?????? ????????????.');

        this.handleMouseOver();
        //$(document).ready(function(){
            /*$('li').on('mouseenter', function() {
                $(this).children('img').addClass('power').css('opacity','1');

            });
            
            $('li').on('mouseleave', function() {
                $(this).children('img').removeClass('power').css('opacity','0');
            });*/

        //});
    }

    render(){
        //const addClass = this.state.isMouseInside ? 'test': null;
        const imgStyle = {
            maxWidth : '94px'
        };

        return (
            <div>
                <ul>
                    <li>
                        <a href='https://github.com/DBYOON' target='_blank'>
                            <div className={cx('hidden')}></div>
                            <span className={cx('client')}>{ this.props.dev }</span>
                            <span className={cx('label')}>2019</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://codepen.io/dbyoon/pen/LMmMQe' target='_blank'>
                            <div className={cx('hidden')}></div>
                            <span className={cx('client')}>{ this.props.codepen }</span>
                            <span className={cx('label')}>2018</span>
                        </a>
                    </li>
                    <li>
                        <Link exact='true' to='/works/event-work'>
                            <div className={cx('hidden')}></div>
                            <span className={cx('client')}>{ this.props.event }</span>
                            <span className={cx('label')}>2018</span>
                        </Link>
                    </li>
                    <li>
                        <Link exact='true' to='/works/samsung-csr'>
                            <img src={ Scsr } alt='???????????? ????????????' />
                            <span className={cx('client')}>{ this.props.csr }</span>
                            <span className={cx('label')}>2017</span>
                        </Link>
                    </li>
                    <li>
                        <Link exact='true' to="/works/branded-works">
                            <img src={ Branded } alt="??????????????????" />
                            <span className={cx('client')}>{ this.props.bw }</span>
                            <span className={cx('label')}>2017</span>
                        </Link>
                    </li>
                    <li>
                        <Link exact='true' to="/works/iforu-theme">
                            <img src={ Iforu } alt="???????????? ??????" style={ imgStyle } />
                            <span className={cx('client')}>{ this.props.iforu }</span>
                            <span className={cx('label')}>2017</span>
                        </Link>
                    </li>                    
                    <li>
                        <Link exact='true' to="/works/platum">
                            <img src={ Platum } alt="?????????" />
                            <span className={cx('client')}>{ this.props.platum }</span>
                            <span className={cx('label')}>2017</span>
                        </Link>
                        {/*<NavLink exact to="/" className={ addClass } onMouseEnter={this.onMouseEnterHandler}>Platum</NavLink>*/}
                    </li>
                    <li>
                        <Link exact='true' to="/works/skplanet">
                            <img src={ Cia } alt="SK?????????" style={ imgStyle } />
                            <span className={cx('client')}>{ this.props.skplanet }</span>
                            <span className={cx('label')}>2016</span>
                        </Link>
                    </li>
                    <li>
                        <Link exact='true' to="/works/kbread">
                            <img src={ Kbread } alt="??????????????????" />
                            <span className={cx('client')}>{ this.props.ky }</span>
                            <span className={cx('label')}>2016</span>
                        </Link>                            
                    </li>                    
                    <li>
                        <Link exact='true' to="/works/slowfood">
                            <img src={ Designhouse } alt="?????????????????? ????????????" />
                            <span className={cx('client')}>{ this.props.designhouse }</span>
                            <span className={cx('label')}>2015</span>
                        </Link>
                        {/*<img className={cx(this.state.isMouseInside ? 'a' : 'b')} src={require('../images/designhouse.png')} />*/}
                        
                    </li>
                    <li>
                        <Link exact='true' to="/works/walnuts">
                            <img src={ Walnuts } alt="???????????????????????????" />
                            <span className={cx('client')}>{ this.props.cw }</span>
                            <span className={cx('label')}>2015</span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default WorkList;