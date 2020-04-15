import React from 'react';
import classes from './Footer.module.css'
import instagram from '../../assets/images/icons/social/instagram.svg'
import vk from '../../assets/images/icons/social/vk.png'
import telegram from '../../assets/images/icons/social/telegram.svg'
import youtube from '../../assets/images/icons/social/youtube.png'

const Footer = () => {
    const refs = [
        {icon: instagram, name: 'Инстаграм', a: 'https://instagram.com/itkamasutra'},
        {icon: vk, name: 'Вконтакте', a: 'https://vk.com/itkamasutra'},
        {icon: telegram, name: 'Телеграм', a: 'https://telegram.me/itkamasutra'},
        {icon: youtube, name: 'YouTube', a: 'https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8'},
    ]

    const website = [
        {icon: 'IT-KAMASUTRA:', name: 'https://it-kamasutra.com', a: 'https://it-kamasutra.com'},
        {icon: 'IT-INCUBATOR:', name: 'https://it-incubator.bym', a: 'https://it-incubator.by'},
        {icon: 'PATREON:', name: 'https://www.patreon.com/itkamasutra', a: 'https://www.patreon.com/itkamasutra'},
        {icon: 'API:', name: 'https://social-network.samuraijs.com/', a: 'https://social-network.samuraijs.com/'},
    ]

    return (
        <div className={classes.footerWrapper}>
            <div className={classes.top}/>
            <div className={classes.footer}>
                <div>
                    {refs.map((item, index) => {
                        return (
                            <div className={classes.row} key={index}>
                                <div className={classes.icon}>
                                    <img src={item.icon} alt=""/>
                                </div>
                                <a href={item.a} target={'_blank'} className={classes.ref}>
                                    {item.name}
                                </a>
                            </div>
                        )
                    })}
                </div>

                <div>
                    {website.map((item, index) => {
                        return (
                            <div className={classes.row} key={index}>
                                <div className={classes.website}>
                                    {item.icon}
                                </div>
                                <a href={item.a} target={'_blank'} className={classes.ref}>
                                    {item.name}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Footer;