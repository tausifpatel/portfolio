import React from 'react';
import './footer.scss';

import icons from '../images/sprite.svg';

const Footer = props => (
    <div className="footer-wrap">
        <div className="container-ultrawide">
            <div className="footer">       
                <a className="footer__email" href="mailto: tausifpatel.dev@gmail.com"> tausifpatel.dev@gmail.com</a>
                <div className="footer__logos">
                    <a href="https://github.com/tausifpatel" target="blank">
                        <svg className="footer__logo">
                            <use xlinkHref={`${icons}#${props.icon8}`} />
                        </svg>
                    </a>
                    <a href="https://dribbble.com/rrraja" target="blank">
                        <svg className="footer__logo">
                            <use xlinkHref={`${icons}#${props.icon9}`} />
                        </svg>
                    </a>
                    <a href="https://twitter.com/itsrraja" target="blank">
                        <svg className="footer__logo">
                            <use xlinkHref={`${icons}#${props.icon10}`} />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/ra.ja.london/" target="blank">
                        <svg className="footer__logo">
                            <use xlinkHref={`${icons}#${props.icon11}`} />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default Footer 