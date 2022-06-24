
import styleAvatar from './Avatar.module.css'

export function Avatar({ hasBorder = true, src}) {
    return(
        <img className={hasBorder ? styleAvatar.avatarWidthBorder : styleAvatar.avatar} src={src}/>
    )
}